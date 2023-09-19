/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import { Alert, Button, Container, Snackbar, TextField, Typography } from "@mui/material";
import MKButton from "components/MKButton";
import { baseURL } from "App";

// Material Kit 2 React example components

// Material Kit 2 React page layout routes

// Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Signup({ handleToggle }) {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginId, setLoginID] = useState("");
  const [DOB, setDOB] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [statee, setStatee] = useState("");

  const [variant, setVariant] = useState("");
  const [alertt, setAlert] = useState("");

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleRegister = async (newState) => {
    if (
      !firstName ||
      !lastName ||
      !mobile ||
      !email ||
      !password ||
      !loginId ||
      !DOB ||
      !city ||
      !pinCode ||
      !address ||
      !statee
    ) {
      setVariant("error");
      setAlert("All fields are required");
      setState({ ...newState, open: true });
      return;
    }
    const url = `${baseURL}/Account/RegisterUser`;
    console.log(url);
    const data = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: DOB,
      mobileNo: mobile,
      emailID: email,
      address: address,
      city: city,
      state: statee,
      pinCode: pinCode,
      loginId: loginId,
      password: password,
    };
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Check if the response is not JSON (e.g., plain text or HTML)
        if (response.headers.get("content-type").indexOf("application/json") === -1) {
          // Handle non-JSON response here
          return response.text(); // Or response.blob(), response.arrayBuffer(), etc., depending on the response type
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Got an error:", error);
      });
  };

  return (
    <>
      <MKBox>
        <Container>
          <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
            <Grid
              container
              justifyContent="space-between"
              margin={"auto"}
              alignItems="center"
              height="100%"
              mt={5}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card>
                  <MKBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    mx={2}
                    mt={-3}
                    p={2}
                    mb={1}
                    textAlign="center"
                  >
                    <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                      Sign Up
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
                    <MKBox
                      component="form"
                      role="form"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <MKBox width="48%" mb={2} display={"flex"} flexDirection="column">
                        <MKBox display="flex">
                          <MKInput
                            type="text"
                            label="First Name"
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <MKInput
                            type="text"
                            label="Last Name"
                            fullWidth
                            value={lastName}
                            style={{ marginLeft: 5 }}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </MKBox>
                        <MKBox mt={2}>
                          <MKInput
                            type="text"
                            label="Mobile"
                            fullWidth
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </MKBox>
                        <MKBox mt={2}>
                          <MKInput
                            type="text"
                            label="E-mail"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </MKBox>
                        <MKBox mt={2}>
                          <MKInput
                            type="text"
                            label="Login ID"
                            fullWidth
                            value={loginId}
                            onChange={(e) => setLoginID(e.target.value)}
                          />
                        </MKBox>
                        <MKBox mt={2}>
                          <MKInput
                            type="password"
                            label="Password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </MKBox>
                      </MKBox>
                      <MKBox width="48%">
                        <MKBox mb={2}>
                          <MKInput
                            type="date"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                              children: "Custom Label",
                            }}
                            label="DOB"
                            value={DOB}
                            onChange={(e) => setDOB(e.target.value)}
                          />
                        </MKBox>
                        <MKBox mb={2} display="flex">
                          <MKInput
                            type="text"
                            label="City"
                            fullWidth
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                          <MKInput
                            style={{ marginLeft: 5 }}
                            type="text"
                            label="State"
                            fullWidth
                            value={statee}
                            onChange={(e) => setStatee(e.target.value)}
                          />
                        </MKBox>
                        <MKBox mb={2}>
                          <MKInput
                            type="text"
                            label="Pincode"
                            fullWidth
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                          />
                        </MKBox>
                        <MKBox mb={2}>
                          <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            multiline
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            rows={4}
                            placeholder="Enter your address here"
                          />
                        </MKBox>
                      </MKBox>
                    </MKBox>
                  </MKBox>
                  <MKBox mb={1} margin="auto" width="40%">
                    <MKButton
                      fullWidth
                      variant="gradient"
                      color="info"
                      onClick={() => handleRegister({ vertical: " bottom", horizontal: "center" })}
                    >
                      sign up
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
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Already have an account?
                      <Button textGradient onClick={() => handleToggle()}>
                        Sign in
                      </Button>
                      <Snackbar
                        zIndex={999}
                        autoHideDuration={3000}
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        key={vertical + horizontal}
                      >
                        <Alert
                          style={{ backgroundColor: "#f44335", color: "white" }}
                          severity={variant}
                        >
                          <b>{alertt}</b>
                        </Alert>
                      </Snackbar>
                    </MKTypography>
                  </MKBox>
                </Card>
              </Grid>
            </Grid>
          </MKBox>
        </Container>
      </MKBox>
    </>
  );
}

export default Signup;
