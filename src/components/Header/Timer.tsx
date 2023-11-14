/** @format */

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface TimerProps {
  currentTime: number;
  setCurrentTime: (time: number) => void;
  isGameEnded: boolean;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

const Timer: React.FC<TimerProps> = ({
  currentTime,
  setCurrentTime,
  isGameEnded,
  isPaused,
  setIsPaused,
}) => {
  const [finalTime, setFinalTime] = useState(0);

  useEffect(() => {
    if (isGameEnded) {
      const shareObject = JSON.parse(
        localStorage.getItem("shareObject") || "{}"
      );
      setFinalTime(
        shareObject && "finalTime" in shareObject ? shareObject.finalTime : 0
      );
      return;
    }
    let interval: NodeJS.Timeout | null = null;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentTime(currentTime + 1);
      }, 1000);
    } else {
      if (interval !== null) {
        clearInterval(interval);
      }
    }
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isPaused, currentTime, setCurrentTime, isGameEnded]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {!isGameEnded && (
        <Button disableRipple onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? (
            <PlayArrowIcon className="icon-button" />
          ) : (
            <PauseIcon className="icon-button" />
          )}
        </Button>
      )}
      <Typography variant="h6">
        {finalTime !== 0
          ? `${Math.floor(finalTime / 60)
              .toString()
              .padStart(2, "0")}:${(finalTime % 60)
              .toString()
              .padStart(2, "0")}`
          : `${Math.floor(currentTime / 60)
              .toString()
              .padStart(2, "0")}:${(currentTime % 60)
              .toString()
              .padStart(2, "0")}`}
      </Typography>
    </Box>
  );
};

export default Timer;
