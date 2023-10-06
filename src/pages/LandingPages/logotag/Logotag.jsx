import { Grid, Typography } from "@mui/material";
import React from "react";

export const Logotag = () => {
  return (
    <Grid xs={12} sm={10} md={6} lg={7}>
      <Typography
        style={{
          textAlign: "left",
        }}
      >
        Welcome to{" "}
        <span
          style={{
            color: "black",
            fontFamily: `'Tourney', "cursive"`,
          }}
        >
          iBull
        </span>
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontFamily: `'Orbitron', 'sans-serif'`,
        }}
      >
        Unlock Your Financial Potential with IBull - Trade Options like a Pro
      </Typography>
    </Grid>
  );
};
