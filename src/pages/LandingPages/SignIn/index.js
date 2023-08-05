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

// import { Box } from "@mui/material";
import { useState } from "react";
import Signin from "./Signin";
import Signup from "../SignUp/Index";

// import { useState } from "react";

// react-router-dom components

// // @mui material components
// import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// // @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// // import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";

// // Material Kit 2 React example components
// // import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// // Material Kit 2 React page layout routes
// // import routes from "routes";
// import InUpToggle from "./SignInFeids";
// // Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignInBasic() {
  const [toggle, setToggle] = useState(true);
  // const [rememberMe, setRememberMe] = useState(false);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  if (toggle) {
    return <Signin handleToggle={handleToggle} toggle={toggle} />;
  } else {
    return <Signup handleToggle={handleToggle} toggle={toggle} />;
  }
}
export default SignInBasic;
