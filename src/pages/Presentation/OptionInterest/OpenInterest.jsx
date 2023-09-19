import { Card, CssBaseline } from "@mui/material";
import ChartAndFilter from "./section/ChartAndFilter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKBox from "components/MKBox";
import bgImage from "assets/images/Banner.jpeg";
import StickyNavbar from "./section/StickyNavbar";
import Footer from "pages/LandingPages/Author/sections/Footer";

const OpenInterest = () => {
  return (
    <>
      <CssBaseline />
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
        zIndex={999}
        width="100%"
      />
      <MKBox
        minHeight="27vh"
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
      ></MKBox>
      <Card
        sx={{
          mx: { xs: 2, lg: 3 },
          mb: 4,
          mt: -13,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
          // top: isSticky ? "80px" : "auto",
          zIndex: 2,
        }}
      >
        {/* <StickyNavbar /> */}
        <ChartAndFilter />
      </Card>
      <Footer />
    </>
  );
};

export default OpenInterest;
