import React, { useRef, useState } from "react";
import style from "./FileUploader.module.css";
import CustomImage from "../Image/Image";
import HideExtraText from "../HideExtraText/HideExtraText";
import LoadingBar from "../loadingBar/loadingBar";

const ContainerClasses =
  "border-2 border-dashed border-black rounded-lg text-center mb-2 cursor-pointer w-44 relative z-10 overflow-hidden";

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
  const [isLoading, setIsLoading] = useState(false); // New loading state

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
      }, 2000); // Simulated delay of 2 seconds
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
    <div style={{ position: "relative" }}>
      <div
        className={`${ContainerClasses} ${style.container} h-52`}
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
      </div>
      <div
        className={`${
          dragOver
            ? "flex flex-col justify-center items-center content-center h-52 w-full bg-zinc-100"
            : "hidden"
        } ${style.box}`}
      >
        <>
          <span className="">{"Drag and Drop the file here"}</span>
          <p className="text-xs text-zinc-500">
            File can be PDF, DOC; of size 5MB
          </p>
        </>
      </div>
      <div
        className={`flex flex-col justify-center items-center content-center w-full p-4 h-52 ${
          dragOver ? " hidden" : "flex"
        } ${style.box}`}
      >
        {isLoading ? (
          <LoadingBar />
        ) : (
          <>
            <CustomImage
              src={`/assets/icons/${
                fileName ? "fileReplaceIcon.png" : "fileUploaderIcon.png"
              }`}
              alt=""
              width={80}
              classForDiv={style.imageContainer}
            />
            {fileName ? (
              <HideExtraText lines={1} className="">
                {fileName} {fileSize && ` (${(fileSize / 1024).toFixed(2)} KB)`}
              </HideExtraText>
            ) : (
              <DefaultText buttonText={buttonText} />
            )}
          </>
        )}
      </div>
      <p className="text-xs text-zinc-500">File can be PDF, DOC; of size 5MB</p>
    </div>
  );
};

export default CustomFileUploader;

const DefaultText = ({ buttonText }) => {
  return (
    <>
      <HideExtraText
        lines={1}
        className="text-xl font-semibold text-black text-center"
      >
        {buttonText}
      </HideExtraText>
      <p className="text-xs ">Drag and Drop the file</p>
    </>
  );
};
