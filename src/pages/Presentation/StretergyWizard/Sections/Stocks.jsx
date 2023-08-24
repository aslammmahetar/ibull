import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const Stocks = () => {
  return (
    <Tooltip title="Open Chart">
      <Button
        style={{ backgroundColor: "whitesmoke", borderBottom: "solid grey  1px" }}
        display={"flex"}
        color="black"
        alignItems={"center"}
        justifyContent={"space-around"}
        p={1}
      >
        <Typography fontSize={"15px"}>NIFTY FUT 19745.45</Typography>
        <Box color="green" style={{ fontSize: "small" }}>
          +0.4%
          <Button variant="outlined" size="small">
            <TrendingUpOutlinedIcon color="info" />
          </Button>
        </Box>
      </Button>
    </Tooltip>
  );
};

export default Stocks;
