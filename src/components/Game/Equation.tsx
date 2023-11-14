/** @format */

import React, { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import * as math from "mathjs";

interface EquationProps {
  equation: (string | number | null)[];
  evaluation: number | null;
  setEvaluation: React.Dispatch<React.SetStateAction<number | null>>;
  handleSymbolClick: (symbol: string | number, index: number) => void;
}

const Equation: FC<EquationProps> = ({
  equation,
  evaluation,
  setEvaluation,
  handleSymbolClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace" || event.key === "Delete") {
        const lastNonNullItem = equation.filter((item) => item !== null).pop();
        const lastNonNullIndex =
          lastNonNullItem !== undefined
            ? equation.lastIndexOf(lastNonNullItem)
            : -1;
        if (lastNonNullIndex !== -1) {
          const symbol = equation[lastNonNullIndex];
          if (typeof symbol === "string" || typeof symbol === "number") {
            handleSymbolClick(symbol, lastNonNullIndex);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [equation, handleSymbolClick]);

  useEffect(() => {
    if (equation.every((item) => item !== null)) {
      const equationString = equation
        .join(" ")
        .replaceAll("+", "+")
        .replaceAll("−", "-")
        .replaceAll("×", "*")
        .replaceAll("÷", "/");
      try {
        let result = math.evaluate(equationString);
        if (result % 1 !== 0) {
          result = parseFloat(result.toFixed(3));
        }
        setEvaluation(result);
      } catch (error) {
        console.error("Failed to evaluate equation:", error);
        setEvaluation(null);
      }
    } else {
      setEvaluation(null);
    }
  }, [equation, setEvaluation]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      className="equation-container"
      pb={0}
      mb={0}
      sx={{ borderBottom: "1px solid black", width: "100%" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        mb={evaluation !== null ? 0.5 : 2}
      >
        {equation.map((item, i) => (
          <Box
            key={i}
            className="equation-box"
            alignItems="center"
            justifyContent="center"
            display="flex"
            onClick={() => item !== null && handleSymbolClick(item, i)}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      {evaluation !== null && (
        <Typography
          variant="h4"
          className="equation-result"
          mb={1}
          sx={{ fontWeight: "bold" }}
        >
          = {evaluation}
        </Typography>
      )}
    </Box>
  );
};

export default Equation;
