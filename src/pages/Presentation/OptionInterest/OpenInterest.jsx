import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState } from "react";
import routes from "routes";
import OptionChart from "./Parts/OptionChart";
import bgImage from "assets/images/Banner.jpeg";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MKButton from "components/MKButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FullWidthTabs from "./Parts/Tabs";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import InfoIcon from "@mui/icons-material/Info";

const OpenInterest = () => {
  const [open, setOpen] = useState(false);

  const handleSearchIconClick = () => {
    setOpen(!open);
  };

  const strikesAboveAndBelowVal = [5, 10, 15, 20, 25, "All"];

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
        zIndex={999}
      />
      <MKBox
        minHeight="15vh"
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
      <MKBox width="98%" margin={"auto"}>
        <Box display={"flex"} justifyContent={"space-between"} style={{ backgroundColor: "white" }}>
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
        </Box>

        <Card
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
        >
          <Card
            style={{
              marginTop: "3px",
              width: "28%",
              padding: "10px",
              backgroundColor: "#DFE0E2",
            }}
          >
            <Card style={{ display: "flex", justifyContent: "center" }}>
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
            </Card>
            <Box
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
            </Box>
            <Card
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
            </Card>
            <Card
              style={{
                padding: "10px",
                marginTop: "25px",
              }}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography mt={"5px"} fontSize={"small"}>
                  Strike Price
                </Typography>
                <Button startIcon={<RestartAltIcon />}>Reset</Button>
              </Box>
              <Box display={"flex"}>
                <Box>
                  <Typography fontSize={"small"} style={{ marginLeft: "3px" }}>
                    Min
                  </Typography>
                  <TextField size="small" style={{ marginRight: "5px" }} />
                </Box>
                <Box>
                  <Typography fontSize={"small"} style={{ marginLeft: "3px" }}>
                    Max
                  </Typography>
                  <TextField size="small" />
                </Box>
              </Box>
              <Typography fontSize={"small"} mt={"14px"}>
                Strikes Above and Below ATM(...)
              </Typography>
              <Box ml={"5px"}>
                {strikesAboveAndBelowVal.map((el) => (
                  <Button
                    size="small"
                    variant="outlined"
                    style={{
                      color: "#1954B3",
                      width: "20px",
                      fontSize: "9px",
                      borderColor: "#1954B3",
                      marginLeft: "2px",
                    }}
                  >
                    {el}
                  </Button>
                ))}
              </Box>
            </Card>
          </Card>
          <MKBox style={{ width: "70%" }}>
            <OptionChart />
          </MKBox>
        </Card>
      </MKBox>
    </>
  );
};

export default OpenInterest;
