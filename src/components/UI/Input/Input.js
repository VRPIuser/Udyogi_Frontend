import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomInput.module.css"; // Import the CSS Module

const CustomInput = React.forwardRef(
  (
    {
      placeholder,
      value,
      onChange,
      type = "text",
      className,
      style,
      onBlur,
      onFocus,
      mandatory, // Add a prop to indicate if the input is mandatory
      name,
      colorTheme,
    },
    ref
  ) => {
    // Combine the provided className with the CSS module className
    const combinedClassName = `${styles.input} ${className}`;

    // Add the mandatorySign class conditionally
    const inputClasses = mandatory
      ? `${combinedClassName} ${styles.mandatorySign}`
      : combinedClassName;

    useEffect(() => {
      if (value && value.trim() === "") {
        setIsTouched(false);
      }
    }, [value]);

    const inputRef = useRef();

    const [isTouched, setIsTouched] = useState(false);

    const handleInputFocus = () => {
      setIsTouched(true);
    };

    const handleInputBlur = () => {
      setIsTouched(false);
    };

    const handleLabelClick = () => {
      inputRef.current.focus();
    };

    const InputStyles = {
      ...style,
      borderColor: colorTheme,
    };

    return (
      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          className={inputClasses}
          type={type}
          // placeholder={placeholder || ""}
          name={name}
          value={value}
          onChange={onChange}
          style={InputStyles} // Don't wrap style in another object
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <label
          className={` ${
            isTouched || value !== "" ? styles.transition : styles.placeholder
          }`}
          onClick={handleLabelClick}
        >
          {placeholder}{" "}
          {mandatory && <span style={{ color: "red" }}>&nbsp;*</span>}
        </label>
      </div>
    );
  }
);

// Set the display name for the component
CustomInput.displayName = "CustomInput";

export default CustomInput;
