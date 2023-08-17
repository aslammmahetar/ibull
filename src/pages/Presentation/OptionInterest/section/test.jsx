import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FilterationSection from "./FilterationSection";
import ChartComponent from "./ChartComponent";

{
  /* <MKBox width="98%" margin={"auto"}> */
}
{
  /* <Box display={"flex"} justifyContent={"space-between"} style={{ backgroundColor: "white" }}>
          <FullWidthTabs />
          <Box display={"flex"} alignItems={"center"}>
            <Typography fontSize={"small"} style={{ display: "flex", alignItems: "center" }}>
              PCR 0.84
              <Tooltip title="NOTE: This PCR is computed based on open interest of options in Aug 10 expiry. This does not change with date pickers, time sliders and strike range selector controls below.">
                <InfoIcon />
              </Tooltip>
            </Typography>
          </Box>
          <Button startIcon={<PlayCircleFilledIcon />}>Watch Demo Video</Button>
        </Box> */
}

{
  /* <Card
        style={{ margin: "auto" }}
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -3,
          mb: 4,
          display: "flex",
          flexDirection: "row",
          // border: "solid black 1px",
          justifyContent: "space-between",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > */
}
{
  /* <Card
          style={{
            marginTop: "3px",
            width: "28%",
            padding: "10px",
            backgroundColor: "#DFE0E2",
          }}
        > */
}
{
  /* <Card style={{ display: "flex", justifyContent: "center" }}>
              <MKBox display={"flex"} style={{ padding: "5px" }}>
                <IconButton onClick={handleSearchIconClick}>
                  <Search />
                </IconButton>
                <div
                  style={{
                    top: "50px",
                    right: "10px",
                    // borderBottom: "1px solid black",
                    marginRight: "5px",
                  }}
                >
                  <InputBase
                    placeholder="Type Stock Name :SBIN, RELIANCE etc."
                    style={{ width: "80%", fontSize: "small" }}
                  />
                </div>
                <Box display={"flex"} justifyContent={"space-evenly"}>
                  <Tooltip title="Open Chart">
                    <Button variant="outlined" size="small">
                      <TrendingUpOutlinedIcon color="info" />
                    </Button>
                  </Tooltip>
                  <Button
                    variant="outlined"
                    style={{ width: "5px", color: "blue", marginLeft: "4px" }}
                  >
                    info
                  </Button>
                </Box>
              </MKBox>
            </Card> */
}
{
  /* <Box
              display={"flex"}
              marginTop={"25px"}
              padding={"10px"}
              borderRadius={"15px"}
              style={{ backgroundColor: "white" }}
            >
              <Box width={"50%"} marginLeft={"10px"}>
                <Typography fontSize={"small"} marginLeft={"3px"}>
                  NIFTY
                </Typography>
                <Box display={"flex"}>
                  <Button
                    size="small"
                    variant="outlined"
                    style={{
                      color: "#1954B3",
                      width: "20px",
                      fontSize: "9px",
                      borderColor: "#1954B3",
                    }}
                  >
                    Weekly
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    style={{
                      color: "#1954B3",
                      width: "20px",
                      fontSize: "9px",
                      borderColor: "#1954B3",
                      marginLeft: "3px",
                    }}
                  >
                    Monthly
                  </Button>
                </Box>
              </Box>
              <hr style={{ marginLeft: "1px" }} />
              <Box width={"50%"}>
                <Typography fontSize={"small"} marginLeft={"8px"}>
                  BANKNIFTY
                </Typography>
                <Box display={"flex"}>
                  <MKButton
                    size="small"
                    variant="outlined"
                    style={{
                      color: "#1954B3",
                      width: "20px",
                      fontSize: "9px",
                      borderColor: "#1954B3",
                      marginLeft: "5px",
                    }}
                  >
                    Weekly
                  </MKButton>
                  <MKButton
                    size="small"
                    variant="outlined"
                    style={{
                      color: "#1954B3",
                      width: "20px",
                      fontSize: "9px",
                      borderColor: "#1954B3",
                      marginLeft: "5px",
                    }}
                  >
                    Monthly
                  </MKButton>
                </Box>
              </Box>
            </Box> */
}
{
  /* <Card
              style={{
                padding: "20px",

                marginTop: "25px",
              }}
            >
              <Typography fontSize={"small"}>Expiries</Typography>
              <FormGroup>
                <Box style={{ display: "flex" }}>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Current" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Next" />
                </Box>
              </FormGroup>
            </Card> */
}
{
  /*  */
}
{
  /* </Card> */
}
{
  /* <MKBox style={{ width: "70%" }}><OptionChart /></MKBox> */
}
{
  /* // </Card> */
}
{
  /* </MKBox> */
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  filteration: {
    position: "sticky",
    top: 0,
  },
  chartContainer: {
    maxHeight: "calc(100vh - 100px)", // Adjust this as needed
    overflowY: "scroll",
  },
}));

function TradingPlatform() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.filteration}>
          <Paper>
            <FilterationSection />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <div className={classes.chartContainer}>
            <ChartComponent />
            <ChartComponent />
            <ChartComponent />
            {/* Add more ChartComponent instances as needed */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TradingPlatform;
