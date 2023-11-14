/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueSets = void 0;
var fs = require("fs");
function generateUniqueSets() {
  var _a;
  var numberRange1 = [1, 2, 3, 4]; // Range for one of the numbers
  var numberRange2 = [6, 7, 8, 9]; // Range for another number
  var otherNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Range for the remaining numbers
  var operatorCombinations = [
    ["×", "+", "−"],
    ["×", "÷", "+"],
    ["÷", "+", "−"],
    ["×", "÷", "−"],
  ];
  var uniqueKeys = new Set();
  var uniqueSets = [];
  for (
    var _i = 0, numberRange1_1 = numberRange1;
    _i < numberRange1_1.length;
    _i++
  ) {
    var num1 = numberRange1_1[_i];
    for (
      var _b = 0, numberRange2_1 = numberRange2;
      _b < numberRange2_1.length;
      _b++
    ) {
      var num2 = numberRange2_1[_b];
      for (
        var _c = 0, otherNumbers_1 = otherNumbers;
        _c < otherNumbers_1.length;
        _c++
      ) {
        var other1 = otherNumbers_1[_c];
        for (
          var _d = 0, otherNumbers_2 = otherNumbers;
          _d < otherNumbers_2.length;
          _d++
        ) {
          var other2 = otherNumbers_2[_d];
          var numSet = [num1, num2, other1, other2].sort(function (a, b) {
            return a - b;
          });
          // Check if any number appears three or more times
          var numCounts = numSet.reduce(function (acc, num) {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
          }, {});
          if (
            Object.values(numCounts).some(function (count) {
              return count >= 3;
            })
          ) {
            continue; // Skip this set as it contains a number three or more times
          }
          for (
            var _e = 0, operatorCombinations_1 = operatorCombinations;
            _e < operatorCombinations_1.length;
            _e++
          ) {
            var opSet = operatorCombinations_1[_e];
            var key = "".concat(numSet.join(","), ":").concat(opSet.join(","));
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
exports.generateUniqueSets = generateUniqueSets;
function writeSetsToTsFile(sets, filePath) {
  var fileContent = "let gameList = [\n";
  sets.forEach(function (set) {
    fileContent += "\t{\n\t\tnumbers: ["
      .concat(set.numbers.join(", "), "],\n\t\toperators: [")
      .concat(
        set.operators
          .map(function (op) {
            return '"'.concat(op, '"');
          })
          .join(", "),
        "]\n\t},\n"
      );
  });
  fileContent += "];\nexport default gameList;";
  console.log("Writing to file: ".concat(filePath));
  fs.writeFileSync(filePath, fileContent, "utf8");
  console.log("Successfully wrote to file: ".concat(filePath));
}
// Generate the unique sets
var uniqueSets = generateUniqueSets();
// Write the sets to a TypeScript file
writeSetsToTsFile(uniqueSets, "src/utils/gameList.ts");
