import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import AddIcon from "@mui/icons-material/Add";
import KnowMoreDrawer from "./KnowMoreDrawer";
const MSSTab = () => {
  const MSDrawerContent = () => {
    return (
      <>
        <Typography variant="h4">Multi Straddle-Strangle Chart</Typography>
        <ul style={{ fontSize: "medium" }}>
          <li>
            This chart lets you add multiple straddles, strangles, or custom strategies and compare
            the prices of all those strategies
          </li>
          <li>
            You can add upto 6 strategies
            <ul>
              <li>Each strategy can contain a maximum of 6 options</li>
            </ul>
          </li>
          <li>
            Strategy price calculation
            <ul>
              <li>
                Strategy prices shown in this chart are computed based on ‘Sell Positive, Buy
                Negative’ convention
              </li>
              <li>
                As an example: consider a strategy comprising of 1x 19300CE Sell at 123.2 and 2x
                19400CE Buy at 65.4
              </li>
              <li>The price of this strategy will now be 123.2 - 2 x 65.4 = -7.6</li>
            </ul>
          </li>
        </ul>
      </>
    );
  };

  return (
    <Paper style={{ padding: 8 }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">Multi Straddle-Strangle</Typography>
        <KnowMoreDrawer content={MSDrawerContent} />
      </Box>
      <hr />
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box borderRight={"solid lightgrey 1px"} width={"50%"}>
          <Typography fontSize={"medium"} color={"gray"}>
            Price Display
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="LTP" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="VWAP" />
          </FormGroup>
        </Box>
        <Box>
          <Typography fontSize={"medium"} color={"gray"}>
            Show Stock Price
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="LTP" />
          </FormGroup>
        </Box>
      </Box>
      <hr />
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <Typography fontSize={"medium"} color={"gray"}>
            Selected Stretergies
          </Typography>
          <Button>Clear All</Button>
        </Box>
        <Stack spacing={1}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontSize={"medium"}>28 Sep 2420CE, 2420PE</Typography>
            <MoreVertIcon />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontSize={"medium"}>28 Sep 2420CE, 2420PE</Typography>
            <MoreVertIcon />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontSize={"medium"}>28 Sep 2420CE, 2420PE</Typography>
            <MoreVertIcon />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontSize={"medium"}>28 Sep 2420CE, 2420PE</Typography>
            <MoreVertIcon />
          </Box>
          <Box>
            <Button style={{ border: "solid blue 1px" }} fullWidth startIcon={<AddIcon />}>
              Add Stretergy
            </Button>
          </Box>
          <Box>
            <Typography fontSize={"medium"}>See Call/Put price, OI, VWAP and More</Typography>
            <Button startIcon={<LaunchIcon />}>Go to Multi Straddles/Strangles</Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default MSSTab;
{
  /* <Box bgcolor={"#FDFFFC"} borderRadius={"5px"}>
        <MKBox display={"flex"} style={{ padding: "5px" }} justifyContent="space-around">
          <IconButton onClick={handleSearchIconClick}>
            <Search />
          </IconButton>
          <div
            style={{
              top: "50px",
              right: "10px",
              // borderBottom: "1px solid black",
              marginRight: "5px",
            }}
          >
            <InputBase
              placeholder="Type Stock Name :SBIN, RELIANCE etc."
              value={"BANKNIFTY"}
              style={{ width: "80%", fontSize: "small" }}
            />
          </div>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Tooltip title="Open Chart">
              <Button variant="outlined" size="small">
                <TrendingUpOutlinedIcon color="info" />
              </Button>
            </Tooltip>
            <Button variant="outlined" style={{ width: "5px", color: "blue", marginLeft: "4px" }}>
              info
            </Button>
          </Box>
        </MKBox>
      </Box> */
}
