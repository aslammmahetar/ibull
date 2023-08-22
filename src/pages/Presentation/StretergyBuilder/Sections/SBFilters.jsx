import React from "react";
import SearchANdSetting from "./SearchANdSetting";
import Builder from "./Builder";
import { Box, Stack } from "@mui/material";
const SBFilters = () => {
  return (
    <Box width={"45%"}>
      <SearchANdSetting />
      <Builder />
    </Box>
  );
};

export default SBFilters;
