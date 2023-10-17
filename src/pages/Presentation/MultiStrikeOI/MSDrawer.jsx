import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Card,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MSDrawerTable from "./MSDrawerTable";
import { useDispatch, useSelector } from "react-redux";
import { makingGroup } from "Redux/Multi_Strike_OI/MSAction";
import { setMSSymbol } from "Redux/Multi_Strike_OI/MSAction";

export default function MSDrawer() {
  const dispatch = useDispatch();

  const expiryDates = useSelector(
    (store) => store.OptionChainReducer.expiryDates
  );
  const selected_CE_StrikePrices = useSelector(
    (store) => store.MSreducer.selected_CE_StrikePrices
  );

  const selected_PE_StrikePrices = useSelector(
    (store) => store.MSreducer.selected_PE_StrikePrices
  );
  const [selectedExpiryDate, setSelectedExpiryDate] = React.useState("");
  const handleExpiryDateChange = (event) => {
    setSelectedExpiryDate(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleSearchIconClick = () => {
    setOpen(!open);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleStream = (value) => {
    dispatch(setMSSymbol(value));
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleMOILines = () => {
    const newGroup = {
      id: Math.random(),
      CE: [...selected_CE_StrikePrices],
      PE: [...selected_PE_StrikePrices],
    };
    dispatch(makingGroup(newGroup));
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 414,
        p: 1,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          width={"73%"}
          border={"solid grey 1px"}
          borderRadius={2}
          display={"flex"}
          alignItems={"center"}
          onClick={(e) => e.stopPropagation()}
        >
          <Typography pl={2}>Create New Group</Typography>
        </Box>
        <Box width={"25%"}>
          <Button style={{ border: "solid grey 1px" }} onClick={handleMOILines}>
            Done
          </Button>
        </Box>
      </Box>
      <Box
        bgcolor={"#FDFFFC"}
        borderRadius={"5px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={1}
        onClick={(e) => e.stopPropagation()}
      >
        <MKBox
          display={"flex"}
          style={{ padding: "5px" }}
          justifyContent="space-around"
          border="solid black 1px"
          width="73%"
          borderRadius={8}
        >
          <IconButton onClick={handleSearchIconClick}>
            <Search />
          </IconButton>
          <div
            style={{
              top: "50px",
              right: "10px",
              marginRight: "5px",
            }}
          >
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
            </FormControl>{" "}
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
        <Box width={"25%"} display={"flex"} justifyContent={"center"}>
          <FormControl fullWidth>
            <Select
              style={{
                padding: "5px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              value={selectedExpiryDate}
              onChange={handleExpiryDateChange}
              label="Expiry Date"
            >
              {expiryDates.map((item, ind) => (
                <MenuItem key={ind} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <hr style={{ marginTop: 10 }} />
      <Box mt={2} onClick={(e) => e.stopPropagation()} height={"30vh"}>
        <MSDrawerTable
          selectedExpiryDate={selectedExpiryDate}
          setSelectedExpiryDate={setSelectedExpiryDate}
          expiryDates={expiryDates}
        />
      </Box>
    </Box>
  );

  return (
    <Card style={{ padding: 10, width: "48%" }}>
      {["right"].map((anchor) => (
        <Box
          key={anchor}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={"medium"}>
            <b>Visualization and Group Management</b>
          </Typography>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{ border: "solid black 1px" }}
          >
            Create Group
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Box>
      ))}
    </Card>
  );
}
