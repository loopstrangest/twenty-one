/** @format */

import { Box } from "@mui/system";
import React from "react";

interface ClearButtonProps {
  onClear: () => void; // The function to call when the button is clicked
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
  return (
    <Box mx={1}>
      <button onClick={onClear} className="clear-button">
        Clear
      </button>
    </Box>
  );
};

export default ClearButton;
