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
import InfoIcon from "@mui/icons-material/Info";

const MaxPain = () => {
  return (
    <Paper style={{ padding: 8, height: "100%" }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">Max Pain</Typography>
        <InfoIcon />
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
            <FormControlLabel control={<Radio defaultChecked />} label="28 Sept" />
            <FormControlLabel control={<Radio />} label="26 Oct" />
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
    </Paper>
  );
};

export default MaxPain;
