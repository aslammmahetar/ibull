import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MSDrawer from "./MSDrawer";

const MSfilters = () => {
  const [open, setOpen] = useState(false);

  const handleSearchIconClick = () => {
    setOpen(!open);
  };

  return (
    <MKBox width={{ sm: "100%", md: "100%", lg: "30%" }} display={{ lg: "block" }}>
      <Card>
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
      </Card>
      <Card
        sx={{
          mt: 2,
          padding: 3,
        }}
      >
        <MKBox display="flex" justifyContent="space-between">
          <Typography fontSize={"small"} color={"orange"}>
            <StarHalfIcon /> Most Active Strikes
          </Typography>
          <button style={{ padding: 3, border: "lightgrey 1px solid", borderRadius: 3 }}>
            Selected
          </button>
        </MKBox>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Select All" />
          <FormControlLabel control={<Checkbox />} label="31 Aug 2600CE" />
          <FormControlLabel control={<Checkbox />} label="31 Aug 2540CE" />
          <FormControlLabel control={<Checkbox />} label="31 Aug 2560CE" />
          <FormControlLabel control={<Checkbox />} label="31 Aug 2500PE" />
          <FormControlLabel control={<Checkbox />} label="31 Aug 2520PE" />
          <FormControlLabel control={<Checkbox />} label="31 Aug 2540PE" />
        </FormGroup>
      </Card>
      <MSDrawer />
    </MKBox>
  );
};

export default MSfilters;
