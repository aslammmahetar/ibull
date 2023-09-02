import React from "react";
import "./table.css"; // Import your CSS file for styling
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";

import SettingDrawer from "./SettingDrawer";

const SettingComp = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} bgcolor={"whitesmoke"}>
      <Box display={"flex"}>
        <Box className="left-div">
          <Button endIcon={<ExpandMoreIcon />}>LTP View</Button>
        </Box>
        <Box className="left-div">
          <Button endIcon={<ExpandMoreIcon />}>GREEK view</Button>
        </Box>
        <Box className="left-div">
          <Button endIcon={<ExpandMoreIcon />}>All Column view</Button>
        </Box>
      </Box>
      <Box>
        <Box className="right-div" bgcolor={"whitesmoke"}>
          <SettingDrawer />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingComp;
