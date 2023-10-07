import { Card, CardContent, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function OptionCard({ cardNumber, isSelected, onClick, optionType }) {
  const groups = useSelector((store) => store.MSreducer.groups);
  console.log(groups);

  const renderOptions = (options, type) => {
    return options.map((el, index) => (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            // checked={selectAll}
            // onChange={handleSelectAllChange} // Handle "Select All" checkbox change
            name={`${el[`${type}_expiryDate`].slice(0, 6)} ${el[`${type}_strikePrice']} ${type}`}
          />
        }
        label={`${el[`${type}_expiryDate`].slice(0, 6)} ${el[`${type}_strikePrice']} ${type}`}
      />
    ));
  };
      
  return (
    groups.length && (
      <Card onClick={onClick} style={{ backgroundColor: isSelected ? "lightblue" : "white" }}>
        <CardContent>
          {optionType === "CE" && renderOptions(groups[0].CE, "cE")}
          {optionType === "PE" && renderOptions(groups[0].PE, "pE")}
        </CardContent>
      </Card>
    )
  );
}

export default OptionCard;
