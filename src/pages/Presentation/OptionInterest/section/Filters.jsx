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
  TextField,
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
import { toggleWithCurrentMonth } from "Redux/action";
import { toggleWithNextMonth } from "Redux/action";
import { getTwoMonthData } from "Redux/action";
import { emptyData } from "Redux/action";
import { firstMonth } from "Redux/action";
import { secondMonth } from "Redux/action";
import { makingReqforNSE } from "Redux/RealActions";

export const Filters = () => {
  const strikesAboveAndBelowVal = [5, 10, 15, 20, 25, "All"];

  const currentIsChecked = useSelector((state) => state.reducer.currentMonth);
  const nextIscChecked = useSelector((store) => store.reducer.nextMonth);
  const dispatch = useDispatch();
  const nextMonth = useSelector((store) => store.reducer.nextMonth);
  const currentMonth = useSelector((store) => store.reducer.currentMonth);
  const displayData = () => {
    if (currentMonth && nextMonth) {
      return dispatch(getTwoMonthData());
    } else if (!currentMonth && nextMonth) {
      return dispatch(firstMonth());
    } else if (currentMonth && !nextMonth) {
      return dispatch(secondMonth());
    } else if (!currentMonth && !nextMonth) {
      return dispatch(emptyData());
    }
  };
  const handleCurrentBoxChange = () => {
    dispatch(toggleWithCurrentMonth());
    displayData();
  };
  const handleNextBoxXChange = () => {
    dispatch(toggleWithNextMonth());
    displayData();
  };

  useEffect(() => {
    displayData();
  }, [currentMonth, nextMonth]);

  const [minStike, setMinStrike] = useState(0);
  const [maxStrike, setMaxStrike] = useState(0);

  const [selectFontSize, setSelectedFontSize] = React.useState(null);
  const handleColumns = (index) => {
    setSelectedFontSize(index);
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
          <Box display={"flex"} justifyContent={"space-between"}>
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
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography mt={"5px"} fontSize={"small"}>
                  Strike Price
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Box>
                  <Typography fontSize={"small"} style={{ marginLeft: "3px" }}>
                    Min
                  </Typography>
                  <TextField
                    size="small"
                    style={{ marginRight: "5px" }}
                    value={minStike}
                    onChange={(e) => setMinStrike(e.target.value)}
                  />
                </Box>
                <Box>
                  <Typography fontSize={"small"} style={{ marginLeft: "3px" }}>
                    Max
                  </Typography>
                  <TextField
                    size="small"
                    value={maxStrike}
                    onChange={(e) => setMaxStrike(e.target.value)}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography fontSize={"small"} mt={"14px"}>
                Strikes Above and Below ATM(...)
              </Typography>
              {strikesAboveAndBelowVal.map((el, index) => (
                <Button
                  onClick={() => dispatch(makingReqforNSE(el + el + 2))}
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
            <Button startIcon={<RestartAltIcon />}>Reset</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </MKBox>
  );
};
