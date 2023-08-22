import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MKBox from "components/MKBox";
import { useMediaQuery } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ChartAndFilter from "./ChartAndFilter";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState("1");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <MKBox
        width="100%"
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
          borderRadius: "10px",
          zIndex: "2",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            width: 500,
            position: "static",
          }}
        >
          {/* <Box> */}
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label="Option Stratergies" value="1" />
                <Tab label="Multi Stike OI" value="2" />
              </TabList>
            </Box>
          </TabContext>
        </Box>

        <Box
          alignItems={"center"}
          sx={{ display: { xs: "none", md: "none", sm: "none", lg: "flex" } }}
        >
          <Typography fontSize={"small"} style={{ display: "flex", alignItems: "center" }}>
            PCR 0.84
            <Tooltip title="NOTE: This PCR is computed based on open interest of options in Aug 10 expiry. This does not change with date pickers, time sliders and strike range selector controls below.">
              <InfoIcon />
            </Tooltip>
          </Typography>
        </Box>
        <Button startIcon={<PlayCircleFilledIcon />}>
          {isSmallScreen ? "Demo" : "Watch Demo Video "}
        </Button>
      </MKBox>
    </>
  );
}
