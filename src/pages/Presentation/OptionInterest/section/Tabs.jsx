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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MKBox
      width="96%"
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "5px",
        borderRadius: "3px",
        position: "fixed",
        zIndex: "2",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 500,
        }}
      >
        {/* <Box> */}
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Open Interest" {...a11yProps(0)} />
            <Tab label="Multi strike IO" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
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
  );
}
