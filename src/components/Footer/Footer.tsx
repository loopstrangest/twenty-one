/** @format */

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import CoffeeIcon from "@mui/icons-material/Coffee";
import MailIcon from "@mui/icons-material/Mail";
import bmcImage from "../../images/bmc.png";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 1,
        fontSize: "0.75rem",
        lineHeight: "1rem",
        color: "gray",
      }}
    >
      <Typography variant="body1">
        Twenty One is brought to you by{" "}
        <Link
          href="https://strangestloop.io"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          @strangestloop
        </Link>
        !
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Link
          href="https://twitter.com/strangestloop"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          mx={2}
        >
          <TwitterIcon sx={{ fontSize: "30px" }} />
        </Link>
        <Link
          href="https://www.buymeacoffee.com/loopy"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          mx={2}
        >
          <img
            src={bmcImage}
            alt="Logo"
            className="logo-image"
            style={{ width: "20px" }}
          />
        </Link>
        <Link href="mailto:loopstrangest@gmail.com" color="inherit" mx={2}>
          <MailIcon sx={{ fontSize: "30px" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
