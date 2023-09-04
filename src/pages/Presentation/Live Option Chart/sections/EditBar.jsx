import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import MKBox from "components/MKBox";
import React, { useEffect, useState } from "react";

const EditBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Set the scroll threshold based on your requirements
  const scrollThreshold = 50;

  // Add a scroll event listener to track the scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position={isSticky ? "sticky" : "static"} style={{ top: 69, bottom: 25, zIndex: 999 }}>
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
          <Stack spacing={2}>
            <Box></Box>
          </Stack>
        </Box>
      </MKBox>
    </AppBar>
  );
};

export default EditBar;
