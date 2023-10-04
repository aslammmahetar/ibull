import React from "react";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 999,
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const ScrollToTopButton = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab color="info" size="medium" aria-label="scroll-to-top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollToTopButton;
