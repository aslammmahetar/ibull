import React from "react";
import { Grid, Card, CardContent, Typography, Icon } from "@mui/material";
import MKBox from "components/MKBox";
import { makeStyles } from "@mui/styles";

const features = [
  {
    title: (
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
        <Icon class="material-icons-two-tone" color="white" fontSize="large">
          devices
        </Icon>
      </MKBox>
    ),
    description: <b>User Friendly Interface</b>,
  },
  {
    title: (
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
        <Icon fontSize="large" color="white" class="material-icons-two-tone">
          analytics
        </Icon>
      </MKBox>
    ),
    description: <b>powerful analytics tools</b>,
  },
  {
    title: (
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
        <Icon fontSize="large" color="white" class="material-icons-two-tone">
          autorenew
        </Icon>
      </MKBox>
    ),
    description: <b>Auto Refresh Data</b>,
  },

  {
    title: (
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
        <Icon class="material-icons-two-tone" color="white" fontSize="large">
          bar_chart
        </Icon>
      </MKBox>
    ),
    description: <b>Option chart to analyse market participation</b>,
  },
  {
    title: (
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
        <Icon fontSize="large" color="white" class="material-icons-two-tone">
          local_fire_department
        </Icon>
      </MKBox>
    ),
    description: <b>Powerful Stretergy Builder</b>,
  },
  {
    title: (
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
        <Icon class="material-icons-two-tone" color="white" fontSize="large">
          candlestick_chart
        </Icon>
      </MKBox>
    ),
    description: <b>Profit and Loss Visualization of strategies</b>,
  },
];
const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover .title": {
      fontSize: "1.2em",
    },
  },
}));

const FeatureSection = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Our Features
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" display={"flex"} justifyContent={"center"}>
                  {feature.title}
                </Typography>
                <Typography textAlign={"center"} p={2}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeatureSection;
