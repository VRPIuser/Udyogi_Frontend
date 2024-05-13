import React, { useEffect, useState } from "react";
import InputWithInvalidText from "../UI/Input/InputWithInvalidText";
import useInput from "@/hooks/use-Input";
import {
  confirmPasswordValidation,
  passwordValidation,
} from "../InputValidations/InputValidations";
import { colorTheme } from "../../../constants";
import Button from "../UI/Button/Button";

const SettingsComponent = () => {
  const currentPasswordInput = useInput({ validateValue: passwordValidation });
  const newPasswordInput = useInput({ validateValue: passwordValidation });
  const confirmNewPasswordInput = useInput({
    validateValue: (value) =>
      confirmPasswordValidation(value, newPasswordInput.value),
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      currentPasswordInput.isValid &&
        newPasswordInput.isValid &&
        confirmNewPasswordInput.isValid
    );
  }, [
    currentPasswordInput.isValid,
    newPasswordInput.isValid,
    confirmNewPasswordInput.isValid,
  ]);

  const handleSubmit = () => {
    console.log(currentPasswordInput.value);
    console.log(newPasswordInput.value);
    console.log(confirmNewPasswordInput.value);
  };

  return (
    <div className="max-w-lg mx-auto sm:p-6 p-3">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="mb-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <div className=" flex gap-1 flex-col mb-4 sm:p-4 p-0">
          <InputWithInvalidText
            type="password"
            id="current-password"
            name="current-password"
            placeholder="Enter Current password"
            inputFields={currentPasswordInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"not a valid Password"}
          />
          <InputWithInvalidText
            type="password"
            id="new-password"
            name="new-password"
            placeholder="Enter new password"
            inputFields={newPasswordInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"not a valid Password"}
          />
          <InputWithInvalidText
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Enter confirm password"
            inputFields={confirmNewPasswordInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"Password did not match"}
          />
          <Button
            onClick={handleSubmit}
            disabled={!formIsValid}
            className="mt-2"
          >
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
