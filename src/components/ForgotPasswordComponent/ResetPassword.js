import useInput from "@/hooks/use-Input";
import CustomImage from "../UI/Image/Image";
import InputWithInvalidText from "../UI/Input/InputWithInvalidText";
import {
  confirmPasswordValidation,
  passwordValidation,
} from "../InputValidations/InputValidations";
import Button from "../UI/Button/Button";
import LoadingButton from "../UI/LoadingButton/LoadingButton";
import { useEffect, useState } from "react";

const ResetPassword = ({ onSubmittingPassword }) => {
  const passwordInput = useInput({ validateValue: passwordValidation });
  const confirmPasswordInput = useInput({
    validateValue: (value) =>
      confirmPasswordValidation(value, passwordInput.value),
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(passwordInput.isValid && confirmPasswordInput.isValid);
  }, [passwordInput.isValid, confirmPasswordInput.isValid]);

  const SubmitHandler = () => {
    onSubmittingPassword(passwordInput.value);
  };

  return (
    <div class="max-w-lg mx-auto p-8 bg-white rounded-lg">
      {/* <div class="max-w-lg mx-auto p-8 bg-white rounded-lg"> */}
      <div class="mb-4">
        <CustomImage
          src={`/assets/screenContainers/ResetPasswordScreen.svg`}
          alt=""
          width="500"
          height="500"
          classForDiv="h-auto"
          className="m-auto"
        />
      </div>
      <h2 class="text-4xl font-semibold text-center mb-6">
        Reset your Password
      </h2>
      <p class="text-zinc-600 text-center mb-8">
        Please enter your Registered Email address where you receive a
        confirmation code to set Password
      </p>
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        placeholder="Password"
        inputFields={passwordInput}
        type="password"
      />

      <InputWithInvalidText
        ErrorMessage={"Invalid Confirm Password"}
        placeholder="Confirm Password"
        inputFields={confirmPasswordInput}
        type="password"
      />
      <LoadingButton
        className={
          formIsValid ? "bg-orange-500 text-white w-full" : `bg-gray-100`
        }
        disabled={!formIsValid}
        // style={{ backgroundColor: !formIsValid && "#ccc" }}
        text={"Check Now"}
        loaderColor="white"
        isLoading={false}
        onClick={SubmitHandler}
      />
    </div>
  );
};

export default ResetPassword;
