import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

import PropTypes from "prop-types";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import React, { useState } from "react";
import MKInput from "components/MKInput";
import { Box, Button, CircularProgress, Snackbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Loader from "./Loader";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signin = ({ handleToggle }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [inputVal, setVal] = useState("");
  const [inpPassword, setPassword] = useState("");
  const [alertt, setAlert] = useState("");
  const [variant, setVariant] = useState("");

  const [isLoading, seetSetoading] = useState(true);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const credential = {
    mobile: "7016008039",
    password: "Novity@123",
  };

  const navigate = useNavigate();

  const handleLogin = (newState) => {
    if (!inputVal) {
      setVariant("error");
      setAlert("Please Enter Mobile Number");
      setState({ ...newState, open: true });
      return;
    }
    if (!inpPassword) {
      setVariant("error");
      setAlert("Please Enter Valid Password");
      setState({ ...newState, open: true });
      return;
    }
    if (credential.mobile === inputVal && credential.password === inpPassword) {
      // setError(!errorr);
      setVariant("success");
      setState({ ...newState, open: true });
      setAlert("Logged in Successfull");
      setTimeout(() => {
        navigate("/pages/landing-pages/about-us");
      }, 3000);
    } else {
      setVariant("error");
      setState({ ...newState, open: true });
      setAlert("Wrong credential");
    }
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <MKBox width="100%" height="100vh" position="relative" zIndex={2}>
        <Grid container justifyContent="right" alignItems="center" height="100%">
          <Grid xs={12} sm={10} md={6} lg={4}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                p={2}
                mb={1}
                mt={-3}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Mobile Number"
                      fullWidth
                      value={inputVal}
                      onChange={(e) => setVal(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      value={inpPassword}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      onClick={() => handleLogin({ vertical: " bottom", horizontal: "center" })}
                    >
                      sign in
                    </MKButton>
                    <Box>
                      <Snackbar
                        zIndex={999}
                        autoHideDuration={3000}
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        key={vertical + horizontal}
                      >
                        <Alert severity={variant}>{alertt}</Alert>
                      </Snackbar>
                    </Box>
                    <MKBox mt={3} mb={1} textAlign="center">
                      <MKTypography variant="button" color="text">
                        Don&apos;t have an account?{" "}
                        <Button textGradient onClick={() => handleToggle()}>
                          Sign up
                        </Button>
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
};

Signin.prototype = {
  handleToggle: PropTypes.func.isRequired,
};
export default Signin;
