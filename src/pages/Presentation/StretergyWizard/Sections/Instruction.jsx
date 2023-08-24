import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Instruction = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke", padding: 2 }}>
      <Typography fontSize={"medium"}>
        Got a question? Have Some feedback? Found a bug? Please Email us with your broker name and
        client ID at <span style={{ color: "blue" }}>help.ibull@gmail.com</span>
      </Typography>
    </div>
  );
};

export default Instruction;
