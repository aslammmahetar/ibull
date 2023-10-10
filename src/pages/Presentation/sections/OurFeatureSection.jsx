// @mui material components
import { Box } from "@mui/material";
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
      <Grid item xs={12} lg={12} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: -3 }, mb: 10 }}>
        <MKTypography variant="h3" textAlign="center" my={1}>
          Our Features
        </MKTypography>
        <MKBox display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Box display="flex">
            <MKBox
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
            >
              <MKBox
                width="5rem"
                height="5rem"
                variant="gradient"
                bgColor="success"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                textAlign="center"
                justifyContent="center"
                borderRadius="xl"
              >
                <Icon class="material-icons-two-tone" fontSize="large">
                  devices
                </Icon>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text">
                  <b>User Friendly Interface</b>
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
            >
              <MKBox
                width="5rem"
                height="5rem"
                variant="gradient"
                bgColor="error"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="xl"
              >
                <Icon fontSize="large" class="material-icons-two-tone">
                  analytics
                </Icon>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKTypography variant="body2" color="text">
                  <b>powerful analytics tools</b>
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
            >
              <MKBox
                width="5rem"
                height="5rem"
                variant="gradient"
                bgColor="info"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="xl"
              >
                <Icon fontSize="large" class="material-icons-two-tone">
                  autorenew
                </Icon>
              </MKBox>
              <MKTypography variant="body2" color="text" p={2}>
                <b>Auto Refresh Data</b>
              </MKTypography>
            </MKBox>
          </Box>
          <Box display="flex">
            <MKBox
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
            >
              <MKBox
                width="5rem"
                height="5rem"
                variant="gradient"
                bgColor="info"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="xl"
              >
                <Icon fontSize="large" class="material-icons-two-tone">
                  local_fire_department
                </Icon>
              </MKBox>
              <MKTypography variant="body2" color="text" p={2}>
                <b>Powerful Stretergy Builder</b>
              </MKTypography>
            </MKBox>
            <MKBox
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
            >
              <MKBox
                width="5rem"
                height="5rem"
                variant="gradient"
                bgColor="success"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="xl"
              >
                <Icon class="material-icons-two-tone" fontSize="large">
                  bar_chart
                </Icon>
              </MKBox>
              <MKTypography variant="body2" color="text" p={2}>
                <b>
                  Option chart to <br /> analyse market participation
                </b>
              </MKTypography>
            </MKBox>
            <MKBox
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
            >
              <MKBox
                width="5rem"
                height="5rem"
                variant="gradient"
                bgColor="error"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="xl"
              >
                <Icon class="material-icons-two-tone" fontSize="large">
                  candlestick_chart
                </Icon>
              </MKBox>
              <MKTypography variant="body2" color="text" p={2}>
                <b>
                  Profit and Loss <br /> Visualization of strategies
                </b>
              </MKTypography>
            </MKBox>
          </Box>
        </MKBox>
      </Grid>
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
    </MKBox>
  );
}

export default OurFeatureSection;
