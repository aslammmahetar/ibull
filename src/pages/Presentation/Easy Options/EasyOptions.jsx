import { Box, Button, Card, Paper, Stack, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import routes from "routes";
import bgImage from "assets/images/Banner.jpeg";
import CardHeaderButton from "./Sections/CardHeaderButton";
import Stocks from "../StretergyWizard/Sections/Stocks";
import MKButton from "components/MKButton";
import CardBody from "./Sections/CardBody";

const EasyOptions = () => {
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
          p: 2,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
          display: "flex",
        }}
      >
        <CardHeaderButton />
        <Box
          sx={{
            width: { xs: "95%", sm: "95%", md: "75%", lg: "75%" },
            margin: "auto",
            marginTop: 2,
          }}
        >
          <CardBody
            tagLine={"Where will NIFTY be this Thursday?"}
            NorBN={"NIFTY"}
            buttonContent={"NIFTY FUT 19745.45"}
            NorBNtagLine={
              "The average of 50 large Indian companies. Nifty represents the market. It is similar to Sensex."
            }
          />
          <CardBody
            tagLine={"Where will BANKNIFTY be this Thursday?"}
            NorBN={"BANKNIFTY"}
            buttonContent={"BANKNIFTY FUT 19745.45"}
            NorBNtagLine={
              "The average of the important Bank stocks. When banks go up or down, Bank Nifty goes up or down."
            }
          />
          <Paper
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 5,
              marginTop: 18,
              borderRadius: "10px",
            }}
          >
            <Box width={"50%"} textAlign={"center"} p={3}>
              <Typography fontSize={"small"}>Get Simple trades</Typography>
              <Typography fontSize={"medium"}>For Stocks</Typography>
            </Box>
            <Box width={"50%"} textAlign={"center"} p={3}>
              <MKButton color="info">Try it Now</MKButton>
            </Box>
          </Paper>
        </Box>
      </Card>
    </>
  );
};

export default EasyOptions;
