/** @format */

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logoImage from "../../images/logo.png";

const Logo = () => {
  return (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        verticalAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          className="header-title twenty"
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "2em", marginRight: "8px" }}
        >
          Twenty
        </Typography>
        <Typography
          className="header-title"
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "2em" }}
        >
          One
        </Typography>
        <img
          src={logoImage}
          alt="Logo"
          className="logo-image"
          style={{ width: "40px", marginLeft: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default Logo;
