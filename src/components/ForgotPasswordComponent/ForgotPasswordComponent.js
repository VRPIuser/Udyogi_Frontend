import useInput from "@/hooks/use-Input";
import CustomImage from "../UI/Image/Image";
import InputWithInvalidText from "../UI/Input/InputWithInvalidText";
import { emailValidation } from "../InputValidations/InputValidations";
import LoadingButton from "../UI/LoadingButton/LoadingButton";
import { useEffect, useState } from "react";

const ForgotPasswordComponent = ({ onSubmittingEmail }) => {
  const emailInput = useInput({ validateValue: emailValidation });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(emailInput.isValid);
  }, [emailInput.isValid]);

  const SubmitHandler = () => {
    onSubmittingEmail(emailInput.value);
  };

  return (
    <div className="flex flex-col gap-6 max-w-xl m-4">
      <CustomImage
        src={`/assets/screenContainers/ForgotPasswordScreen.svg`}
        alt=""
        width="500"
        height="500"
        classForDiv="h-auto"
        className="m-auto"
      />
      <h2 className="text-4xl font-semibold text-center mb-6">
        Forgot Password?
      </h2>
      <p className="text-base text-zinc-600 text-center mb-6">
        Please enter your Registered Email address where you receive a
        confirmation code to set Password
      </p>
      <div className="flex flex-col gap-6 w-3/4 m-auto">
        <InputWithInvalidText
          placeholder={"Enter Your Email Address"}
          type={"email"}
          inputFields={emailInput}
          ErrorMessage={"Invalid Email"}
        />

        <LoadingButton
          className={
            formIsValid ? "bg-orange-500 text-white w-full" : `bg-gray-100`
          }
          disabled={!formIsValid}
          // style={{ backgroundColor: !formIsValid && "#ccc" }}
          text={"Get OTP"}
          loaderColor="white"
          isLoading={false}
          onClick={SubmitHandler}
        />
      </div>
    </div>
  );
};
export default ForgotPasswordComponent;
