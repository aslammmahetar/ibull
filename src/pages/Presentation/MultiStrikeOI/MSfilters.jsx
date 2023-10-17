import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Icon,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MSDrawer from "./MSDrawer";
import { useDispatch, useSelector } from "react-redux";
import SolarEmploymentChart from "./MultiStrikeOIChart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { lineSeries } from "Redux/Multi_Strike_OI/MSAction";
import DeleteIcon from "@mui/icons-material/Delete";
import { defaultGroup } from "Redux/Multi_Strike_OI/MSAction";
import { selectDefaultGroup } from "Redux/Multi_Strike_OI/MSAction";
import { deleteGroup } from "Redux/Multi_Strike_OI/MSAction";

const MSfilters = () => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = React.useState(1);

  const groups = useSelector((store) => store.MSreducer.groups);
  const [seriesVisibility, setSeriesVisibility] = useState({});
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  console.log(groups);

  const handleCardClick = (index, CE, PE) => {
    if (selectedCardIndex === index) {
      // If the clicked card is already selected, deselect it.
      setSelectedCardIndex(null);
    } else {
      // Otherwise, select the clicked card.
      setSelectedCardIndex(index);
    }

    const getCEStrikes = CE.map((el) => el.cE_strikePrice);
    const getPEStrikes = PE.map((el) => el.pE_strikePrice);
    const getStrikes = [...getCEStrikes, ...getPEStrikes];
    const checkboxNames = [];

    CE.forEach((CEPrice) => {
      const name = `${CEPrice.cE_expiryDate.slice(0, 6)} ${
        CEPrice.cE_strikePrice
      } CE`;
      checkboxNames.push(name);
    });

    PE.forEach((PEPrice) => {
      const name = `${PEPrice.cE_expiryDate.slice(0, 6)} ${
        PEPrice.cE_strikePrice
      } PE`;
      checkboxNames.push(name);
    });

    console.log(checkboxNames);
    const displayLineNamesArray = []; // Initialize an empty array to store objects

    for (let key of checkboxNames) {
      const displayLineNames = {}; // Initialize a new object for each iteration
      displayLineNames["name"] = key;
      displayLineNames["visible"] = selectedCheckboxes.includes(
        checkboxNames[index]
      );
      displayLineNamesArray.push(displayLineNames); // Push the object into the array
    }

    setSelectedCheckboxes(checkboxNames);
    console.log(displayLineNamesArray); // This will give you an array of displayLineNames objects

    dispatch(lineSeries(getStrikes, displayLineNamesArray, symbol));
    dispatch(selectDefaultGroup(false));
  };

  const handleCECheckBox = (isVisible, seriesName) => {
    if (selectedCardIndex !== null) {
      setSeriesVisibility((prevVisibility) => ({
        ...prevVisibility,
        [seriesName]: isVisible,
      }));
    }
  };
  const handleDeleteBox = (index) => {
    dispatch(dispatch(selectDefaultGroup(true)));
    dispatch(deleteGroup(index));
  };
  return (
    <MKBox width={"100%"} display={{ lg: "block" }}>
      <Box
        display={{ xs: "block", md: "block", lg: "flex" }}
        justifyContent={"space-between"}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "100%", md: "100%", lg: "48%" },
          }}
        >
          <MKBox
            display={"flex"}
            // border="solid black 1px"
            alignItems={"center"}
            style={{ padding: "5px" }}
            justifyContent="space-around"
          >
            <div
              style={{
                width: "50%",
                display: "flex",
              }}
            >
              <IconButton>
                <Search />
              </IconButton>
              <FormControl fullWidth>
                <Select
                  style={{ height: "37px" }}
                  // value={age}
                  defaultValue={"NIFTY"}
                  // onChange={handleChange}
                >
                  <MenuItem style={{ height: "100%" }} value={"NIFTY"}>
                    NIFTY
                  </MenuItem>
                  <MenuItem value={"BANKNIFTY"}>BANKNIFTY</MenuItem>
                  <MenuItem value={"FIN NIFTY"}>FIN NIFTY</MenuItem>
                </Select>
              </FormControl>
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
        <MSDrawer symbol={symbol} setSymbol={setSymbol} />
      </Box>
      <Accordion sx={{ overflowX: "auto", minWidth: "1000px", mt: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Strike Groups</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={"flex"}>
            {groups.length == 0 && "Create Group"}
            {groups.map((group, grpindex) => (
              <div key={group.id} style={{ overflowX: "auto" }}>
                <Card
                  sx={{
                    p: 1,
                    m: 1,
                    border:
                      selectedCardIndex === grpindex
                        ? "1px solid black"
                        : "none",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6">Group {grpindex + 1}</Typography>
                    <Button
                      onClick={() =>
                        handleCardClick(grpindex, group.CE, group.PE)
                      }
                    >
                      {selectedCardIndex === grpindex ? "Selected" : "Select"}
                    </Button>
                  </Box>
                  {group.CE.map((CEPrice, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          disabled={selectedCardIndex !== grpindex}
                          checked={
                            selectedCardIndex === grpindex
                              ? seriesVisibility[
                                  `${CEPrice.cE_expiryDate.slice(0, 6)} ${
                                    CEPrice.cE_strikePrice
                                  } CE`
                                ]
                              : false
                          }
                          name={`${CEPrice.cE_expiryDate.slice(0, 6)} ${
                            CEPrice.cE_strikePrice
                          } CE`}
                          onChange={(e) =>
                            handleCECheckBox(
                              e.target.checked,
                              `${CEPrice.cE_expiryDate.slice(0, 6)} ${
                                CEPrice.cE_strikePrice
                              } CE`
                            )
                          }
                        />
                      }
                      label={`${CEPrice.cE_expiryDate.slice(0, 6)} ${
                        CEPrice.cE_strikePrice
                      } CE`}
                    />
                  ))}
                  {group.PE.map((PEPrice, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          disabled={selectedCardIndex !== grpindex}
                          checked={
                            selectedCardIndex === grpindex
                              ? seriesVisibility[
                                  `${PEPrice.pE_expiryDate.slice(0, 6)} ${
                                    PEPrice.pE_strikePrice
                                  } PE`
                                ]
                              : false
                          }
                          name={`${PEPrice.pE_expiryDate.slice(0, 6)} ${
                            PEPrice.cE_strikePrice
                          } PE`}
                          onChange={(e) =>
                            handleCECheckBox(
                              e.target.checked,
                              `${PEPrice.pE_expiryDate.slice(0, 6)} ${
                                PEPrice.pE_strikePrice
                              } PE`
                            )
                          }
                        />
                      }
                      label={`${PEPrice.pE_expiryDate.slice(0, 6)} ${
                        PEPrice.pE_strikePrice
                      } PE`}
                    />
                  ))}
                  <Box display={"flex"} justifyContent={"right"}>
                    <Icon
                      color="error"
                      component={DeleteIcon}
                      onClick={() => handleDeleteBox(grpindex)}
                    />
                  </Box>
                </Card>
              </div>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          marginTop: "10px",
          width: "100%",
        }}
      >
        <Card sx={{ padding: "10px" }}>
          <SolarEmploymentChart seriesVisibility={seriesVisibility} />
          <hr />
        </Card>
      </Box>
    </MKBox>
  );
};

export default MSfilters;
