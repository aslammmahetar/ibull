import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import MKBox from "components/MKBox";
import React, { useState } from "react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MKButton from "components/MKButton";

export const Filters = () => {
  const [open, setOpen] = useState(false);
  const strikesAboveAndBelowVal = [5, 10, 15, 20, 25, "All"];

  const handleSearchIconClick = () => {
    setOpen(!open);
  };
  return (
    <MKBox style={{ width: "30%", marginTop: "50px" }}>
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
      <Card sx={{ mt: "10px" }}>
        <Box display={"flex"} padding={2}>
          <Box width={"50%"}>
            <Typography fontSize={"small"} marginLeft={"3px"}>
              NIFTY
            </Typography>
            <Box display={"flex"}>
              <Button
                size="small"
                variant="outlined"
                style={{
                  color: "#1954B3",
                  width: "20px",
                  fontSize: "9px",
                  borderColor: "#1954B3",
                }}
              >
                Weekly
              </Button>
              <Button
                size="small"
                variant="outlined"
                style={{
                  color: "#1954B3",
                  width: "20px",
                  fontSize: "9px",
                  borderColor: "#1954B3",
                  marginLeft: "2px",
                }}
              >
                Monthly
              </Button>
            </Box>
          </Box>
          <hr style={{ marginLeft: "1px" }} />
          <Box width={"50%"} marginLeft={"13px"}>
            <Typography fontSize={"small"}>BANKNIFTY</Typography>
            <Box display={"flex"}>
              <MKButton
                size="small"
                variant="outlined"
                style={{
                  color: "#1954B3",
                  width: "20px",
                  fontSize: "9px",
                  borderColor: "#1954B3",
                }}
              >
                Weekly
              </MKButton>
              <MKButton
                size="small"
                variant="outlined"
                style={{
                  color: "#1954B3",
                  width: "20px",
                  fontSize: "9px",
                  borderColor: "#1954B3",
                  marginLeft: "2px",
                }}
              >
                Monthly
              </MKButton>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card
        style={{
          padding: "20px",
          marginTop: "25px",
        }}
      >
        <Typography fontSize={"small"}>Expiries</Typography>
        <FormGroup>
          <Box style={{ display: "flex" }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Current" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Next" />
          </Box>
        </FormGroup>
      </Card>
      <Card
        style={{
          padding: "10px",
          marginTop: "25px",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography mt={"5px"} fontSize={"small"}>
            Strike Price
          </Typography>
          <Button startIcon={<RestartAltIcon />}>Reset</Button>
        </Box>
        <Box display={"flex"}>
          <Box>
            <Typography fontSize={"small"} style={{ marginLeft: "3px" }}>
              Min
            </Typography>
            <TextField size="small" style={{ marginRight: "5px" }} />
          </Box>
          <Box>
            <Typography fontSize={"small"} style={{ marginLeft: "3px" }}>
              Max
            </Typography>
            <TextField size="small" />
          </Box>
        </Box>
        <Typography fontSize={"small"} mt={"14px"}>
          Strikes Above and Below ATM(...)
        </Typography>
        <Box ml={"5px"}>
          {strikesAboveAndBelowVal.map((el) => (
            <Button
              size="small"
              variant="outlined"
              style={{
                color: "#1954B3",
                width: "20px",
                fontSize: "9px",
                borderColor: "#1954B3",
                marginLeft: "2px",
              }}
            >
              {el}
            </Button>
          ))}
        </Box>
      </Card>
    </MKBox>
  );
};
