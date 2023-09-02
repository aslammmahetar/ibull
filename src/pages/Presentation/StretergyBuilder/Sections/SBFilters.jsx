import React from "react";
import SearchANdSetting from "./SearchANdSetting";
import Builder from "./Builder";
import { Box } from "@mui/material";
const SBFilters = () => {
  return (
    <Box width={{ xs: "100%", sm: "100%", md: "100%", lg: "43%" }}>
      <SearchANdSetting />
      <Builder />
    </Box>
  );
};

export default SBFilters;
