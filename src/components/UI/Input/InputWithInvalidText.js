import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./Input";
import style from "./CustomInput.module.css";
import Image from "next/image";
import CustomImage from "../Image/Image";
const InputWithInvalidText = ({
  ErrorMessage,
  inputFields,
  className,
  mandatory,
  type,
  placeholder,
}) => {
  const inputRef = useRef(null);

  const [checkPassword, setCheckPassword] = useState(false);

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (inputFields.value) {
      inputFields.focusHandler();
    }
  });

  return (
    <div className={`${style.InputContainer}  ${className}`}>
      <CustomInput
        ref={inputRef}
        className={`${style.checkoutFormControl} ${
          inputFields.hasError && style.invalid
        }`}
        placeholder={placeholder}
        value={inputFields.value}
        onFocus={inputFields.focusHandler}
        onBlur={inputFields.validateValueHandler}
        onChange={inputFields.valueChangeHandler}
        type={`${type === "password" && checkPassword ? "text" : type}`}
      />
      {type === "password" && (
        <CustomImage
          src={`/assets/icons/${
            checkPassword ? "showPassword.png" : "hidePassword.png"
          }`}
          alt=""
          className={style.checkPassword}
          classForDiv={style.checkPasswordContainer}
          onClick={() => setCheckPassword(!checkPassword)}
        />
      )}
      <label
        className={` ${
          inputFields.isFocused || inputFields.value !== ""
            ? style.transition
            : style.placeholder
        }`}
        onClick={handleLabelClick}
      >
        {placeholder}{" "}
        {mandatory && <span style={{ color: "red" }}>&nbsp;*</span>}
      </label>
      {
        <p
          className={style.invalidText}
          style={{
            opacity: inputFields.hasError ? "1" : "0",
          }}
        >
          {ErrorMessage}
        </p>
      }
    </div>
  );
};

export default InputWithInvalidText;
