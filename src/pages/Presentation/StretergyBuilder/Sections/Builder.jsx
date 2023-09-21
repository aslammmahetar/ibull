import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import SearchIcon from "@mui/icons-material/Search";
import WarningIcon from "@mui/icons-material/Warning";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CachedIcon from "@mui/icons-material/Cached";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SbDrawer from "./SbDrawer";
import { useSelector } from "react-redux";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import InstOthCounter from "./InstOthCounter";
const useStyles = makeStyles((theme) => ({
  builderContiner: {
    maxHeight: "calc(80vh - 100px)", // Adjust this as needed
    overflowY: "scroll",
    width: "100%",
    position: "sticky",
    borderRadius: "5px",
    marginTop: "5px",
    zIndex: 0,
    backgroundColor: "#FDFFFC",
    textAlign: "center",
  },
}));

const Builder = () => {
  const classes = useStyles();
  const stretergyCreated = useSelector((store) => store.sbReducer.stretergyCreated);

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box className={classes.builderContiner}>
      <SbDrawer />
      {!stretergyCreated ? (
        <Box fontSize={"100px"}>
          <MKBox>
            <AnnouncementIcon />
          </MKBox>
          <Typography marginTop={-5}>No Trade's Added</Typography>
        </Box>
      ) : (
        <Box bgcolor={"#FDFFFC"} fontSize={"100px"}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography fontSize={"small"} p={1}>
              New stretergy <WarningIcon />
            </Typography>
            <Button size="small">Clear New Trades</Button>
          </Box>
          <Box p={1} display={"flex"} justifyContent={"space-between"}>
            <FormControlLabel
              style={{ display: "flex" }}
              control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
              label="1 Tarde Selected"
            />
            <Button startIcon={<CachedIcon />}>Reset Prices</Button>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Typography fontSize={"small"} color={"grey"}>
              B/S
            </Typography>
            <Typography fontSize={"small"} color={"grey"}>
              Expiry
            </Typography>
            <Typography fontSize={"small"} color={"grey"}>
              Strike
            </Typography>
            <Typography fontSize={"small"} color={"grey"}>
              Type
            </Typography>
            <Typography fontSize={"small"} color={"grey"}>
              QTY
            </Typography>
            <Typography fontSize={"small"} color={"grey"}>
              Price
            </Typography>
          </Box>
          <Box p={1} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
              <FormControlLabel
                style={{ display: "flex" }}
                control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
              />
              <Typography
                fontSize={"small"}
                color={"red"}
                style={{
                  backgroundColor: "#F0A8A8",
                  padding: 2,
                  paddingLeft: 6,
                  paddingRight: 6,
                  marginLeft: -11,
                  borderRadius: 5,
                }}
              >
                B
              </Typography>
            </Box>
            <FormControl>
              <Select
                style={{ width: "80px", height: "40px", marginLeft: "-25px" }}
                defaultValue={1}
              >
                <MenuItem value={1}>31 AUg</MenuItem>
                <MenuItem value={2}>28 Sept</MenuItem>
              </Select>
            </FormControl>
            <InstOthCounter />
            <Box
              height="40px"
              padding={1}
              marginLeft={"-5px"}
              fontSize={"15px"}
              border={"solid grey 1px"}
              borderRadius={3}
              display={"flex"}
              alignItems={"center"}
            >
              CE
            </Box>
            <Select style={{ height: "40px" }} defaultValue={1}>
              <MenuItem value={1}>50</MenuItem>
              <MenuItem value={2}>100</MenuItem>
              <MenuItem value={3}>150</MenuItem>
              <MenuItem value={4}>200</MenuItem>
              <MenuItem value={5}>250</MenuItem>
              <MenuItem value={6}>300</MenuItem>
              <MenuItem value={7}>350</MenuItem>
              <MenuItem value={8}>400</MenuItem>
              <MenuItem value={9}>450</MenuItem>
              <MenuItem value={10}>500</MenuItem>
              <MenuItem value={11}>650</MenuItem>
              <MenuItem value={12}>700</MenuItem>
              <MenuItem value={13}>750</MenuItem>
            </Select>
            <TextField style={{ width: "40px" }} />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} p={1}>
            <Box display={"flex"} alignItems={"center"}>
              <Typography fontSize={"small"} pr={2}>
                Multiplayer
              </Typography>
              <Select style={{ height: "20px" }} defaultValue={1}>
                <MenuItem value={1}>50</MenuItem>
                <MenuItem value={2}>100</MenuItem>
              </Select>
            </Box>
            <Box display={"flex"}>
              <Box pr={2}>
                <Typography fontSize={"small"}>
                  Price <b>Pay 25.2</b>
                </Typography>
              </Box>
              <Box>
                <Typography fontSize={"small"}>
                  Premium <b>Pay 1,260</b>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box p={1} display={"flex"} justifyContent={"space-around"}>
            <Button style={{ border: "solid lightblue 1px" }}>Add/Edit</Button>
            <Button style={{ border: "solid lightblue 1px" }}>Add to Virtual</Button>
            <Button style={{ border: "solid lightblue 1px" }}>Trade All</Button>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}>
                    <MoreHorizIcon />
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem>Save </MenuItem>
                    <MenuItem>Save As</MenuItem>
                    <MenuItem>Share </MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </Box>
        </Box>
      )}
      <Tabs bgColor={"#FDFFFC"} mt={2} p={5}>
        <TabList display={"flex"} justifyContent={"space-around"} fontSize={"medium"}>
          <Tab>Ready-Made</Tab>
          <Tab>Positions</Tab>
          <Tab>Saved</Tab>
          <Tab>Virtual Portfolio </Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
        <TabPanels mt={5}>
          <TabPanel>
            <Typography fontSize={"small"}>
              Please click on a ready-made strategy to load it
            </Typography>
            <Tabs variant="unstyled">
              <TabList width={"90%"} m={"auto"} display={"flex"} justifyContent={"space-around"}>
                <Tab
                  _selected={{ color: "white", bg: "blue.500", borderRadius: "10px" }}
                  width="20%"
                >
                  <Typography fontSize={"small"}>Bullish</Typography>
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "blue.500", borderRadius: "10px" }}
                  width="20%"
                >
                  <Typography fontSize={"small"}>Bearish</Typography>
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "blue.500", borderRadius: "10px" }}
                  width="20%"
                >
                  <Typography fontSize={"small"}>Neutral</Typography>
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "blue.500", borderRadius: "10px" }}
                  width="20%"
                >
                  <Typography fontSize={"small"}>Others</Typography>
                </Tab>
              </TabList>
              <TabPanels mt={2}>
                <TabPanel>
                  <Grid templateColumns="repeat(4, 1fr)" gap={8}>
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FFEED6" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FBBFCA" borderRadius={"lg"} />
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(4, 1fr)" gap={8}>
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FFEED6" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FBBFCA" borderRadius={"lg"} />
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(4, 1fr)" gap={8}>
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FFEED6" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FBBFCA" borderRadius={"lg"} />
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(4, 1fr)" gap={8}>
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FFEED6" borderRadius={"lg"} />
                    <GridItem h="20" bg="#FBBFCA" borderRadius={"lg"} />
                    <GridItem h="20" bg="tomato" borderRadius={"lg"} />
                    <GridItem h="20" bg="#2B061E" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                    <GridItem h="20" bg="#875053" borderRadius={"lg"} />
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Box>
              <Typography fontSize={"small"} textAlign={"center"}>
                You do not currently have any positions.
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel>
            <Paper>
              <IconButton disabled>
                <SearchIcon />
              </IconButton>
              <InputBase
                style={{ fontSize: "small" }}
                placeholder="Search saved stretergy..."
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
            <Typography fontSize={"small"} mt={1}>
              Please click on a saved strategy to load it
            </Typography>
            <MKBox
              style={{
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              You don't have any saved strategies
            </MKBox>
          </TabPanel>
          <TabPanel>
            <Typography fontSize={"medium"}>Virtual Portfolio</Typography>
            <MKButton color="info" fullWidth style={{ marginTop: "7px" }}>
              Create New Portfolio
            </MKButton>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <MKBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ backgroundColor: "#FDFFFC", padding: 5, marginTop: 5 }}
        // bgcolor={"#FDFFFC"}
        borderRadius={"5px"}
      >
        <Typography fontSize={"medium"}>How to use Stretergy Buider</Typography>
        <MKBox>
          <Button
            startIcon={<PlayCircleIcon />}
            style={{ border: "solid black 1px", color: "black" }}
            size="small"
          >
            English
          </Button>
          <Button
            startIcon={<PlayCircleIcon />}
            style={{ border: "solid black 1px", color: "black", marginLeft: 2 }}
            size="small"
          >
            Hindi
          </Button>
        </MKBox>
      </MKBox>
      <Typography fontSize={"small"} mt={2}>
        Prices last updated at 11:52 AM. (Prices are auto-refreshed every 30 seconds).
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Important Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={"small"}>
            The profit and loss are projections, and they depend on premia, liquidity, IV, etc.
            While we make the best effort to ensure they are right, the actual numbers may vary.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Builder;
