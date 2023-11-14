/** @format */

// SubmitButton.tsx

import { Box } from "@mui/system";
import React from "react";

interface SubmitButtonProps {
  onSubmit: (currentTime: number) => void; // The function to call when the button is clicked
  currentTime: number;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onSubmit,
  currentTime,
}) => {
  return (
    <Box mx={1}>
      <button onClick={() => onSubmit(currentTime)} className="submit-button">
        Submit
      </button>
    </Box>
  );
};

export default SubmitButton;
