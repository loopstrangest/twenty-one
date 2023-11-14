/** @format */

import React from "react";
import {
  Dialog,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { loadState } from "../../utils/localStorage";

interface StatsDialogProps {
  open: boolean;
  onClose: () => void;
}

interface Result {
  date: string;
  rank: number;
  time: number;
}

const StatsDialog: React.FC<StatsDialogProps> = ({ open, onClose }) => {
  const totalGamesPlayed = loadState("totalDaysPlayed") || 0;
  const currentStreak = loadState("currentStreak") || 0;
  const longestStreak = loadState("longestStreak") || 0;
  const bestResults = loadState("bestResults") || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    let timeString = "";
    if (hours > 0) timeString += `${hours}h `;
    if (minutes > 0) timeString += `${minutes}m `;
    if (seconds > 0) timeString += `${seconds}s`;
    return timeString.trim();
  };

  return (
    <Dialog className="stats-dialog" open={open} onClose={onClose}>
      <Box className="stats-dialog-box">
        <Box display="flex" alignItems="center" justifyContent="left" mb={1}>
          <Typography variant="h5" fontWeight="bold">
            Your Twenty One Stats
          </Typography>
        </Box>
        <Box>
          <Typography my={0.5} variant="h6">
            <b>Total games played:</b> {totalGamesPlayed}{" "}
            {totalGamesPlayed === 1 ? "game" : "games"}
          </Typography>
          <Typography my={0.5} variant="h6">
            {" "}
            <b>Current streak:</b> {currentStreak}{" "}
            {currentStreak === 1 ? "day" : "days"}
          </Typography>
          <Typography my={0.5} variant="h6">
            {" "}
            <b>Longest streak:</b> {longestStreak}{" "}
            {longestStreak === 1 ? "day" : "days"}
          </Typography>
          <Typography my={0.5} variant="h6">
            {" "}
            <b>Top results:</b>
          </Typography>
          <TableContainer sx={{ marginBottom: 1 }}>
            <Table>
              <TableHead sx={{ bgcolor: "rgba(0,0,0,0.1)" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "1em",
                      border: "1px solid black",
                    }}
                  >
                    <b>Date</b>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "1em",
                      border: "1px solid black",
                    }}
                  >
                    <b>Rank</b>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "1em",
                      border: "1px solid black",
                    }}
                  >
                    <b>Solve time</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bestResults.map((result: Result) => (
                  <TableRow key={result.date} sx={{ bgcolor: "#efe9e6" }}>
                    <TableCell
                      align="center"
                      sx={{ fontSize: "1em", border: "1px solid black" }}
                    >
                      {formatDate(result.date)}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontSize: "1em", border: "1px solid black" }}
                    >
                      {result.rank}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontSize: "1em", border: "1px solid black" }}
                    >
                      {formatTime(result.time)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button className="stats-close-button" onClick={onClose}>
            Cool 😎
          </button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default StatsDialog;
