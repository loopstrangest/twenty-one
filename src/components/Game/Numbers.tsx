/** @format */

import React, { FC, useEffect } from "react";
import { Box } from "@mui/material";

interface NumbersProps {
  numbers: { number: number; inEquation: boolean }[];
  onNumberClick: (number: number, index: number) => void;
}

const Numbers: FC<NumbersProps> = ({ numbers, onNumberClick }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyNumber = Number(event.key);
      if (keyNumber >= 1 && keyNumber <= 9) {
        const numberIndex = numbers.findIndex(
          (item) => item.number === keyNumber && !item.inEquation
        );
        if (numberIndex !== -1) {
          onNumberClick(keyNumber, numberIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [numbers, onNumberClick]);

  return (
    <Box display="flex" justifyContent="center" m={1}>
      {numbers.map((item, i) => (
        <Box key={`numbers-box-${i}`} display="flex" justifyContent="center">
          <button
            key={`${item.number}-${i}`}
            className="number-button"
            onClick={() => onNumberClick(item.number, i)}
            disabled={item.inEquation}
          >
            {item.number}
          </button>
        </Box>
      ))}
    </Box>
  );
};

export default Numbers;
