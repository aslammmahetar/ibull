import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import KnowMoreDrawer from "./KnowMoreDrawer";

const PutCallRatioContent = () => {
  return (
    <>
      <Typography variant="h4">Put-Call Ratio Chart</Typography>
      <ul style={{ fontSize: "medium" }}>
        <li>PCR is the number of puts divided by the number of calls.</li>
        <li>
          A high amount of puts indicates that the option sellers are not afraid to sell puts, which
          means the market may not go down.
        </li>
        <li>
          A high amount of calls indicates that the option sellers are not afraid to sell calls,
          which means the market may not go up.
        </li>
        <li>
          When puts are more than calls, PCR is more than 1, and when calls are more than puts, PCR
          is less than 1. PCR above 1 is considered bullish, and a PCR below 0.7 is considered
          bearish.
        </li>
        <li>
          A very low PCR around 0.4 may indicate oversold conditions, and the stock or index can go
          up. A very high PCR around 1.5 may indicate overbought conditions, and the stock or index
          may go down.
        </li>
        <li>
          PCR works best in NIFTY weekly Options and may not work for single stocks without
          significant OI.
        </li>
        <li>
          In Automatic mode, PCR is computed and shown for all the strikes available in the expiry
          used.
        </li>
        <li>
          In Manual Mode, you can choose to see the PCR of a continuous strike range above and below
          at-the-money (ATM) strike.
        </li>
        <li>
          You can select a custom strike range in this chart. In this case, PCR is computed using
          only the calls and puts within that strike range.
        </li>
      </ul>
    </>
  );
};

const PutCallRatio = () => {
  return (
    <Paper style={{ padding: 8, height: "100%" }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">Put-call Ratio</Typography>
        <KnowMoreDrawer content={PutCallRatioContent} />
      </Box>
      <hr />
      <Typography fontSize={"small"}>Current Value : 0.54</Typography>
      <hr />
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box borderRight={"solid lightgrey 1px"} width={"50%"}>
          <Typography fontSize={"medium"} color={"gray"}>
            Expiry Selection
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="auto" control={<Radio />} label="Automatic" />
              <FormControlLabel value="manaul" control={<Radio />} label="Manual" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <Typography fontSize={"medium"} color={"gray"}>
            Expiry Used
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="28 Sept" />
            <FormControlLabel control={<Checkbox />} label="26 Oct" />
          </FormGroup>
        </Box>
      </Box>
      <hr />
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
        <Typography fontSize={"small"}>Show Strike Price</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="RELIANCE" />
        </FormGroup>
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
          Strike Range <b>1360 - 3660</b>
        </Typography>
        <Button fullWidth>Choose CDustom Strikes</Button>
      </Box>
    </Paper>
  );
};

export default PutCallRatio;
