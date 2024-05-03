import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";
import Image from "next/image";
import CustomImage from "../Image/Image";

const Dropdown = ({
  options,
  onSelect,
  onDeselect, // Add onDeselect prop
  placeholder,
  className,
  style,
  mandatory,
  inputStyles,
  optionStyles,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (onDeselect) {
      handleDeselect();
    }
  }, [onDeselect]);

  // Function to handle deselection
  const handleDeselect = () => {
    setSelectedOption(null);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.customDropdown} ${className}`} style={style}>
      <div
        className={styles.selectedOption}
        onClick={toggleDropdown}
        style={inputStyles}
      >
        <span
          className={`${
            selectedOption ? styles.transition : styles.placeholder
          }`}
        >
          {placeholder}
          <span style={{ color: "red" }}>&nbsp;{mandatory && "*"}</span>
        </span>
        {(selectedOption && selectedOption.label) || selectedOption}

        <CustomImage
          src={`/assets/icons/${
            isOpen ? "arrowUpPrimary.png" : "arrowDownPrimary.png"
          }`}
          className={`${styles.arrow} `}
          classForDiv={`${styles.arrowContainer} `}
          alt=""
        />
      </div>

      {options && options.length > 0 && (
        <ul
          className={`${styles.options} ${isOpen && styles.optionsActive}`}
          style={optionStyles}
        >
          {options.map((option) => (
            <li
              key={option.value || option}
              onClick={() => handleOptionClick(option)}
            >
              {option.label || option}
            </li>
          ))}
          {selectedOption && ( // Render deselect option if an option is selected
            <li onClick={handleDeselect}>Clear Selection</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
