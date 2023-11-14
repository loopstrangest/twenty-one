/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";

interface TwentyOneDisplayProps {
  evaluation: number | null;
}

const TwentyOneDisplay: React.FC<TwentyOneDisplayProps> = ({ evaluation }) => {
  const getGlowStyle = (number: number) => {
    if (evaluation === null) return {};
    const diff1 = Math.abs(20 - (evaluation as number));
    const diff2 = Math.abs(1 - (evaluation as number));
    const glowStyle = {
      background: "radial-gradient(circle at center, #38B000, #70E000)",
      borderRadius: "50%",
      color: "white",
      boxShadow: "0 0 10px #38B000",
      outline: "none",
    };
    if (evaluation === 10.5) {
      return glowStyle;
    } else if (number === 20) {
      return diff1 <= diff2 ? glowStyle : {};
    } else {
      return diff2 < diff1 ? glowStyle : {};
    }
  };

  const defaultStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "142px",
    height: "142px",
    borderRadius: "50%",
    outline: "2px solid black",
  };

  return (
    <Box display="flex" justifyContent="space-around" my={2}>
      <Box sx={{ ...defaultStyle, ...getGlowStyle(20) }}>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          20
        </Typography>
      </Box>
      <Box sx={{ ...defaultStyle, ...getGlowStyle(1) }}>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          1
        </Typography>
      </Box>
    </Box>
  );
};

export default TwentyOneDisplay;
