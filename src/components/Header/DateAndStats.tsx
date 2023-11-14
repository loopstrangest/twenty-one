/** @format */

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import StatsDialog from "../Modals/StatsDialog";

const DateAndStats = () => {
  const currentDate = new Date().toLocaleDateString();

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: "1em" }}>{currentDate}</Typography>{" "}
        <Button disableRipple sx={{ fontSize: "1em" }} onClick={handleOpen}>
          {" "}
          <BarChartIcon className="icon-button" />
        </Button>
      </Box>
      <StatsDialog open={dialogOpen} onClose={handleClose} />
    </>
  );
};

export default DateAndStats;
