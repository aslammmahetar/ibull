import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Menu,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ChartExample from "./ChartExmple";
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
        marginTop: 5,
      }}
    >
      <Tabs variant="unstyled">
        <Box display={"flex"} justifyContent={"space-around"}>
          <TabList border={"solid grey 1px"} borderRadius={10}>
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
              Fixed SD
              <Card sx={{ p: 1 }}>
                <Box display={"flex"} alignItems={"center"}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="Fixed SD" control={<Radio />} label="Fixed SD" />
                      <Typography fontSize={"small"} ml={1}>
                        SD will be based on a fixed number of days
                      </Typography>
                      <Box display={"flex"} margin={"auto"}>
                        <Box
                          p={0.5}
                          border={"solid grey 1px"}
                          borderRight={"none"}
                          pl={1}
                          pr={1}
                          sx={{
                            cursor: "pointer",
                            borderTopLeftRadius: 4,
                            borderBottomLeftRadius: 4,
                          }}
                        >
                          <Typography fontSize={"meduim"}>-</Typography>
                        </Box>
                        <Box
                          p={0.5}
                          pl={4}
                          pr={4}
                          border={"solid grey 1px"}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          7 Days
                        </Box>
                        <Box
                          p={0.5}
                          border={"solid grey 1px"}
                          pl={1}
                          pr={1}
                          borderLeft={"none"}
                          sx={{
                            cursor: "pointer",
                            borderTopRightRadius: 4,
                            borderBottomRightRadius: 4,
                          }}
                        >
                          <Typography fontSize={"meduim"}>+</Typography>
                        </Box>
                      </Box>
                      <hr style={{ marginTop: 7 }} />
                      <FormControlLabel value="Dynamic SD" control={<Radio />} label="Dynamic SD" />
                      <Typography fontSize={"small"} ml={1}>
                        SD will be based on the selected target date and time
                      </Typography>
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Card>
            </Menu>
          </div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <Button endIcon={<KeyboardArrowDownIcon />} {...bindTrigger(popupState)}>
                  Open Interest
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <FormGroup>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box>
                        <Typography fontSize={"medium"}>Show Open Interest</Typography>
                      </Box>
                      <Box>
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          style={{ marginLeft: 4 }}
                        />
                      </Box>
                    </Box>
                  </FormGroup>

                  <Box
                    style={{ border: "solid grey 1px" }}
                    sx={{ display: "flex" }}
                    borderRadius={5}
                    justifyContent={"center"}
                  >
                    <FormControl>
                      <RadioGroup>
                        <FormControlLabel
                          value={"Open Interest"}
                          control={<Radio />}
                          label="Open Interest"
                        />
                        <hr />
                        <FormControlLabel
                          value={"Change In OI"}
                          control={<Radio />}
                          label="Change In OI"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box mt={2}>
                    <Typography fontSize={"medium"}>Expiry Used</Typography>
                    <Stack>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="31 Aug" />
                        <hr />
                        <FormControlLabel disabled control={<Checkbox />} label="27 Sept" />
                        <hr />
                      </FormGroup>
                    </Stack>
                  </Box>
                </Menu>
              </>
            )}
          </PopupState>
        </Box>
        <TabPanels>
          <TabPanel>
            <Tabs position="relative" variant="unstyled">
              <TabList
                display={"flex"}
                justifyContent={"space-evenly"}
                fontSize={"medium"}
                mt={2}
                borderBottom={"solid grey 1px"}
              >
                <Tab>Payoff Graph</Tab>
                <Tab>Payoff Table</Tab>
              </TabList>
              <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
              <TabPanels>
                <TabPanel>
                  <Box>
                    <ChartExample />
                  </Box>
                </TabPanel>
                <TabPanel display={"flex"} justifyContent={"center"}>
                  <p>Table Section!! </p>
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
