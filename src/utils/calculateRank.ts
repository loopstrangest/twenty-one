/** @format */

import * as math from "mathjs";

// Function to generate all permutations of an array
function permute(arr: any[]): any[][] {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val: any[]) => [
          item,
          ...val,
        ])
      ),
    []
  );
}

export const calculateRank = (
  operators: string[],
  numbers: number[]
): {
  equation: any[];
  result: any;
  distance: number;
  rank: number;
  trueRank: number;
}[] => {
  // Generate all possible permutations of the numbers and operators
  const numberPermutations = permute(numbers);
  const operatorPermutations = permute(operators);

  // Create all possible equations
  const equations = [];
  for (let nums of numberPermutations) {
    for (let ops of operatorPermutations) {
      let equation = [];
      for (let i = 0; i < 4; i++) {
        equation.push(nums[i]);
        if (ops[i]) equation.push(ops[i]);
      }
      equations.push(equation);
    }
  }

  let ranks = equations.map((equation) => {
    // Replace Unicode operators with standard ones
    const standardEquation = equation.map((item) =>
      typeof item === "string"
        ? item
            .replaceAll("+", "+")
            .replaceAll("−", "-")
            .replaceAll("×", "*")
            .replaceAll("÷", "/")
        : item
    );

    let result = math.evaluate(standardEquation.join(""));
    result = parseFloat(result.toFixed(3)); // Round to 3 decimal places

    let distance = Math.min(Math.abs(result - 20), Math.abs(result - 1));
    distance = parseFloat(distance.toFixed(3)); // Round distance to 3 decimal places

    return { equation, result, distance, rank: 0, trueRank: 0 }; // Initialize rank and trueRank to 0
  });

  // Sort the ranks array based on distance
  ranks = ranks.sort((a, b) => a.distance - b.distance);

  // Assign rank based on sorted position, handle ties
  let previousRank = 1;
  let previousDistance = ranks.length > 0 ? ranks[0].distance : 0;
  let trueRank = 1; // Initialize trueRank to 1
  ranks = ranks.map((item, index) => {
    if (item.distance !== previousDistance) {
      previousRank = index + 1;
      previousDistance = item.distance;
      trueRank++; // Increment trueRank when rank changes
    }
    return {
      ...item,
      rank: previousRank,
      trueRank, // Add trueRank to the item
    };
  });

  return ranks;
};
