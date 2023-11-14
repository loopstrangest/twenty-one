/** @format */

import React from "react";
import { Dialog, Box, Link, Typography } from "@mui/material";
import { MouseEvent } from "react";
import logoImage from "../../images/logo.png";

interface HelpDialogProps {
  open: boolean;
  onClose: (event: MouseEvent<HTMLElement>) => void;
}

const HelpDialog = ({ open, onClose }: HelpDialogProps) => {
  return (
    <Dialog className="help-dialog" open={open} onClose={onClose}>
      <Box className="help-dialog-box">
        <Box display="flex" alignItems="center" justifyContent="left" mb={1}>
          <Typography variant="h5" fontWeight="bold">
            How to play Twenty One
          </Typography>
          <img
            src={logoImage}
            alt="Logo"
            className="logo-image"
            style={{ width: "40px", marginLeft: "8px" }}
          />
        </Box>
        <Typography mb={1} sx={{ fontSize: "1em" }}>
          Use all of the numbers and operators to make an equation that
          evaluates as closely as possible to <strong>20 or 1</strong>, the
          closer the better. Remember{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Order_of_operations#Definition"
            target="_blank"
            rel="noopener noreferrer"
            color="rgba(0, 0, 0, 1)"
          >
            PEMDAS
          </Link>
          !
        </Typography>
        <Typography mb={1} sx={{ fontSize: "1em" }}>
          When you have an equation you want to submit, click the "Submit"
          button. Find the best equation as fast as you can!
        </Typography>
        <button className="help-close-button" onClick={onClose}>
          Got it!
        </button>
      </Box>
    </Dialog>
  );
};

export default HelpDialog;
