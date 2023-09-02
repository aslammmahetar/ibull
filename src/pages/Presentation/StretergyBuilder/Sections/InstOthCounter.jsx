import { Box, Typography } from "@mui/material";
import React from "react";

const InstOthCounter = () => {
  return (
    <Box display={"flex"}>
      <Box
        border={"solid grey 1px"}
        borderRight={"none"}
        pl={1}
        pr={1}
        sx={{
          cursor: "pointer",
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        }}
      >
        <Typography fontSize={"small"}>-</Typography>
      </Box>
      <Box pl={2} pr={2} border={"solid grey 1px"} display={"flex"} alignItems={"center"}>
        <Typography fontSize={"small"}>7 Days</Typography>
      </Box>
      <Box
        border={"solid grey 1px"}
        pl={1}
        pr={1}
        borderLeft={"none"}
        sx={{
          cursor: "pointer",
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        }}
      >
        <Typography fontSize={"small"}>+</Typography>
      </Box>
    </Box>
  );
};

export default InstOthCounter;
