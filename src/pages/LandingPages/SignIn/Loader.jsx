import React from "react";

import { Box, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Loader = () => {
  //   const loader = useStyles();

  const [state, setState] = React.useState({
    open: false,
    vertical: "Bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box>
      <Snackbar
        zIndex={999}
        autoHideDuration={5000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert severity={"info"}>{"Loading..."}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Loader;
