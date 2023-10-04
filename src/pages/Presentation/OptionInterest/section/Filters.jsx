import { Search } from "@mui/icons-material";
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
  FormGroup,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MKBox from "components/MKBox";
import React, { useEffect, useState } from "react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MKButton from "components/MKButton";
import { useDispatch, useSelector } from "react-redux";

import { makingReqforNSE } from "Redux/RealActions";
import { showCurrentMonthData } from "Redux/RealActions";
import { showNextMonthData } from "Redux/RealActions";

export const Filters = () => {
  const strikesAboveAndBelowVal = [5, 10, 15, 20, 25, "All"];

  const currentIsChecked = useSelector((state) => state.realReducer.currentMonth);
  const nextIscChecked = useSelector((store) => store.realReducer.nextMonth);
  const dispatch = useDispatch();

  const handleCurrentBoxChange = () => {
    dispatch(showCurrentMonthData());
  };
  const handleNextBoxXChange = () => {
    dispatch(showNextMonthData());
  };

  const [selectFontSize, setSelectedFontSize] = React.useState(null);

  const [symbol, setSymbol] = useState(1);

  useEffect(() => {
    dispatch(makingReqforNSE(10, symbol)); // Dispatch the function to fetch data
  }, [symbol]);

  const handleSymbol = (val) => {
    setSymbol(val);
  };

  return (
    <MKBox marginBottom="10px">
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        // border={"solid black 1px"}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "48%",
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
                  value={symbol}
                  defaultValue={1}
                  onChange={(e) => handleSymbol(e.target.value)}
                >
                  <MenuItem style={{ height: "100%" }} value={1}>
                    NIFTY
                  </MenuItem>
                  <MenuItem value={2}>BANKNIFTY</MenuItem>
                  <MenuItem value={3}>FIN NIFTY</MenuItem>
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
        <Card sx={{ width: "48%" }}>
          <Box
            display={"flex"}
            flexDirection={{ sm: "column", md: "column", lg: "row" }}
            justifyContent={"center"}
            padding={2}
          >
            <Box margin={{ sm: "auto", md: "auto" }}>
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
                    marginLeft: "2px",
                  }}
                >
                  Monthly
                </Button>
              </Box>
            </Box>
            <hr style={{ marginLeft: "1px" }} />
            <Box margin={{ sm: "auto", md: "auto" }}>
              <Typography fontSize={"small"}>BANKNIFTY</Typography>
              <Box display={"flex"}>
                <MKButton
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
                </MKButton>
                <MKButton
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
                  Monthly
                </MKButton>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
      <Accordion style={{ marginTop: "5px", borderRadius: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">More Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Box>
              <Typography fontSize={"small"}>Expiries</Typography>
              <FormGroup>
                <Box style={{ display: "flex" }}>
                  <FormControlLabel
                    control={
                      <Checkbox checked={currentIsChecked} onChange={handleCurrentBoxChange} />
                    }
                    label="Current"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={nextIscChecked} onChange={handleNextBoxXChange} />}
                    label="Next"
                  />
                </Box>
              </FormGroup>
            </Box>

            <Box>
              <Typography fontSize={"small"} mt={"14px"}>
                Strikes Above and Below ATM(...)
              </Typography>
              {strikesAboveAndBelowVal.map((el, index) => (
                <Button
                  onClick={() => dispatch(makingReqforNSE(el))}
                  size="small"
                  variant="outlined"
                  style={{
                    backgroundColor: selectFontSize === index ? "blue" : "white",
                    color: selectFontSize === index ? "white" : "black",
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
          </Box>
          <Box width={"100%"} textAlign={"right"}>
            <Button startIcon={<RestartAltIcon />} onClick={() => dispatch(makingReqforNSE(5))}>
              Reset
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </MKBox>
  );
};
