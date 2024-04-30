import CustomFileUploader from "@/components/UI/FileUploader/FileUploader";
import CustomImage from "@/components/UI/Image/Image";
import { BorderContainerClasses } from "@/components/tailwindClasses/ContainerClasses";

const ResumeUploader = ({ resumeInput }) => {
  return (
    <div className={`my-8 bg-white ${BorderContainerClasses}`}>
      <h2 className="text-lg font-semibold mb-4">Upload Your Resume</h2>

      <CustomFileUploader
        onChange={resumeInput.AssignValue}
        acceptedFileType={[
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.oasis.opendocument.text",
          "application/octet-stream",
        ]}
        buttonText={"Upload your Resume"}
      />
    </div>
  );
};

export default ResumeUploader;
