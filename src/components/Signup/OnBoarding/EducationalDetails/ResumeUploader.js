import CustomFileUploader from "@/UI/FileUploader/FileUploader";
import CustomImage from "@/UI/Image/Image";

const ResumeUploader = ({ resumeInput }) => {
  return (
    <div className="my-8 bg-gray-300 p-4 rounded-lg">
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
