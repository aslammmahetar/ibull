import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useEffect } from "react";
import bgImage from "assets/images/Banner.jpeg";
import routes from "routes";
import { Card } from "@mui/material";
import MSChartAndFilters from "./MSChartAndFilters";
import Footer from "pages/LandingPages/Author/sections/Footer";
import { useDispatch, useSelector } from "react-redux";
import { makingReqforNSE } from "Redux/RealActions";

const MSoi = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.realReducer.strikePrices);
  const groups = useSelector((store) => store.MSreducer.groups);
  console.log(groups);
  useEffect(() => {
    dispatch(makingReqforNSE(10));
  }, []);

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
          p: 2,
          mx: { xs: 2, lg: 3 },
          mb: 4,
          mt: -10,
          backgroundColor: "#E2E8EB",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          position: "sticky",
          zIndex: 2,
        }}
      >
        <MSChartAndFilters data={data} />
      </Card>
      <Footer />
    </>
  );
};

export default MSoi;
