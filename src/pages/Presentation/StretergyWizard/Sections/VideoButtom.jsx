import { Box, Button } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const VideoButtom = () => {
  return (
    <Box textAlign={"right"}>
      <Button startIcon={<PlayCircleIcon />} style={{ backgroundColor: "whitesmoke" }}>
        Watch Video
      </Button>
    </Box>
  );
};

export default VideoButtom;
