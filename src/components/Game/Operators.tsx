/** @format */

import React, { FC, useEffect } from "react";
import { Box } from "@mui/material";

interface OperatorsProps {
  operators: { operator: string; inEquation: boolean }[];
  onOperatorClick: (operator: string, index: number) => void;
}

const Operators: FC<OperatorsProps> = ({ operators, onOperatorClick }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyOperator = event.key;
      let operatorIndex = -1;

      switch (keyOperator) {
        case "=":
        case "+":
          operatorIndex = operators.findIndex(
            (item) => item.operator === "+" && !item.inEquation
          );
          break;
        case "-":
          operatorIndex = operators.findIndex(
            (item) => item.operator === "−" && !item.inEquation
          );
          break;
        case "x":
        case "*":
          operatorIndex = operators.findIndex(
            (item) => item.operator === "×" && !item.inEquation
          );
          break;
        case "/":
          operatorIndex = operators.findIndex(
            (item) => item.operator === "÷" && !item.inEquation
          );
          break;
        default:
          break;
      }

      if (operatorIndex !== -1) {
        onOperatorClick(operators[operatorIndex].operator, operatorIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [operators, onOperatorClick]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={1}>
      {operators.map((item, i) => (
        <button
          key={i}
          className="operator-button"
          onClick={() => onOperatorClick(item.operator, i)}
          disabled={item.inEquation}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            {item.operator}
          </Box>
        </button>
      ))}
    </Box>
  );
};

export default Operators;
