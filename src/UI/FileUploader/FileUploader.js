import React, { useRef, useState } from "react";
import style from "./FileUploader.module.css"; // Assuming you have a CSS module for styling
import CustomImage from "../Image/Image";
import HideExtraText from "../HideExtraText/HideExtraText";

const CustomFileUploader = ({
  onChange,
  buttonText,
  acceptedFileType,
  mandatory,
}) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
    setDragOver(false);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && acceptedFileType.includes(file.type) && file.size <= 5242880) {
      // 5MB limit (5 * 1024 * 1024)
      onChange(file);
      setFileName(file.name);
      setFileSize(file.size);
    } else {
      // Handle invalid file
    }
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  return (
    <div
      className={`${style.inputContainer}  ${
        dragOver ? "bg-gray-200" : ""
      } p-4 border-2 border-dashed border-black rounded-lg text-center mb-2 cursor-pointer w-44`}
      style={{
        width: "100%",
        height: "200px",
        borderStyle: "dashed",
        borderColor: "black",
      }}
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleButtonClick}
    >
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept={acceptedFileType.join(",")}
      />
      <div
        className={`${
          dragOver
            ? "flex flex-col justify-center items-center content-center h-full"
            : "hidden"
        }`}
      >
        <>
          <span className="">{"Drag and Drop the file here"}</span>
          <p className="text-xs text-zinc-500">
            File can be PDF, DOC; of size 5MB
          </p>
        </>
      </div>
      <div
        className={`flex flex-col justify-center items-center content-center h-full ${
          dragOver ? " hidden" : "flex"
        }`}
      >
        <CustomImage
          src={`/assets/icons/${
            fileName ? "fileReplaceIcon.png" : "fileUploaderIcon.png"
          }`}
          alt=""
          width={80}
          // className=""
          classForDiv={style.imageContainer}
        />
        {fileName ? (
          <>
            <HideExtraText lines={1} className="">
              {fileName} {fileSize && ` (${(fileSize / 1024).toFixed(2)} KB)`}
            </HideExtraText>
            <p className="text-xs text-zinc-500">
              File can be PDF, DOC; of size 5MB
            </p>
          </>
        ) : (
          <>
            <span className="text-xl font-semibold text-black ">
              {buttonText}
            </span>
            <p className="text-xs ">{"Drag and Drop the file"}</p>
            <p className="text-xs text-zinc-500">
              File can be PDF, DOC; of size 5MB
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomFileUploader;
