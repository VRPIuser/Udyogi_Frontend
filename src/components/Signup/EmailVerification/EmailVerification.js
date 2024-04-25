import CustomImage from "@/UI/Image/Image";
import { useEffect, useRef, useState } from "react";

const inputClass =
  "w-1/6 text-center form-input border-2 border-zinc-300 rounded p-2";
const buttonClass = "h-10 font-bold  rounded";

const EmailVerification = ({ onOTPVerify }) => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));
  const [otp, setOtp] = useState(Array(6).fill(""));

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleChange = (index, e) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    if (e.target.value !== "" && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyUp = (index, e) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerify = () => {
    // const otpValue = otp.join("");
    // console.log("OTP:", otpValue);

    onOTPVerify(otp.join(""));
  };

  return (
    <div className="flex items-center h-screen p-4 ">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow">
        <div className="flex justify-center mb-6">
          <CustomImage
            src="/assets/screenContainers/emailVerificationScreen.svg"
            alt="Email Icon"
            width={250}
            height={250}
          />
        </div>
        <h2 className="text-center text-2xl font-medium ">
          VERIFY YOUR EMAIL ADDRESS
        </h2>
        <div className="h-px bg-gray-500 m-4"></div>
        <p className="text-center mb-6">
          A verification code has been sent to your Email Address{" "}
          <span className="font-semibold">example@gmail.com</span>. Please check
          your inbox and enter the code below. The code expires in{" "}
          <span className="font-semibold">14mins:59sec</span>
        </p>

        <div className="flex justify-between space-x-2 mb-6">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              type="text"
              className={inputClass}
              maxLength="1"
              ref={ref}
              value={otp[index]}
              onChange={(e) => handleChange(index, e)}
              onKeyUp={(e) => handleKeyUp(index, e)}
            />
          ))}
        </div>

        <div className="flex gap-4 justify-center flex-col items-center">
          <button
            className={`${buttonClass} mb-0 w-52 bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 text-white mb-2 border-orange-500 border-2`}
            onClick={handleVerify}
          >
            Verify Now
          </button>
          <button
            className={`${buttonClass} mb-0 w-52 bg-white hover:bg-orange-500 hover:text-white text-orange-500 border-orange-500 border-2`}
          >
            Resend again
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
