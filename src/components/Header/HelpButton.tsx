/** @format */

import React, { useState } from "react";
import HelpDialog from "../Modals/HelpDialog";

interface HelpButtonProps {
  setIsPaused: (paused: boolean) => void;
}

const HelpButton: React.FC<HelpButtonProps> = ({ setIsPaused }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => {
    setDialogOpen(true);
    setIsPaused(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setIsPaused(false);
  };

  return (
    <>
      <button className="help-button" onClick={handleOpen}>
        Help
      </button>
      <HelpDialog open={dialogOpen} onClose={handleClose} />
    </>
  );
};

export default HelpButton;
