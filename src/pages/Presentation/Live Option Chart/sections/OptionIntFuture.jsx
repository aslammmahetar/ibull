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
import InfoIcon from "@mui/icons-material/Info";

const OptionIntFuture = ({ heading }) => {
  return (
    <Paper style={{ padding: 8, height: "100%" }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="h6">{heading} - Futures</Typography>
        <InfoIcon />
      </Box>
      <hr />
      <Typography fontSize={"small"}>Current Value : 0.54</Typography>
      <hr />
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box borderRight={"solid lightgrey 1px"} width={"50%"}>
          <Typography fontSize={"medium"} color={"gray"}>
            Expiry Included
          </Typography>
          <FormControl>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="28 Sept" />
              <FormControlLabel control={<Checkbox />} label="26 Oct" />
            </FormGroup>
          </FormControl>
        </Box>
        <Box>
          <Typography fontSize={"medium"} color={"gray"}>
            Show Stock Price
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="RELIANCE" />
          </FormGroup>
        </Box>
      </Box>
    </Paper>
  );
};

export default OptionIntFuture;
