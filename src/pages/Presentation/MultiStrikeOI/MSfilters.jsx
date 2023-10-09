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
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MSDrawer from "./MSDrawer";
import { useDispatch, useSelector } from "react-redux";
import { lineSeries } from "Redux/MSAction";

const MSfilters = () => {
  const dispatch = useDispatch();
  const groups = useSelector((store) => store.MSreducer.groups);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCardClick = (index, CE, PE) => {
    if (selectedCardIndex === index) {
      // If the clicked card is already selected, deselect it.
      setSelectedCardIndex(null);
    } else {
      // Otherwise, select the clicked card.
      setSelectedCardIndex(index);
    }

    console.log(groups);

    const getStrikes = CE.map((el) => el.cE_strikePrice);
    const checkboxNames = [];

    CE.forEach((CEPrice) => {
      const name = `${CEPrice.cE_expiryDate.slice(0, 6)} ${CEPrice.cE_strikePrice} CE`;
      checkboxNames.push(name);
    });

    PE.forEach((PEPrice) => {
      const name = `${PEPrice.cE_expiryDate.slice(0, 6)} ${PEPrice.cE_strikePrice} PE`;
      checkboxNames.push(name);
    });

    console.log(checkboxNames);
    const displayLineNamesArray = []; // Initialize an empty array to store objects

    for (let key of checkboxNames) {
      const displayLineNames = {}; // Initialize a new object for each iteration
      displayLineNames["name"] = key;
      displayLineNames["visible"] = true;
      displayLineNamesArray.push(displayLineNames); // Push the object into the array
    }

    console.log(displayLineNamesArray); // This will give you an array of displayLineNames objects
    setSelectedCheckboxes(checkboxNames);
    dispatch(lineSeries(getStrikes, displayLineNamesArray));
  };

  return (
    <MKBox width={"100%"} display={{ lg: "block" }}>
      <Box display={{ xs: "block", md: "block", lg: "flex" }} justifyContent={"space-between"}>
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
              <Button variant="outlined" style={{ width: "5px", color: "blue", marginLeft: "4px" }}>
                info
              </Button>
            </Box>
          </MKBox>
        </Card>
        <MSDrawer />
      </Box>
      <Accordion sx={{ overflowX: "auto", minWidth: "1000px" }}>
        <AccordionSummary>
          <Typography variant="h5">Strike Groups</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={"flex"}>
            {groups.map((group, index) => (
              <div key={group.id} style={{ overflowX: "auto" }}>
                <Card
                  sx={{
                    p: 1,
                    m: 1,
                    backgroundColor: selectedCardIndex === index ? "lightblue" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(index, group.CE, group.PE)}
                >
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="h6">Group {index + 1}</Typography>
                  </Box>
                  {group.CE.map((CEPrice, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={true} // You can set the checked value as needed
                          name={`${CEPrice.cE_expiryDate.slice(0, 6)} ${CEPrice.cE_strikePrice} CE`}
                        />
                      }
                      label={`${CEPrice.cE_expiryDate.slice(0, 6)} ${CEPrice.cE_strikePrice} CE`}
                    />
                  ))}
                  {group.PE.map((PEPrice, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={true} // You can set the checked value as needed
                          name={`${PEPrice.cE_expiryDate.slice(0, 6)} ${PEPrice.cE_strikePrice} PE`}
                        />
                      }
                      label={`${PEPrice.cE_expiryDate.slice(0, 6)} ${PEPrice.cE_strikePrice} PE`}
                    />
                  ))}
                </Card>
              </div>
            ))}
            {/* Display the selected checkbox names */}
          </Box>
        </AccordionDetails>
      </Accordion>
    </MKBox>
  );
};

export default MSfilters;
