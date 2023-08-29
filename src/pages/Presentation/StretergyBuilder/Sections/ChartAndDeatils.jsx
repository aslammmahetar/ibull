import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Box, Button, Card, FormControl, Menu, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ChartAndDeatils = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      style={{
        backgroundColor: "#FDFFFC",
        padding: 5,
        borderRadius: 5,
        height: "300px",
        marginTop: 5,
      }}
    >
      <Tabs variant="unstyled">
        <Box display={"flex"} justifyContent={"space-around"}>
          <TabList border={"solid black 1px"} borderRadius={10}>
            <Tab
              _selected={{ color: "white", bg: "blue.500", borderRadius: 15 }}
              style={{ width: "90px", padding: 3 }}
            >
              <Typography fontSize={"small"} style={{ padding: 3 }}>
                Payoff
              </Typography>
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.500", borderRadius: 15 }}
              style={{ width: "90px" }}
            >
              <Typography fontSize={"small"} style={{ padding: 3 }}>
                P&L Table
              </Typography>
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.500", borderRadius: 15 }}
              style={{ width: "90px" }}
            >
              <Typography fontSize={"small"} style={{ padding: 3 }}>
                Greeks
              </Typography>
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.500", borderRadius: 15 }}
              style={{ width: "90px" }}
            >
              <Typography fontSize={"small"} style={{ padding: 2 }}>
                Stretergy Chart
              </Typography>
            </Tab>
          </TabList>
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              SD Fixed
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
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
              <Card>hello</Card>
            </Menu>
          </div>
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Open Interest
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
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
              <Card>hello</Card>
            </Menu>
          </div>
        </Box>
        <TabPanels>
          <TabPanel>
            <Tabs position="relative" variant="unstyled">
              <TabList border={"solid black 1px"}>
                <Tab>Payoff Graph</Tab>
                <Tab>Payoff Table</Tab>
              </TabList>
              <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ChartAndDeatils;
