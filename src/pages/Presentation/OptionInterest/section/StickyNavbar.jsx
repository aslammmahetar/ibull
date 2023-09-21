import React, { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@mui/material";
import FullWidthTabs from "./Tabs";

const StickyNavbar = () => {
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
      <Toolbar>
        <FullWidthTabs />
      </Toolbar>
    </AppBar>
  );
};

export default StickyNavbar;
