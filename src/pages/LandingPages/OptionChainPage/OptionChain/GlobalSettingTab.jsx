import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  ImageList,
  ImageListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { fontSizeChange } from "Redux/action";
import { getLessThanATMData } from "Redux/RealActions";
import { getGreaterThanATMData } from "Redux/RealActions";
import smallFontImage from "assets/images/smallfont.png";
import mediumFontImage from "assets/images/mediumfont.png";
import largeFontImage from "assets/images/largefont.png";
import { useDispatch } from "react-redux";
const GlobalSettingTab = () => {
  const dispatch = useDispatch();

  const lessThanButton = ["10", "20", "30", "40", "50"];
  const greterThanButton = ["10", "20", "30", "40", "50"];
  const itemData = [smallFontImage, mediumFontImage, largeFontImage];
  const fontArray = ["small", "medium", "large"];
  const [radioValue, setRadioValue] = React.useState("");
  const handleRadio = (event) => {
    setRadioValue(event.target.value);
  };
  const [selectedLessThanButton, setSelectedLessThanButton] = React.useState(null);
  const handleLessThanButtonClick = (e, index) => {
    setSelectedLessThanButton(index);
    dispatch(getLessThanATMData(Number(e.target.innerText)));
  };

  const [selectedGreaterThanButton, setSelectedGreaterThanButton] = React.useState(null);
  const handleGreterThanButtonClick = (e, index) => {
    setSelectedGreaterThanButton(index);
    dispatch(getGreaterThanATMData(Number(e.target.innerText)));
  };

  const [selectFontSize, setSelectedFontSize] = React.useState(null);
  const handleFontSize = (index) => {
    setSelectedFontSize(index);
  };
  return (
    <Box role="presentation" pt={2}>
      <Box>
        <Box borderBottom={"solid black 1px"} pb={2}>
          <Typography variant="h5" fontSize={"medium"} textAlign={"center"}>
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
                onClick={(e) => handleGreterThanButtonClick(e, index)}
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
    </Box>
  );
};

export default GlobalSettingTab;
