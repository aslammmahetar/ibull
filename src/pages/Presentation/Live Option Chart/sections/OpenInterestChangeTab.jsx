import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import KnowMoreDrawer from "./KnowMoreDrawer";
import CustomStrikeDrawer from "./CustomStrikeDrawer";
const OpenInterestChangeTab = () => {
  return (
    <Paper style={{ padding: 8, height: "100%" }}>
      <Box display={"flex"} alignItems={"center"}></Box>
      <hr />
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box borderRight={"solid lightgrey 1px"} width={"50%"}>
          <Typography fontSize={"medium"} color={"gray"}>
            Expired Included
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="28 Sep" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="26 Oct" />
          </FormGroup>
        </Box>
        <Box>
          <Typography fontSize={"medium"} color={"gray"}>
            Show Stock Price
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Reliance" />
          </FormGroup>
        </Box>
      </Box>
      <hr />
      <Box margin={1} display={"flex"} justifyContent={"space-between"}>
        <Typography fontSize={"medium"}>Strikes above/below ATM</Typography>
        <Select defaultValue={1}>
          <MenuItem value={1}>All</MenuItem>
          <MenuItem value={2}>5</MenuItem>
          <MenuItem value={3}>15</MenuItem>
          <MenuItem value={4}>20</MenuItem>
        </Select>
      </Box>
      <hr />
      <Box>
        <Typography fontSize={"medium"}>
          Strike Range <b>1360 - 3660</b>{" "}
        </Typography>
        <CustomStrikeDrawer />
      </Box>
    </Paper>
  );
};

export default OpenInterestChangeTab;
