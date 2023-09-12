import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Card,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MSDrawerTable from "./MSDrawerTable";

export default function TemporaryDrawer() {
  var expiryDates = [
    "13-Sep-2023",
    "20-Sep-2023",
    "28-Sep-2023",
    "04-Oct-2023",
    "11-Oct-2023",
    "26-Oct-2023",
    "30-Nov-2023",
    "28-Dec-2023",
    "28-Mar-2024",
    "27-Jun-2024"
  ];
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 450, p: 1 }}
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
          <Typography pl={2}>Group 1</Typography>
        </Box>
        <Box width={"25%"}>
          <Button style={{ border: "solid grey 1px" }}>Cancel</Button>
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
            <InputBase
              value={"NIFTY FUT 0.25%"}
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
    <Card style={{ marginTop: 10, padding: 10 }}>
      {["Add New"].map((anchor) => (
        <Box key={anchor} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography fontSize={"medium"}>Group 1</Typography>
          <Button onClick={toggleDrawer(anchor, true)} style={{ border: "solid black 1px" }}>
            {anchor}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Box>
      ))}
    </Card>
  );
}
