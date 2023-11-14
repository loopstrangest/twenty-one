/** @format */

import * as fs from "fs";

type NumberSet = number[];
type OperatorSet = string[];
type UniqueSet = { numbers: NumberSet; operators: OperatorSet };

export function generateUniqueSets(): UniqueSet[] {
  const numberRange1 = [1, 2, 3, 4]; // Range for one of the numbers
  const numberRange2 = [6, 7, 8, 9]; // Range for another number
  const otherNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Range for the remaining numbers

  const operatorCombinations: OperatorSet[] = [
    ["×", "+", "−"],
    ["×", "÷", "+"],
    ["÷", "+", "−"],
    ["×", "÷", "−"],
  ];

  const uniqueKeys = new Set<string>();
  const uniqueSets: UniqueSet[] = [];

  for (const num1 of numberRange1) {
    for (const num2 of numberRange2) {
      for (const other1 of otherNumbers) {
        for (const other2 of otherNumbers) {
          const numSet: NumberSet = [num1, num2, other1, other2].sort(
            (a, b) => a - b
          );

          // Check if any number appears three or more times
          const numCounts: Record<number, number> = numSet.reduce(
            (acc, num) => {
              acc[num] = (acc[num] || 0) + 1;
              return acc;
            },
            {} as Record<number, number>
          );

          if (Object.values(numCounts).some((count: number) => count >= 3)) {
            continue; // Skip this set as it contains a number three or more times
          }

          for (const opSet of operatorCombinations) {
            const key = `${numSet.join(",")}:${opSet.join(",")}`;
            if (!uniqueKeys.has(key)) {
              uniqueKeys.add(key);
              uniqueSets.push({ numbers: numSet, operators: opSet });
            }
          }
        }
      }
    }
  }

  // Shuffle the unique sets
  for (let i = uniqueSets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueSets[i], uniqueSets[j]] = [uniqueSets[j], uniqueSets[i]];
  }

  return uniqueSets;
}

function writeSetsToTsFile(sets: UniqueSet[], filePath: string) {
  let fileContent = "let gameList = [\n";

  sets.forEach((set) => {
    fileContent += `\t{\n\t\tnumbers: [${set.numbers.join(
      ", "
    )}],\n\t\toperators: [${set.operators
      .map((op) => `"${op}"`)
      .join(", ")}]\n\t},\n`;
  });

  fileContent += "];\nexport default gameList;";

  console.log(`Writing to file: ${filePath}`);
  fs.writeFileSync(filePath, fileContent, "utf8");
  console.log(`Successfully wrote to file: ${filePath}`);
}

// Generate the unique sets
const uniqueSets = generateUniqueSets();

// Write the sets to a TypeScript file
writeSetsToTsFile(uniqueSets, "gameList.ts");
