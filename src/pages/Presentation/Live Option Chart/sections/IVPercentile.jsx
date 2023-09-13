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

const IVPercentileContent = () => {
  return (
    <>
      <Typography variant="h4">IV Percentile Chart</Typography>
      <ul style={{ fontSize: "medium" }}>
        <li>
          This chart shows the Implied Volatility Percentile (IVP) for the ATM strike of a selected
          expiry
        </li>
        <li>
          A high IVP (more than 80) indicates a relatively high IV, and a low IVP (less than 20)
          indicates a relatively low IV.
        </li>
        <li>
          For single stocks, IVP works well for the current expiry. IVP is not reliable for next
          month options.
        </li>
      </ul>
    </>
  );
};

const IVPercentile = () => {
  return (
    <Paper style={{ padding: 8, height: "100%" }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">IV Percentile</Typography>
        <KnowMoreDrawer content={IVPercentileContent} />
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
        <Typography fontSize={"medium"}>ATM Strike At 2380</Typography>
      </Box>
      <hr />
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography fontSize={"small"}>Show Strike Price</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="RELIANCE" />
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default IVPercentile;
