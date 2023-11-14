/** @format */

let gameList = [
  {
    numbers: [2, 4, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 2, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 7, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 7, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 7, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 2, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 3, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 3, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 3, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 3, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 8, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 6, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 3, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 6, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 3, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 2, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 8, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 2, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 6, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 7, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 3, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 3, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 6, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 8, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 2, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 3, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 6, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 2, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 3, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 8, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 2, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 7, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 8, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 7, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 7, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 7, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 7, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 2, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 2, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 2, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 3, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 2, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 3, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 3, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 7, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 2, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 7, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 3, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 6, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 8, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 8, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 2, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 6, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 7, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 3, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 5, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 6, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 5, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 7, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 6, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 3, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 7, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 7, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 2, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 7, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 3, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 8, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 8, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 3, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 7, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 7, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 7, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 7, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 2, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 7, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 3, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 8, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 3, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 6, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 8, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 8, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 8, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 3, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 7, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 3, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 8, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 6, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 7, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 8, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 7, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 2, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 3, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 3, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 2, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 2, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 5, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 3, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 8, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 3, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 3, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 7, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 7, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 8, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 8, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 3, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 7, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 8, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 7, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 3, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 6, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 8, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 7, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 7, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 3, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 8, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 6, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 7, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 6, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 8, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 7, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 3, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 6, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 6, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 8, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 7, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 2, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 7, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 8, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 3, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 7, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 7, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 6, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 7, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 3, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 3, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 6, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 2, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 3, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 3, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 7, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 6, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 6, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 3, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 6, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 7, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 3, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 2, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 6, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 7, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 6, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 6, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 8, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 3, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 2, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 6, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 2, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 7, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 5, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 6, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 6, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 6, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 3, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 3, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 4, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 6, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 3, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 3, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 6, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 3, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 7, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 2, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 7, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 2, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 3, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 7, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 7, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 2, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 2, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 7, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 3, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 5, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 6, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 3, 3, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 8, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 4, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 7, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 6, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 4, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 4, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 4, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 5, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 6, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 5, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 7, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 4, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 6, 7, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 7, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 3, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 5, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 5, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 5, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 4, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 3, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 7, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 6, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 3, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 6, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 3, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 5, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 6, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 8, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 2, 4, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 9, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 6, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 6, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 6, 6, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 7, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 6, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 7, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 2, 9, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 4, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 7, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 3, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 5, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 1, 5, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 5, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 3, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 8, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 5, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 8, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 6, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 4, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 2, 3, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 5, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 3, 5, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 2, 3, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 6, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 4, 5, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 6, 6],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 6, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 5, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 4, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 5, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 4, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 5, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 5, 8, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 6, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 3, 3, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 3, 7, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 4, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 8, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 3, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 4, 4, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 4, 6, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 4, 5, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 7, 8, 8],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 7, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 4, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 7, 7, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [4, 8, 8, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 7, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 3, 6, 7],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 1, 7, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [2, 2, 8, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 2, 7, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 6, 7, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [3, 7, 8, 8],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 3, 4, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 3, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 6, 9],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 7, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 5, 9, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [1, 1, 4, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 3, 6, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 6, 7],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [3, 4, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 3, 5, 8],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 3, 6, 6],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 5, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 6, 9],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [4, 6, 8, 8],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [1, 1, 6, 6],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 7, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 4, 8, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [1, 4, 5, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [1, 5, 7, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [4, 6, 8, 9],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [2, 4, 4, 6],
    operators: ["×", "÷", "−"],
  },
  {
    numbers: [2, 5, 6, 7],
    operators: ["×", "÷", "+"],
  },
  {
    numbers: [3, 4, 5, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [2, 4, 7, 7],
    operators: ["×", "+", "−"],
  },
  {
    numbers: [3, 8, 9, 9],
    operators: ["÷", "+", "−"],
  },
  {
    numbers: [4, 5, 5, 9],
    operators: ["×", "+", "−"],
  },
];
export default gameList;
