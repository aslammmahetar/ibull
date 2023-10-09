import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const DefaultStrike = ({
  selectAll,
  handleCheckboxChange,
  displayLines,
  handleSelectAllChange,
}) => {
  return (
    <div>
      <MKBox display="flex" justifyContent="space-between">
        <Typography fontSize={"small"} color={"orange"}>
          <StarHalfIcon /> Most Active Strikes
        </Typography>
        <Button style={{ padding: 3, border: "lightgrey 1px solid", borderRadius: 3 }}>
          Selected
        </Button>
      </MKBox>
      <Box display={"flex"} justifyContent={"space-around"}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectAll}
              onChange={handleSelectAllChange} // Handle "Select All" checkbox change
              name="select-all"
            />
          }
          label="Select All"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={displayLines["28 SEP 2400 CE"]}
              onChange={handleCheckboxChange}
              name="28 SEP 2400 CE"
            />
          }
          label="28 SEP 2400 CE"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={displayLines["28 SEP 2380 CE"]}
              onChange={handleCheckboxChange}
              name="28 SEP 2380 CE"
            />
          }
          label="28 SEP 2380 CE
        "
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={displayLines["28 SEP 2420 CE"]}
              onChange={handleCheckboxChange}
              name="28 SEP 2420 CE"
            />
          }
          label="28 SEP 2420 CE"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={displayLines["28 SEP 2360 PE"]}
              onChange={handleCheckboxChange}
              name="28 SEP 2360 PE"
            />
          }
          label="28 SEP 2360 PE"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={displayLines["28 SEP 2380 PE"]}
              onChange={handleCheckboxChange}
              name="28 SEP 2380 PE"
            />
          }
          label="28 SEP 2380 PE"
        />
      </Box>
    </div>
  );
};

export default DefaultStrike;
