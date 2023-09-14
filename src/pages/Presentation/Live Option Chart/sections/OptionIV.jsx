import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import KnowMoreDrawer from "./KnowMoreDrawer";
import CustomStrikeDrawer from "./CustomStrikeDrawer";

const OptionIVContent = () => {
  return (
    <>
      <Typography variant="h4">Option IV Chart</Typography>
      <ul style={{ fontSize: "medium" }}>
        <li>This chart shows the implied volatility (IV) for selected option strikes</li>
        <li>
          A high IV indicates that the option premium is high, and a low IV indicates that the
          option premium is low
        </li>
        <li>
          In Automatic and Manual modes, the chart shows the IV for the at-the-money (ATM) strike at
          any given point in time.
        </li>
        <li>You can add your own custom strikes to this chart and see their IVs</li>
      </ul>
    </>
  );
};

const OptionIV = () => {
  return (
    <Paper style={{ padding: 8, height: "100%" }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">Option IV</Typography>
        <KnowMoreDrawer content={OptionIVContent} />
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
          <Typography fontSize={"small"}>27 Apr</Typography>
        </Box>
      </Box>
      <hr />
      <Box>
        <Typography fontSize={"small"}>Selection</Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="ATM Strike" control={<Radio />} label="ATM Strike" />
            <FormControlLabel value="Custom" control={<Radio />} label="Custom" />
          </RadioGroup>
        </FormControl>
      </Box>
      <hr />
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={"small"}>Show Strike Price</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="RELIANCE" />
        </FormGroup>
      </Box>
      <hr />
      <Box>
        <Typography fontSize={"medium"}>ATM Strike At 2380</Typography>
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

export default OptionIV;
