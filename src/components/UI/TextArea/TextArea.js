import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomTextArea.module.css"; // Import the CSS Module

const CustomTextArea = React.forwardRef(
  (
    {
      placeholder,
      value,
      onChange,
      className,
      style,
      onBlur = () => {},
      onFocus = () => {},
      mandatory, // Add a prop to indicate if the input is mandatory
      name,
      colorTheme,
      rows = 3, // Number of visible text lines
    },
    ref
  ) => {
    // Combine the provided className with the CSS module className
    const combinedClassName = `${styles.textarea} ${className}`;

    // Add the mandatorySign class conditionally
    const textareaClasses = mandatory
      ? `${combinedClassName} ${styles.mandatorySign}`
      : combinedClassName;

    useEffect(() => {
      if (value && value.trim() === "") {
        setIsTouched(false);
      }
    }, [value]);

    const textareaRef = useRef();

    const [isTouched, setIsTouched] = useState(false);

    const handleTextareaFocus = () => {
      setIsTouched(true);
    };

    const handleTextareaBlur = () => {
      setIsTouched(false);
    };

    const handleLabelClick = () => {
      textareaRef.current.focus();
    };

    const textareaStyles = {
      ...style,
      borderColor: colorTheme,
    };

    const handleFocus = () => {
      onFocus();
      handleTextareaFocus();
    };

    const handleBlur = () => {
      onBlur();
      handleTextareaBlur();
    };

    return (
      <div style={{ position: "relative" }}>
        <textarea
          ref={textareaRef}
          className={textareaClasses}
          // placeholder={placeholder || ""}
          name={name}
          value={value}
          onChange={onChange}
          style={textareaStyles} // Don't wrap style in another object
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
        />
        <label
          className={` ${
            isTouched || value !== "" ? styles.transition : styles.placeholder
          } transition-all `}
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
CustomTextArea.displayName = "CustomTextArea";

export default CustomTextArea;
