import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

import PropTypes from "prop-types";

// @mui icons
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import React, { useState } from "react";
import MKInput from "components/MKInput";
import { Box, Button, Snackbar, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Logotag } from "../logotag/Logotag";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signin = ({ handleToggle }) => {
  const [loginID, setLoginID] = useState("");
  const [inpPassword, setPassword] = useState("");
  const [alertt, setAlert] = useState("");
  const [variant, setVariant] = useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const { vertical, horizontal, open } = state;

  ///
  const handleLogin = (newState) => {
    if (!loginID) {
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

    ///
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      UserName: loginID,
      Password: inpPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.1.5/Account/Login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 1) {
          setVariant("error");
        } else {
          setVariant("success");
        }
        setState({ ...newState, open: true });
        setAlert(result.respmsg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <MKBox width="100%" height="100vh" position="relative" zIndex={2}>
        <Grid container justifyContent="space-between" alignItems="center" height="100%">
          <Logotag />
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
                <Box fontFamily={`'Tourney', "cursive"`} color={"whitesmoke"} fontSize={"25px"}>
                  iBull
                </Box>
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Login ID"
                      fullWidth
                      value={loginID}
                      onChange={(e) => setLoginID(e.target.value)}
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
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      onClick={() => handleLogin({ vertical: " bottom", horizontal: "center" })}
                    >
                      sign in
                    </MKButton>
                    <Typography textAlign={"center"} fontSize={"small"}>
                      Or
                    </Typography>
                    <Button
                      color="primary"
                      fullWidth
                      // onClick={handleGoogleLogin}
                      startIcon={<GoogleIcon />}
                      sx={{
                        backgroundColor: "#fff",
                        color: "#4285F4",
                        "&:hover": {
                          backgroundColor: "#f0f0f0",
                        },
                      }}
                    >
                      Sign Up with Google
                    </Button>
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
