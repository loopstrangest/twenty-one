/** @format */

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

interface EndScreenProps {
  gameNumber: number;
  shareObject: {
    rank: number;
    rankWithSuffixString: string;
    timeString: string;
    finalTime: number;
    equation: (string | number | null)[];
    result: number;
    bestEquation: (string | number | null)[];
    bestResult: number;
  } | null;
}

const EndScreen: React.FC<EndScreenProps> = ({ gameNumber, shareObject }) => {
  const [copied, setCopied] = useState(false);

  const handleShareClick = async () => {
    if (shareObject) {
      try {
        await navigator.clipboard.writeText(
          `🟢 Twenty One #${gameNumber} 🟢\n${
            shareObject.rankWithSuffixString === "best"
              ? "Best"
              : shareObject.rankWithSuffixString
          } equation found in ${
            shareObject.timeString
          }\nhttps://strangestloop.io/twenty-one`
        );
        setCopied(true);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  const rank = shareObject && shareObject ? shareObject.rank : 0;
  const equation =
    shareObject && shareObject.equation ? shareObject.equation.join(" ") : "";
  const result = shareObject ? shareObject.result : "";
  const bestEquation =
    shareObject && shareObject.bestEquation
      ? shareObject.bestEquation.join(" ")
      : "";
  const bestResult = shareObject ? shareObject.bestResult : "";
  return (
    <Box>
      <Typography my={1} sx={{ fontSize: "1.25em", fontWeight: "bold" }}>
        You found today's {shareObject?.rankWithSuffixString} equation!{" "}
        {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : ""}
      </Typography>
      <Typography my={1} sx={{ fontSize: "1.75em", fontWeight: "bold" }}>
        {equation} = {result}
      </Typography>
      {rank > 1 && (
        <>
          <Typography my={1} sx={{ fontSize: "1.25em", fontWeight: "bold" }}>
            Best equation:
          </Typography>
          <Typography my={1} sx={{ fontSize: "1.75em", fontWeight: "bold" }}>
            {bestEquation} = {bestResult}
          </Typography>
        </>
      )}
      <Typography my={1} sx={{ fontSize: "1.25em", fontWeight: "bold" }}>
        Come back tomorrow for a new game!
      </Typography>

      <button className="copy-button" onClick={handleShareClick}>
        {copied ? "Copied!" : "Share my score"}
      </button>
    </Box>
  );
};

export default EndScreen;
