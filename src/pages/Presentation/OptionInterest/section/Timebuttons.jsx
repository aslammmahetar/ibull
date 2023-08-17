import { Button } from "@mui/material";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import React from "react";

const Timebuttons = () => {
  return (
    <MKBox>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 5 Mins
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 10 Mins
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 15 Mins{" "}
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 30 Mins
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 1hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 1hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 2hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Last 3hr
      </MKButton>
      <MKButton size="small" variant="outlined" style={{ color: "#16718D", marginLeft: "2px" }}>
        Full day
      </MKButton>
    </MKBox>
  );
};

export default Timebuttons;
