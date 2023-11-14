/** @format */

import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface PauseScreenProps {
  setIsPaused: (paused: boolean) => void;
}

const PauseScreen: React.FC<PauseScreenProps> = ({ setIsPaused }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "#efe9e6",
        height: "calc(100vh - 40rem)",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Paused
      </Typography>
      <button
        className="pause-screen-button"
        onClick={() => setIsPaused(false)}
      >
        Resume
      </button>
    </Box>
  );
};

export default PauseScreen;
