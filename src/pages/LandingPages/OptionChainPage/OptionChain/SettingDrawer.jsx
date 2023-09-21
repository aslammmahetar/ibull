import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import smallFontImage from "assets/images/smallfont.png";
import mediumFontImage from "assets/images/mediumfont.png";
import largeFontImage from "assets/images/largefont.png";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  ImageList,
  ImageListItem,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { fontSizeChange } from "Redux/action";
import { getLessThanATMData } from "Redux/RealActions";

export default function SwipeableTemporaryDrawer() {
  const lessThanButton = ["10", "20", "30", "40", "50"];
  const greterThanButton = ["10", "20", "30", "40", "50"];
  const itemData = [smallFontImage, mediumFontImage, largeFontImage];
  const fontArray = ["small", "medium", "large"];

  ///
  const dispatch = useDispatch();

  ///
  const [value, setValue] = React.useState("one");
  const [radioValue, setRadioValue] = React.useState("");
  const [selectFontSize, setSelectedFontSize] = React.useState(null);
  const [state, setState] = React.useState({
    right: false,
  });

  ///
  const [selectedLessThanButton, setSelectedLessThanButton] = React.useState(null);
  const handleLessThanButtonClick = (e, index) => {
    setSelectedLessThanButton(index);
    dispatch(getLessThanATMData(Number(e.target.innerText)));
  };

  const [selectedGreaterThanButton, setSelectedGreaterThanButton] = React.useState(null);
  const handleGreterThanButtonClick = (index) => {
    setSelectedGreaterThanButton(index);
  };

  ///
  const handleFontSize = (index) => {
    setSelectedFontSize(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRadio = (event) => {
    setRadioValue(event.target.value);
  };

  ///
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  ///
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      pt={2}
    >
      <Box pl={2} borderBottom={"solid lightgrey 1px"}>
        <Typography>Settings</Typography>
      </Box>
      <Box onClick={(e) => e.stopPropagation()} p={2}>
        <Box borderBottom={"solid black 1px"} pb={2}>
          <Typography fontSize={"medium"} variant="h4" textAlign={"center"}>
            <span style={{ padding: 8, backgroundColor: "lightgray", borderRadius: 5 }}>
              Global Settings
            </span>
          </Typography>
          <Typography variant="h5" fontSize={"medium"} textAlign={"center"} mt={2}>
            Global settings will affect all views in Option Chain
          </Typography>
        </Box>
        <Box>
          <FormControl>
            <FormLabel id="Show Qty as" style={{ fontSize: "medium" }}>
              Show Qty as
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="control   led-radio-buttons-group"
              value={radioValue}
              onChange={handleRadio}
            >
              <Box display={"flex"}>
                <FormControlLabel value="lots" control={<Radio />} label="Lots" />
                <FormControlLabel value="quantitty" control={<Radio />} label="Qty" />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
        <Box mt={2}>
          <Typography mb={1} fontSize={"medium"}>
            No of strikes less than ATM :{" "}
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {lessThanButton.map((button, index) => (
              <Button
                size="small"
                key={index}
                onClick={(e) => handleLessThanButtonClick(e, index)}
                style={{
                  border: "solid lightgrey 1px",
                  backgroundColor: selectedLessThanButton === index ? "blue" : "white",
                  color: selectedLessThanButton === index ? "white" : "black",
                }}
              >
                {button}
              </Button>
            ))}
          </div>
        </Box>
        <Box mt={2}>
          <Typography mb={1} fontSize={"medium"}>
            No of strikes greater than ATM :{" "}
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {greterThanButton.map((button, index) => (
              <Button
                size="small"
                key={index}
                onClick={() => handleGreterThanButtonClick(index)}
                style={{
                  border: "solid lightgrey 1px",
                  backgroundColor: selectedGreaterThanButton === index ? "blue" : "white",
                  color: selectedGreaterThanButton === index ? "white" : "black",
                }}
              >
                {button}
              </Button>
            ))}
          </div>
        </Box>
        <Box mt={3}>
          <Typography fontSize={"medium"}>Table Font Size</Typography>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item, index) => (
              <Box
                onClick={() => handleFontSize(index)}
                style={{
                  borderRadius: 5,
                  border: "solid lightgrey 1px",
                  backgroundColor: selectFontSize === index ? "blue" : "white",
                  color: selectFontSize === index ? "white" : "black",
                }}
              >
                <ImageListItem key={index}>
                  <div onClick={() => dispatch(fontSizeChange(fontArray[index]))}>
                    <img src={item} srcSet={item} alt={"Imges"} loading="lazy" />
                    <Box textAlign={"center"}>
                      <Typography fontSize={"Small"}>{fontArray[index]}</Typography>
                    </Box>
                  </div>
                </ImageListItem>
              </Box>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          onClick={(e) => e.stopPropagation()} // Add this line to stop event propagation
        >
          <Tab value="LTP View" label="LTP View" wrapped />
          <Tab value="Greek View" label="Greek View" />
          <Tab value="All Column View" label="All Column View" />
        </Tabs>
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} startIcon={<SettingsIcon />}>
            Settings
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
