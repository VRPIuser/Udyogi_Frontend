import Button from "@/components/UI/Button/Button";
import { optionClasses } from "@/components/tailwindClasses/ButtonClassess";
import { BorderContainerClasses } from "@/components/tailwindClasses/ContainerClasses";
import { useState } from "react";

const SelectDegree = ({ setEducationDetailsFilled }) => {
  const educationOptions = [
    "MCA",
    "M.Sc",
    "B.A",
    "B.Sc",
    "B.Com",
    "B.Ed",
    "B.Tech/ B.E.",
    "M.Tech",
    "MBA/ PGDM",
  ];

  const sharedClasses = {
    container: "max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg",
    button: " rounded-xl w-fit px-6 py-2 text-sm transition-all",
    link: "text-sm text-orange-500 hover:text-orange-700",
    continueButton: "w-full bg-orange-500 text-white mt-4 py-2 rounded",
  };

  const [selectedEducation, setSelectedEducation] = useState(0);

  const SubmitHandler = () => {
    setEducationDetailsFilled(educationOptions[selectedEducation]);
  };

  return (
    <div
      className={`max-w-xl w-full mx-auto my-auto bg-white ${BorderContainerClasses}`}
    >
      <h2 className="text-lg font-semibold mb-4">
        Select your Highest Education
      </h2>
      <div className="flex flex-wrap gap-2 mb-4 mx-auto w-fit ">
        {educationOptions.map((option, index) => (
          <button
            key={index}
            className={`${optionClasses} ${
              selectedEducation === index
                ? "bg-orange-500 text-white"
                : "bg-zinc-50"
            }`}
            onClick={() => {
              setSelectedEducation(index);
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="my-4 mx-auto w-fit ">
        <a href="#" className={sharedClasses.link}>
          View More details
        </a>
      </div>
      <Button
        className={`${sharedClasses.continueButton} max-w-56 block mx-auto`}
        onClick={SubmitHandler}
      >
        Continue
      </Button>
    </div>
  );
};

export default SelectDegree;
