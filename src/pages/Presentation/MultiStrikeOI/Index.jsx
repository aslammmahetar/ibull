import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useEffect } from "react";
import bgImage from "assets/images/Banner.jpeg";
import routes from "routes";
import { Card } from "@mui/material";
import MSChartAndFilters from "./MSChartAndFilters";
import Footer from "pages/LandingPages/Author/sections/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getMSoiData } from "Redux/Multi_Strike_OI/MSAction";
import { getExpiry } from "Redux/OptionChainPage/ocAction";
import { defaultStrikesToShow } from "Redux/Multi_Strike_OI/MSAction";
import ScrollToTopButton from "../OptionInterest/section/ScrollToTopButton";

const MSoi = () => {
  const dispatch = useDispatch();
  const symbol = useSelector((store) => store.MSreducer.symbol);
  const currentMonthClosestElement = useSelector(
    (store) => store.MSreducer.currentMonthClosestElement
  );
  useEffect(() => {
    dispatch(getMSoiData(symbol));
    dispatch(getExpiry(symbol));

    dispatch(
      defaultStrikesToShow(
        [
          currentMonthClosestElement &&
            currentMonthClosestElement.cE_strikePrice,
          currentMonthClosestElement &&
            currentMonthClosestElement.pE_strikePrice,
        ],
        1,
        [
          {
            name: `${
              currentMonthClosestElement &&
              currentMonthClosestElement.cE_expiryDate.slice(0, 6)
            } ${
              currentMonthClosestElement &&
              currentMonthClosestElement.cE_strikePrice
            } CE`,
            visible: true,
          },
          {
            name: `${
              currentMonthClosestElement &&
              currentMonthClosestElement.pE_expiryDate.slice(0, 6)
            } ${
              currentMonthClosestElement &&
              currentMonthClosestElement.pE_strikePrice
            } PE`,
            visible: true,
          },
        ]
      )
    );
  }, [symbol]);

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
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )})`,
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
        <MSChartAndFilters />
      </Card>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MSoi;
