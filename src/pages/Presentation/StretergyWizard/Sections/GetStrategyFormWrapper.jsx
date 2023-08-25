import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import React, { useState } from "react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MKButton from "components/MKButton";
const GetStrategyFormWrapper = () => {
  const [open, setOpen] = useState(false);

  const handleSearchIconClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        backgroundColor: "whitesmoke",
        p: 2,
        mt: 3,
        border: "solid grey 1px",
        display: "flex",
        flexDirection: { xsm: "column", sm: "column", md: "column", lg: "row" },
        borderWidth: 0.5,
        justifyContent: "space-around",
        alignItems: "flex-start",
        borderRadius: 0.8,
      }}
    >
      <MKBox display={"flex"} marginTop={2}>
        <IconButton onClick={handleSearchIconClick}>
          <Search />
        </IconButton>
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputBase
            placeholder="Type Stock Name :SBIN, RELIANCE etc."
            // value={"NIFTY"}
            style={{
              width: "80%",
              fontSize: "medium",
              borderBottom: "solid black 1px",
              marginRight: 4,
            }}
          />
          <Box>
            <Tooltip title="Open Chart">
              <Button variant="outlined" size="small">
                <TrendingUpOutlinedIcon color="info" />
              </Button>
            </Tooltip>
          </Box>
        </div>
      </MKBox>
      <MKBox marginTop={2}>
        <FormControl>
          <InputLabel id="prediction-label">Prediction</InputLabel>
          <Select
            style={{ width: "100px", height: "40px" }}
            labelId="prediction-label"
            id="prediction-select"
            label="Prediction"
          >
            <MenuItem value={1}>Above</MenuItem>
            <MenuItem value={2}>Between</MenuItem>
            <MenuItem value={3}>Below</MenuItem>
          </Select>
        </FormControl>
      </MKBox>
      <MKBox marginTop={2}>
        <TextField id="underline-input" type="number" label="NIFTY Target" />
      </MKBox>
      <MKBox marginTop={2}>
        <FormControl>
          <InputLabel id="prediction-label">Prediction</InputLabel>
          <Select
            style={{ width: "110px", height: "40px" }}
            labelId="prediction-label"
            id="prediction-select"
            label="Prediction"
            defaultValue={1}
          >
            <MenuItem value={1}>24 Aug Expiry </MenuItem>
            <MenuItem value={2}>31 AUg Expiry</MenuItem>
            <MenuItem value={3}>28 Sept Expiry</MenuItem>
            <MenuItem value={3}>Specific date</MenuItem>
            <MenuItem value={3}>Intraday</MenuItem>
          </Select>
        </FormControl>
      </MKBox>
      <MKBox marginTop={2}>
        <MKButton color="info">Go</MKButton>
      </MKBox>
    </Box>
  );
};

export default GetStrategyFormWrapper;
