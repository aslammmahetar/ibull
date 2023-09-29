import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingDrawer from "./SettingDrawer"; // Import your SettingDrawer component here

const SettingComp = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={{ xs: "column", md: "row" }} // Adjust the layout for different screen sizes
      bgcolor={"whitesmoke"}
      padding={{ xs: 2, md: 4 }} // Adjust padding for different screen sizes
    >
      <Box display={"flex"} marginBottom={{ xs: 2, md: 0 }}>
        <Box className="left-div" marginRight={{ xs: 2, md: 3 }}>
          <Button endIcon={<ExpandMoreIcon />}>LTP View</Button>
        </Box>
        <Box className="left-div" marginRight={{ xs: 2, md: 3 }}>
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
