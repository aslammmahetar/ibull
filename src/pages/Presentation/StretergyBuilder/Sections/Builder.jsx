import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, IconButton, InputBase, Paper, TextField, Typography } from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import SearchIcon from "@mui/icons-material/Search";
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
const useStyles = makeStyles((theme) => ({
  builderContiner: {
    maxHeight: "calc(80vh - 100px)", // Adjust this as needed
    overflowY: "scroll",
    width: "100%",
    position: "sticky",
    borderRadius: "5px",
    marginTop: "5px",
  },
}));

const Builder = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.builderContiner}>
      <Box bgcolor={"#FDFFFC"} textAlign={"center"} fontSize={"100px"}>
        <MKBox>
          <AnnouncementIcon />
        </MKBox>
        <Typography marginTop={-5}>No Trade's Added</Typography>
        <MKButton color="info" style={{ marginTop: -20 }}>
          Build A Custom New Stratergy
        </MKButton>
      </Box>
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
    </Box>
  );
};

export default Builder;
