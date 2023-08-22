import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/material/Menu";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  MenuItem,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import InfoIcon from "@mui/icons-material/Info";
const SearchANdSetting = () => {
  const [open, setOpen] = useState(false);

  const handleSearchIconClick = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <MKBox
        width={{ sm: "100%", md: "100%", lg: "45%" }}
        display={{ lg: "block" }}
        style={{ borderRadius: "10px" }}
      >
        <Box bgcolor={"#FDFFFC"} borderRadius={"5px"}>
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
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                startIcon={<SettingsIcon />}
                style={{
                  border: "solid black 1px",
                  borderRadius: 3,
                  color: "black",
                }}
              >
                Setting
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={opened}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </MKBox>
        </Box>
      </MKBox>
      <MKBox
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FDFFFC",
          marginTop: "6px",
        }}
        width={{ sm: "100%", md: "100%", lg: "45%" }}
        borderRadius="5px"
      >
        <Switch
          checked={isChecked}
          onChange={handleSwitchChange}
          color="primary"
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography fontSize={"medium"}>
          Include Manual P&L <InfoIcon />
        </Typography>
      </MKBox>
    </div>
  );
};

export default SearchANdSetting;
