import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Image.module.css";
import { CircularProgress } from "@material-ui/core";
import Image from "next/image";
const CustomImage = ({
  src,
  alt,
  className,
  title,
  style,
  onClick,
  classForDiv,
  onMouseLeave,
  onMouseEnter,
  width,
  height,
  divStyles,
  divClick,
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div
      className={`${styles.customImageWrapper} ${classForDiv}`}
      style={divStyles}
      onClick={divClick}
    >
      {loading && (
        // <GhostLoading count={1} />
        <div className={styles.loadingState}>
          <CircularProgress
            style={{
              width: "inherit",
              height: "inherit",
              objectFit: "contain",
            }}
          />
        </div>
      )}
      {/* {!loading && ( */}
      <Image
        src={src}
        alt={alt}
        className={`custom-image  ${className} ${loading ? "loading" : ""}`}
        onLoad={handleImageLoad}
        style={style}
        onClick={onClick}
        title={title}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        width={width ? width : "100"}
        height={height ? height : "100"}
      />
      {/* )} */}
    </div>
  );
};

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loadingComponent: PropTypes.element,
};

CustomImage.defaultProps = {
  className: "",
  loadingComponent: <div>Loading...</div>,
};

export default CustomImage;
