import React, { useState } from "react";
import { IconButton, Typography, Grid } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const MonthPicker = () => {
  // Initialize the current date state
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to change the month to the previous month
  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Function to change the month to the next month
  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <IconButton onClick={handlePreviousMonth}>
          <KeyboardArrowLeft />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          {currentDate.toLocaleString("default", { month: "long" })}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={handleNextMonth}>
          <KeyboardArrowRight />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default MonthPicker;
