import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Card, IconButton, InputBase, MenuItem, Select, Tooltip } from "@mui/material";
import MKBox from "components/MKBox";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MSDrawerTable from "pages/Presentation/MultiStrikeOI/MSDrawerTable";

export default function CustomStrikeDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleSearchIconClick = () => {
    setOpen(!open);
  };
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
    "27-Jun-2024",
  ];
  const [selectedExpiryDate, setSelectedExpiryDate] = React.useState("");
  const handleExpiryDateChange = (event) => {
    setSelectedExpiryDate(event.target.value);
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 650, p: 2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Card onClick={(e) => e.stopPropagation()}>
        <MKBox display={"flex"} style={{ padding: "5px" }} justifyContent="space-around">
          <IconButton onClick={handleSearchIconClick}>
            <Search />
          </IconButton>
          <div
            style={{
              top: "50px",
              right: "10px",
              marginRightmarginRightght: "5px",
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
      <div onClick={(e) => e.stopPropagation()} style={{ marginRight: "15px", marginTop: 15 }}>
        <Tabs position="relative" variant="unstyled">
          <TabList display={"flex"} fontSize={"medium"} justifyContent={"space-evenly"}>
            <Tab>Straddles</Tab>
            <Tab>Stangles</Tab>
            <Tab>Custom</Tab>
          </TabList>
          <hr />
          <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Select defaultValue={1} style={{ height: 30 }}>
              <MenuItem value={1}>28 Sept</MenuItem>
              <MenuItem value={4}>26 Oct</MenuItem>
            </Select>
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList
                style={{
                  borderRadius: 5,
                  border: "solid black 1px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "medium",
                }}
              >
                <Tab
                  style={{ marginRight: 15 }}
                  _selected={{
                    p: 1,
                    pl: 2,
                    pr: 2,
                    color: "white",
                    width: "30%",
                    backgroundColor: "#2E86AB",
                    borderRadius: 15,
                  }}
                >
                  LTP
                </Tab>
                <Tab
                  style={{ marginRight: 15 }}
                  _selected={{
                    p: 1,
                    pl: 2,
                    pr: 2,
                    width: "30%",
                    color: "white",
                    backgroundColor: "#2E86AB",
                    borderRadius: 15,
                  }}
                >
                  OI
                </Tab>
                <Tab
                  style={{ marginRight: 15 }}
                  _selected={{
                    p: 1,
                    pl: 3,
                    pr: 3,
                    width: "30%",
                    backgroundColor: "#2E86AB",
                    color: "white",
                    borderRadius: 15,
                  }}
                >
                  Greeks
                </Tab>
              </TabList>
            </Tabs>
          </div>
          <hr style={{ marginTop: 10 }} />
          <TabPanels onClick={(e) => e.stopPropagation()}>
            <TabPanel>
              <MSDrawerTable
                selectedExpiryDate={selectedExpiryDate}
                setSelectedExpiryDate={setSelectedExpiryDate}
                expiryDates={expiryDates}
              />
            </TabPanel>
            <TabPanel>
              <MSDrawerTable
                selectedExpiryDate={selectedExpiryDate}
                setSelectedExpiryDate={setSelectedExpiryDate}
                expiryDates={expiryDates}
              />
            </TabPanel>
            <TabPanel>
              <MSDrawerTable
                selectedExpiryDate={selectedExpiryDate}
                setSelectedExpiryDate={setSelectedExpiryDate}
                expiryDates={expiryDates}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} fullWidth>
            Choose CDustom Strikes
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
