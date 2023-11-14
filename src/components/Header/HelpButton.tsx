/** @format */

import React, { useState } from "react";
import HelpDialog from "../Modals/HelpDialog";

const HelpButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
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
