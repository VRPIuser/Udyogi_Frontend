import React, { useRef, useState } from "react";
import style from "./FileUploader.module.css";
import CustomImage from "../Image/Image";
import HideExtraText from "../HideExtraText/HideExtraText";
import LoadingBar from "../loadingBar/loadingBar";

const ContainerClasses =
  "border border-dashed rounded-lg text-center cursor-pointer w-full relative z-10 overflow-hidden";

const CustomFileUploader = ({
  onChange,
  buttonText,
  acceptedFileType,
  mandatory,
  className,
  borderColor,
  height,
}) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadingTime = 1;

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
    setIsLoading(true); // Set loading state to true when file upload starts
    if (file && acceptedFileType.includes(file.type) && file.size <= 5242880) {
      // Simulating delay for demonstration purposes (remove in actual implementation)
      setTimeout(() => {
        onChange(file);
        setFileName(file.name);
        setFileSize(file.size);
        setIsLoading(false); // Set loading state to false when file upload completes
      }, loadingTime * 1000); // Simulated delay of 2 seconds
    } else {
      setIsLoading(false); // Set loading state to false if file is invalid
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
      style={{ position: "relative", width: "100%" }}
      className={`${height} ${className}`}
    >
      <div
        className={`${ContainerClasses} ${style.container} ${height}`}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleButtonClick}
        style={{ borderColor: borderColor || "#ff6501" }}
      >
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept={acceptedFileType.join(",")}
        />
      </div>

      <DragComponent height={height} dragOver={dragOver} />
      <ContentComponent
        height={height}
        dragOver={dragOver}
        fileName={fileName}
        isLoading={isLoading}
        buttonText={buttonText}
        fileSize={fileSize}
        loadingTime={loadingTime}
      />
    </div>
  );
};

export default CustomFileUploader;

const ContentComponent = ({
  height,
  fileName,
  dragOver,
  isLoading,
  buttonText,
  fileSize,
  loadingTime,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center content-center w-full p-4 ${height} ${
        dragOver ? " hidden" : "flex"
      } ${style.box}`}
    >
      {isLoading ? (
        <LoadingBar loadingTime={loadingTime} />
      ) : (
        <>
          <CustomImage
            src={`/assets/icons/${
              fileName ? "fileReplaceIcon.png" : "fileUploaderIcon.png"
            }`}
            alt=""
            width={60}
            height={60}
            classForDiv={style.imageContainer}
          />
          {fileName ? (
            <HideExtraText lines={2} className="">
              {fileName} {fileSize && ` (${(fileSize / 1024).toFixed(2)} KB)`}
            </HideExtraText>
          ) : (
            <DefaultText buttonText={buttonText} />
          )}
        </>
      )}
    </div>
  );
};

const DragComponent = ({ height, dragOver }) => {
  return (
    <div
      className={`${
        dragOver
          ? "flex flex-col justify-center items-center content-center w-full bg-zinc-100 "
          : "hidden"
      } ${style.box} ${height}`}
    >
      <>
        <span className="sm:text-base text-sm">
          {"Drag and Drop the file here"}
        </span>
        <p className="text-xs text-zinc-500">
          File can be PDF, DOC; of size 5MB
        </p>
      </>
    </div>
  );
};

const DefaultText = ({ buttonText }) => {
  return (
    <>
      <p lines={1} className="sm:text-xl font-semibold text-black text-center">
        {buttonText}
      </p>
      <p className="text-xs ">Drag and Drop the file</p>
    </>
  );
};
