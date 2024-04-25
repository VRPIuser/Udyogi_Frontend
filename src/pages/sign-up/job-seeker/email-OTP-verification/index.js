import CustomImage from "@/UI/Image/Image";
import EmailVerification from "@/components/Signup/EmailVerification/EmailVerification";
import EmailVerified from "@/components/Signup/EmailVerified/EmailVerified";
import React, { useRef, useEffect, useState } from "react";

const EmailVerificationPage = () => {
  const [otpVerified, setOtpVerified] = useState(false);
  const GetOTP = (otp) => {
    console.log("OTP:", otp);

    if (otp !== undefined && otp !== null && otp !== "") {
      setOtpVerified(true);
    }
  };

  return (
    <>
      {otpVerified ? (
        <EmailVerified />
      ) : (
        <EmailVerification onOTPVerify={GetOTP} />
      )}
    </>
  );
};

export default EmailVerificationPage;
