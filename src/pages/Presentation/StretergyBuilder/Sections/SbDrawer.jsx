import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import MKButton from "components/MKButton";
import React, { useEffect, useState } from "react";

import MKBox from "components/MKBox";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SBDrawerTable from "./SBDrawerTable";
import { useDispatch, useSelector } from "react-redux";
import { getNIFTYExpiryDate } from "Redux/RealActions";
import { makingReqforNSE } from "Redux/RealActions";

const SbDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState(1);
  const stretergyCreated = useSelector((store) => store.sbReducer.stretergyCreated);

  const handleSearchIconClick = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNIFTYExpiryDate(symbol));
    dispatch(makingReqforNSE(0, symbol));
  }, [symbol]);

  const handleStream = (val) => {
    setSymbol(val);
  };

  return (
    <>
      <MKButton
        color="info"
        style={{ display: stretergyCreated ? "none" : "block", margin: "auto", marginTop: 5 }}
        onClick={onOpen}
      >
        Build A Custom New Stratergy
      </MKButton>
      <div style={{ zIndex: 999 }}>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            style={{
              backgroundColor: "white",
              zIndex: 999,
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
                  <IconButton>
                    <Search />
                  </IconButton>
                  <FormControl fullWidth>
                    <Select
                      style={{ height: "37px" }}
                      defaultValue={1}
                      onChange={(e) => handleStream(e.target.value)}
                    >
                      <MenuItem style={{ height: "100%" }} value={1}>
                        NIFTY
                      </MenuItem>
                      <MenuItem value={2}>BANKNIFTY</MenuItem>
                      <MenuItem value={3}>FIN NIFTY</MenuItem>
                    </Select>
                  </FormControl>
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
