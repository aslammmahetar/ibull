import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DefaultStrike = ({
  seriesVisibility,
  setSeriesVisibility,
  selectedCardIndex,
}) => {
  const defaultStrikes = useSelector((store) => store.MSreducer.defaltStrikes);

  const handleCheckboxChange = (isVisible, seriesName) => {
    console.log(isVisible, seriesName);
    setSeriesVisibility({
      ...seriesVisibility,
      [seriesName]: isVisible,
    });
  };

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-around"}>
        {defaultStrikes.map((el, index) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={seriesVisibility[`${el.name}`]}
                  onChange={(e) =>
                    handleCheckboxChange(e.target.checked, el.name)
                  }
                  name={el.name}
                />
              }
              label={el.name}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default DefaultStrike;
