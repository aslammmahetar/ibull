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
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import { Search } from "@mui/icons-material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MSDrawer from "./MSDrawer";

const MSfilters = () => {
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
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5">Strike Groups</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h6">Group 1</Typography>
            <Card sx={{ p: 1 }}>
              <Box display={"flex"}>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={selectAll}
                        // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
                        name="28 SEP 2400 CE"
                      />
                    }
                    label="28 SEP 2400 CE"
                  />
                </Box>
              </Box>
            </Card>
          </Box>
        </AccordionDetails>
      </Accordion>
    </MKBox>
  );
};

export default MSfilters;
