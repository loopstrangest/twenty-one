/** @format */

import React from "react";
import { Box } from "@mui/system";
import Logo from "./Logo";
import DateAndStats from "./DateAndStats";
import HelpButton from "./HelpButton";
import Timer from "./Timer";

interface HeaderProps {
  currentTime: number;
  setCurrentTime: (time: number) => void;
  isGameEnded: boolean;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentTime,
  setCurrentTime,
  isGameEnded,
  isPaused,
  setIsPaused,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Logo />
        <DateAndStats />
      </Box>
      <Box
        className="help-timer-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: isGameEnded ? "space-around" : "space-between",
        }}
      >
        <HelpButton />
        <Timer
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          isGameEnded={isGameEnded}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      </Box>
    </Box>
  );
};

export default Header;
