// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function OurFeatureSection() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={12}>
            <MKTypography variant="h3" textAlign="center" my={1}>
              Read More About Us
            </MKTypography>
            <MKTypography variant="body2" style={{ textAlign: "justify" }} color="text" mb={2}>
              {" "}
              <b>
                IBull is an analytical tool to help and assist you to evaluate and make informed
                decisions about your trades and investments. also helps you to assess and manage
                risk exposure by modelling different scenarios and potential outcomes of your option
                strategies allowing you to construct and analyse complex option strategies, such as
                spreads, straddles, and iron condors. Enables to simulate various market conditions
                and assess the impact on option positions.
              </b>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12} lg={12} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
        <MKTypography variant="h3" textAlign="center" my={1}>
          Our Features
        </MKTypography>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="success"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <Icon class="material-icons-two-tone" fontSize="small">
              devices
            </Icon>
          </MKBox>
          <MKBox display="flex" alignItems="center" p={2}>
            <MKTypography variant="body2" color="text" pl={2}>
              <b>User Friendly Interface</b>
            </MKTypography>
          </MKBox>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="error"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <Icon fontSize="small" class="material-icons-two-tone">
              analytics
            </Icon>
          </MKBox>
          <MKBox display="flex" alignItems="center" p={2}>
            <MKTypography variant="body2" color="text" pl={2}>
              <b>powerful analytics tools</b>
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <Icon class="material-icons-two-tone" fontSize="small">
              autorenew
            </Icon>
          </MKBox>
          <MKTypography variant="body2" color="text" pl={2}>
            <b>Auto Refresh Data</b>
          </MKTypography>
        </MKBox>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <Icon class="material-icons-two-tone" fontSize="small">
              local_fire_department
            </Icon>
          </MKBox>
          <MKTypography variant="body2" color="text" pl={2}>
            <b>Powerful Stretergy Builder</b>
          </MKTypography>
        </MKBox>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <Icon class="material-icons-two-tone" fontSize="small">
              bar_chart
            </Icon>
          </MKBox>
          <MKTypography variant="body2" color="text" pl={2}>
            <b>Option chart to analyse market participation</b>
          </MKTypography>
        </MKBox>
        <MKBox display="flex" alignItems="center" p={2}>
          <MKBox
            width="3rem"
            height="3rem"
            variant="gradient"
            bgColor="info"
            color="white"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
          >
            <Icon class="material-icons-two-tone" fontSize="small">
              candlestick_chart
            </Icon>
          </MKBox>
          <MKTypography variant="body2" color="text" pl={2}>
            <b>Profit and Loss Visualization of strategies</b>
          </MKTypography>
        </MKBox>
      </Grid>
    </MKBox>
  );
}

export default OurFeatureSection;
