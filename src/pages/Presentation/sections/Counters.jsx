/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { Box, Typography } from "@mui/material";
import ENYTabs from "./EYNtab";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Grid
        container
        item
        xs={12}
        lg={9}
        display={"flex"}
        flexDirection={"column"}
        sx={{ mx: "auto" }}
      >
        <Box>
          <Typography textAlign={"center"} variant="h3" mb={5}>
            Everything You Need
          </Typography>
        </Box>
        <MKBox>
          <ENYTabs />
        </MKBox>
      </Grid>
    </MKBox>
  );
}

export default Counters;
