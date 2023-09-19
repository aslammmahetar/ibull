import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import React, { useState } from "react";

const ChartFooter = () => {
  const [selectedOption, setSelectedOption] = useState("option1"); // Set the default value here

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <MKBox
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      style={{ marginTop: "5px" }}
    >
      <FormControl style={{ width: "30%" }}>
        <Select
          labelId="select-label"
          style={{ textAlign: "center", padding: "5px" }}
          value={selectedOption}
          onChange={handleChange}
        >
          <MenuItem value="option1">Intraday OI</MenuItem>
          <MenuItem value="option2">Interday OI</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        style={{ width: "30%" }}
        control={<Checkbox />}
        label="Auto Update IO Change"
      />
      <Box
        display={"flex"}
        style={{ width: "35%" }}
        justifyContent={"space-around"}
        textAlign={"left"}
      >
        <Box>
          <Typography sx={{ fontSize: "small" }}>Call Change</Typography>
          <Typography variant="h6">2.36</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "small" }}>Put Change</Typography>
          <Typography variant="h6">2.36</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "small" }}>17th Aug Prices</Typography>
          <Typography variant="h6">2538</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "small" }}>18th Aug Prices</Typography>
          <Typography variant="h6">2552</Typography>
        </Box>
      </Box>
    </MKBox>
  );
};

export default ChartFooter;
