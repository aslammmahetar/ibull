import { Grid } from "@mui/material";
import React from "react";

export const Logotag = () => {
  return (
    <Grid xs={12} sm={10} md={6} lg={6}>
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: `'Dancing Script', 'cursive'`,
        }}
      >
        iBull
      </h1>
      <h3
        style={{
          fontFamily: `'Orbitron', 'sans-serif'`,
        }}
      >
        " Trade Fearlessly with iBull Options by Your Side "
      </h3>
    </Grid>
  );
};
