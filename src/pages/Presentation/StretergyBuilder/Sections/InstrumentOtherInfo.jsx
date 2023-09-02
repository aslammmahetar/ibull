import { Box, Button, Stack, Switch, Typography } from "@mui/material";
import React from "react";
import InstOthCounter from "./InstOthCounter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const InstrumentOtherInfo = () => {
  return (
    <Box
      style={{
        backgroundColor: "#FDFFFC",
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
      }}
      display={"flex"}
      justifyContent={"space-around"}
    >
      <Box>
        <Stack spacing={2}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography fontSize={"medium"}>Strikewise IVs</Typography>
            <Button>Reset IV</Button>
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography fontSize={"small"}> OffSet</Typography>
            <InstOthCounter />
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography fontSize={"small"}> 19250 31 Aug</Typography>
            <InstOthCounter />
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography fontSize={"small"}> 19350 31 Aug</Typography>
            <InstOthCounter />
          </Box>
        </Stack>
      </Box>
      <Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography fontSize={"medium"}>Greeks</Typography>
          <Typography fontSize={"small"}> Why Zero greeks?</Typography>
        </Box>
        <Box bgcolor={"lightgrey"} p={1} borderRadius={2}>
          <Box display={"flex"} alignItems={"center"}>
            <Switch />
            <Typography fontSize={"small"}>Multiply by Lot Size</Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Switch />
            <Typography fontSize={"small"}>Multiply by Number Of Lots</Typography>
          </Box>
        </Box>
        <Stack spacing={1}>
          <Typography
            fontSize={"small"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            Delta
            <HelpOutlineIcon /> 3
          </Typography>
          <hr />
          <Typography
            fontSize={"small"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            Theta
            <HelpOutlineIcon /> 3
          </Typography>
          <hr />
          <Typography
            fontSize={"small"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            Decay
            <HelpOutlineIcon /> 3
          </Typography>
          <hr />
          <Typography
            fontSize={"small"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            Gamma
            <HelpOutlineIcon /> 3
          </Typography>
          <hr />
          <Typography
            fontSize={"small"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            Vegga
            <HelpOutlineIcon /> 3
          </Typography>
          <hr />
        </Stack>
      </Box>
      <Box>
        <Typography fontSize={"medium"}>
          Target Day Features Prices <HelpOutlineIcon />
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={"small"}>31 AUg</Typography>
          <Typography fontSize={"small"}>19875.12</Typography>
        </Box>
        <Box mt={4}>
          <Typography fontSize={"medium"}>
            Standard Deviation <HelpOutlineIcon />{" "}
          </Typography>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography fontSize={"small"} color={"whitesmoke"}>
                ..
              </Typography>
              <Typography fontSize={"small"}>1 SD</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography fontSize={"small"}>Points</Typography>
              <Typography fontSize={"small"}>261 (1.4%)</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography fontSize={"small"}>Prices</Typography>
              <Typography fontSize={"small"}>19018.14</Typography>
              <Typography fontSize={"small"}>19018.14</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InstrumentOtherInfo;
