import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

const PutCallRatio = () => {
  return (
    <Paper style={{ padding: 8, height: "100%" }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">Put-call Ratio</Typography>
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
          Strike Range <b>1360 - 3660</b>{" "}
        </Typography>
        <Button fullWidth>Choose CDustom Strikes</Button>
      </Box>
    </Paper>
  );
};

export default PutCallRatio;
