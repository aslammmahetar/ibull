import React from "react";
import { Grid, Box, Typography, Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";

const features = [
  {
    title: "User Friendly Interface",
    icon: "devices",
    bgColor: "success",
  },
  {
    title: "Powerful Analytics Tools",
    icon: "analytics",
    bgColor: "error",
  },
  {
    title: "Auto Refresh Data",
    icon: "autorenew",
    bgColor: "info",
  },
  {
    title: "Powerful Strategy Builder",
    icon: "local_fire_department",
    bgColor: "info",
  },
  {
    title: "Option Chart to Analyze Market Participation",
    icon: "bar_chart",
    bgColor: "success",
  },
  {
    title: "Profit and Loss Visualization of Strategies",
    icon: "candlestick_chart",
    bgColor: "error",
  },
];

const useStyles = makeStyles((theme) => ({
  featureTitle: {
    transition: "font-size 0.3s ease-in-out",
  },
  featureCard: {
    "&:hover": {
      "& $featureTitle": {
        fontSize: "1.2em",
      },
    },
  },
}));

function OurFeatureSection() {
  const classes = useStyles();

  return (
    <Box component="section" py={{ xs: 3, md: 12 }}>
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              p={2}
              className={classes.featureCard}
            >
              <Box
                width="5rem"
                height="5rem"
                sx={{
                  bgcolor: feature.bgColor,
                  color: "white",
                  borderRadius: "xl",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon fontSize="large">{feature.icon}</Icon>
              </Box>
              <Typography variant="body2" color="text" p={2} className={classes.featureTitle}>
                <b>{feature.title}</b>
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurFeatureSection;
