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
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
const MSSTab = () => {
  return (
    <Paper style={{ padding: 8 }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">Multi Straddle-Strangle</Typography>
        <InfoIcon />
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
