import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaComp = () => {
  const secretKey = "6Ld5t7IoAAAAALfL7zeBEa0gUv4luMJ-dsQEj9ve";
  const [value, setValue] = useState("");
  function onChange(value) {
    console.log("Captcha value:", value);
    setValue(value);
  }

  return (
    <div>
      <ReCAPTCHA sitekey={secretKey} onChange={onChange} />
    </div>
  );
};

export default ReCaptchaComp;
