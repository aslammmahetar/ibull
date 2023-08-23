import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Box, Button, IconButton, InputBase, Menu, MenuItem, Tooltip } from "@mui/material";
import MKButton from "components/MKButton";
import React, { useState } from "react";
import SearchANdSetting from "./SearchANdSetting";

import SettingsIcon from "@mui/icons-material/Settings";

import MKBox from "components/MKBox";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SBDrawerTable from "./SBDrawerTable";

const SbDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  return (
    <>
      <MKButton color="info" style={{ marginTop: -20 }} onClick={onOpen}>
        Build A Custom New Stratergy
      </MKButton>
      <div style={{ zIndex: 999 }}>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            style={{
              backgroundColor: "white",
              zIndex: 2,
              width: "50%",
              height: "500px",
              margin: "auto",
            }}
          >
            <DrawerHeader borderBottomWidth="1px">
              <Box display={"flex"} justifyContent={"space-between"} p={2}>
                <MKBox
                  display={"flex"}
                  style={{ padding: "5px" }}
                  width="50%"
                  justifyContent="space-around"
                >
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
                    <Button
                      variant="outlined"
                      style={{ width: "5px", color: "blue", marginLeft: "4px" }}
                    >
                      info
                    </Button>
                  </Box>
                </MKBox>
                <Box width={"30%"} display={"flex"} justifyContent={"space-around"}>
                  <Button
                    variant="outline"
                    mr={3}
                    size="small"
                    style={{ color: "white", backgroundColor: "grey" }}
                    onClick={onClose}
                  >
                    Clear
                  </Button>
                  <MKButton color="info" onClick={onClose}>
                    Done
                  </MKButton>
                </Box>
              </Box>
            </DrawerHeader>
            <hr />
            <DrawerBody>
              <SBDrawerTable />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default SbDrawer;
{
  /* <div>
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
</div> */
}
