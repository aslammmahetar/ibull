import { Box, Stack, Tooltip, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import { useSelector } from "react-redux";
import QuizIcon from "@mui/icons-material/Quiz";

const InstrumentInfo = () => {
  const stretergyCreated = useSelector((store) => store.sbReducer.stretergyCreated);
  return (
    <MKBox style={{ backgroundColor: "#FDFFFC", padding: 5, borderRadius: 5, height: "150px" }}>
      {!stretergyCreated ? (
        <Typography fontSize={"meduim"} color={"grey"}>
          Summary..
        </Typography>
      ) : (
        <Box display={"flex"} justifyContent={"space-around"}>
          <Stack width={"30%"} spacing={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>Max profit</Typography>
              <Typography fontSize={"small"} color={"green"}>
                Max profit
              </Typography>
            </Box>
            <hr />

            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>
                Max Loss
                <Tooltip title="You cannot lose more than the maximum loss. Even if the trade goes completely wrong, the market goes up or crashes. However, in the case of calendar spreads, the max loss can be more than this number, as some option legs are open when the earliest expiry leg expires.">
                  <QuizIcon />
                </Tooltip>
              </Typography>
              <Typography color={"red"} fontSize={"small"}>
                1111121
              </Typography>
            </Box>
            <hr />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>Max profit</Typography>
              <Typography fontSize={"small"}>0.98</Typography>
            </Box>
            <hr />
          </Stack>
          <Stack width={"30%"} spacing={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>Breakeven</Typography>
              <Typography fontSize={"small"} color={"green"}>
                Max profit
              </Typography>
            </Box>
            <hr />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>
                POP
                <Tooltip title="You cannot lose more than the maximum loss. Even if the trade goes completely wrong, the market goes up or crashes. However, in the case of calendar spreads, the max loss can be more than this number, as some option legs are open when the earliest expiry leg expires.">
                  <QuizIcon />
                </Tooltip>
              </Typography>
              <Typography color={"red"} fontSize={"small"}>
                1111121
              </Typography>
            </Box>
            <hr />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>Project Return</Typography>
              <Typography fontSize={"small"}>0.98</Typography>
            </Box>
            <hr />
          </Stack>
          <Stack width={"30%"} spacing={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>Funds Needed</Typography>
              <Typography fontSize={"small"} color={"green"}>
                Max profit
              </Typography>
            </Box>
            <hr />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography fontSize={"small"}>
                Margin Needed
                <Tooltip title="You cannot lose more than the maximum loss. Even if the trade goes completely wrong, the market goes up or crashes. However, in the case of calendar spreads, the max loss can be more than this number, as some option legs are open when the earliest expiry leg expires.">
                  <QuizIcon />
                </Tooltip>
              </Typography>
              <Typography color={"red"} fontSize={"small"}>
                1111121
              </Typography>
            </Box>
            <hr />
          </Stack>
        </Box>
      )}
    </MKBox>
  );
};

export default InstrumentInfo;
