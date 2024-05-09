import CustomFileUploader from "@/components/UI/FileUploader/FileUploader";
import CustomImage from "@/components/UI/Image/Image";
import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";
import UserData from "@/data/user";
import formatDate from "@/hooks/formatDate";

const ProfileDocs = ({ resumeInput, profilePhotoInput }) => {
  return (
    <div className="flex gap-6 mt-4 sm:flex-row sm:items-start flex-col items-center">
      <div className="w-full max-w-56 flex flex-col gap-2">
        <label className="">Upload your photo</label>
        <CustomFileUploader
          onChange={profilePhotoInput.AssignValue}
          acceptedFileType={["image/jpeg", "image/png"]}
          buttonText={"Upload Image"}
          className="bg-white rounded-lg"
          borderColor={"#ccc"}
          height="min-h-56"
        />
      </div>
      <div className="w-full flex flex-col gap-2 ">
        <label>Upload your CV</label>
        <div className="bg-zinc-100 p-4 rounded-md ">
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col pb-2">
              <span className="font-semibold">{UserData?.resume.fileName}</span>
              <span className="text-xs text-zinc-500">
                {formatDate(UserData?.resume.updatedOn)}
              </span>
            </div>

            <div className={`flex gap-2 `}>
              <CustomImage
                src={`/assets/icons/download.png`}
                alt="Upload icon"
                width={20}
                height={20}
                classForDiv={"flex justify-center items-center"}
                className={`${hoverBgClasses} min-w-6 min-h-6`}
              />
              <CustomImage
                src={`/assets/icons/delete.png`}
                alt="Upload icon"
                width={20}
                height={20}
                classForDiv={"flex justify-center items-center"}
                className={`${hoverBgClasses} min-w-6 min-h-6`}
              />
            </div>
          </div>

          <CustomFileUploader
            onChange={resumeInput.AssignValue}
            acceptedFileType={[
              "application/pdf",
              "application/msword",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              "application/vnd.oasis.opendocument.text",
              "application/octet-stream",
            ]}
            buttonText={"Update Resume"}
            className="bg-white rounded-lg"
            borderColor={"#ccc"}
            height="min-h-36"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDocs;
