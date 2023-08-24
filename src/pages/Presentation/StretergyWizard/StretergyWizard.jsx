import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState } from "react";
import routes from "routes";
import bgImage from "assets/images/Banner.jpeg";
import { Box, Card, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Stocks from "./Sections/Stocks";
import VideoButtom from "./Sections/VideoButtom";
import GetStrategyFormWrapper from "./Sections/GetStrategyFormWrapper";
import Instruction from "./Sections/Instruction";
const StretergyWizard = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      height: "80vh",
      flexDirection: "column",
      // overflow: "hidden",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    left: {
      // backgroundColor: "#f0f0f0"
      position: "sticky",
      top: 0,
      overflowY: "auto",
      padding: 4,
      display: "flex",
      flexDirection: "column" /* Align items vertically */,
      justifyContent: "space-between",
      transition: "top 0.3s ease-in-out",
      borderRight: "1px solid grey",
      [theme.breakpoints.down("sm")]: {
        flex: "0 0 100%",
        height: "50vh", // Adjust the height for smaller screens
      },
      [theme.breakpoints.up("md")]: {
        flex: "0 0 22%",
        height: "80vh",
      },
    },
    right: {
      flex: 1,
      overflowY: "auto",
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        sticky
        transparent={false}
        dark
        zIndex={1}
        width="100%"
      />
      <MKBox
        minHeight="20vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          backgroundImage: `url(${bgImage})`,
        }}
      ></MKBox>{" "}
      <Card
        sx={{
          mx: { xs: 2, lg: 3 },
          mb: 4,
          mt: -5,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
          // top: isSticky ? "80px" : "auto",
          display: "flex",
        }}
      >
        <div className={classes.container}>
          <Paper className={classes.left}>
            <Stocks />
            <Instruction />
          </Paper>
          <Paper className={classes.right}>
            <VideoButtom />
            <GetStrategyFormWrapper />
            <Typography fontSize={"medium"}>
              Tell us where a stock is going and we will give you smart option strategies to trade.
            </Typography>
          </Paper>
        </div>
      </Card>
    </>
  );
};

export default StretergyWizard;
// TwoColumnLayout.js
