import { useState } from "react";
import Signin from "./Signin";
import Signup from "../SignUp/Index";

function SignInBasic() {
  const [toggle, setToggle] = useState(true);
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
