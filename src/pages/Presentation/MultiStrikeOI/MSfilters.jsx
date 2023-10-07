import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  FormControl,
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
import OptionCard from "./MSOptionCard";
import { useSelector } from "react-redux";

const MSfilters = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const groups = useSelector((store) => store.MSreducer.groups);

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
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
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5">Strike Groups</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box display={"flex"}>
              <Box>
                {/* {groups.map((el, index) => {
                  return (
                    <>
                      <Typography variant="h6">Group {index + 1}</Typography>
                      <OptionCard
                        cardNumber={1}
                        isSelected={selectedCard === 1}
                        onClick={() => handleCardClick(1)}
                      />
                    </>
                  );
                })} */}
                {groups.map((group, index) => (
                  <div key={group.id}>
                    <Typography variant="h6">Group {index + 1}</Typography>
                    <Card sx={{ p: 1 }}>
                      {/* Render CE and PE strike prices for this group */}
                      {group.CE.map((CEPrice, index) => (
                        <OptionCard
                          key={index}
                          cardNumber={index + 1}
                          isSelected={selectedCard === index + 1}
                          onClick={() => handleCardClick(index + 1)}
                          optionType="CE"
                          /* Pass necessary props for OptionCard */
                        />
                      ))}
                      {group.PE.map((PEPrice, index) => {
                        console.log(PEPrice);
                        return (
                          <OptionCard
                            key={index}
                            cardNumber={index + 1}
                            optionType="PE"
                            isSelected={selectedCard === index + 1}
                            onClick={() => handleCardClick(index + 1)}
                            /* Pass necessary props for OptionCard */
                          />
                        );
                      })}
                    </Card>
                  </div>
                ))}
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </MKBox>
  );
};

export default MSfilters;
