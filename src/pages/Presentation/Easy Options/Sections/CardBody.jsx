import { Box, Paper, Typography } from "@mui/material";
import MKButton from "components/MKButton";
import Stocks from "pages/Presentation/StretergyWizard/Sections/Stocks";
import React from "react";

const CardBody = ({ tagLine, NorBN, NorBNtagLine, buttonContent }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        backgroundColor: "#fdfffc",
        pl: 4,
        pr: 4,
        p: 2,
        borderRadius: 4,
        mt: 2,
      }}
    >
      <Box width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%" }} sx={{ textAlign: "center" }}>
        <Stocks bgColor={"white"} buttonContent={buttonContent} />
        <Box mt={3}>
          <Typography fontSize={"small"}>{tagLine}</Typography>
          <MKButton sx={{ border: "solid black 1px" }} size="small">
            UP
          </MKButton>
          <MKButton sx={{ border: "solid black 1px", marginLeft: 1 }} size="small">
            Neutral
          </MKButton>
          <MKButton sx={{ border: "solid black 1px", marginLeft: 1 }} size="small">
            Down
          </MKButton>
        </Box>
      </Box>
      <Paper
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          padding: 2,
          mt: { xs: 4, sm: 4, md: 0, lg: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h5" textAlign={"center"}>
          {NorBN}
        </Typography>
        <Typography fontSize={"medium"} textAlign={"center"}>
          {NorBNtagLine}
        </Typography>
      </Paper>
    </Box>
  );
};

export default CardBody;
