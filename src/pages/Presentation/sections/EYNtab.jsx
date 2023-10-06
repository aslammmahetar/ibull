import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";
import builder from "assets/images/products/Screenshot from 2023-10-06 17-55-55.png";
import pro_tools from "assets/images/products/pro-tools.png";
export default function ENYTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Option Stratergies" value="1" />
            <Tab label="Virtual Portfolios" value="2" />
            <Tab label="Pro Tools" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Typography variant="h4" textAlign={"center"}>
            Empowering Traders of All Levels with Powerful tool and easy to use interface
          </Typography>
          <Box mt={5}>
            <img src={builder} width={"100%"} alt="buider" />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h4" textAlign={"center"}>
            Learn and practice trading without risking real money
          </Typography>
          <Box mt={5}>
            <img src={builder} width={"100%"} alt="buider" />
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <Typography variant="h4" textAlign={"center"}>
            Find profitable trades using advanced analytical tools & data
          </Typography>
          <Box textAlign={"center"} mt={5}>
            <img src={pro_tools} width={"60%"} alt="buider" />
          </Box>
        </TabPanel>
      </TabContext>
      {/* <Slider /> */}
    </Box>
  );
}
