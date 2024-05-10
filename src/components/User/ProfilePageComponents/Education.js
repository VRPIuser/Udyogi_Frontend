import Button from "@/components/UI/Button/Button";
import CustomDatePicker from "@/components/UI/DatePIcker/DatePIcker";
import CustomImage from "@/components/UI/Image/Image";
import CustomInput from "@/components/UI/Input/Input";
import RightSlideAnimation from "@/components/animations/RightSlideAnimation";
import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";
import UserData from "@/data/user";
import React, { useState } from "react";

const Education = () => {
  const higherEducation = UserData?.educationDetails.find(
    (degree) => degree.latestDegree
  );
  const [educationDetails, setEducationDetails] = useState([
    {
      id: 1,
      degree: higherEducation.degree,
      collegeName: higherEducation.collegeName,
      specializedIn: higherEducation.specializedIn,
      from: higherEducation.startDate,
      to: higherEducation.endDate,
      expanded: false, // Track whether each education detail is expanded
    },
  ]);

  const handleAddEducation = () => {
    const newEducation = {
      id: educationDetails.length + 1,
      degree: "",
      collegeName: "",
      specializedIn: "",
      from: "",
      to: "",
      expanded: false, // Initialize as collapsed
    };
    setEducationDetails([...educationDetails, newEducation]);
  };

  const handleInputChange = (index, value, name) => {
    const updatedEducationDetails = educationDetails.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleToggleExpand = (index) => {
    const updatedEducationDetails = educationDetails.map((education, i) =>
      i === index ? { ...education, expanded: !education.expanded } : education
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleRemoveEducation = (id) => {
    const updatedEducationDetails = educationDetails.filter(
      (education) => education.id !== id
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleSubmit = () => {
    console.log(educationDetails);
  };

  const line = "flex gap-4 mb-4 px-4";
  const inputContainer = "w-full flex flex-col gap-2";
  const inputLabel = "font-semibold";

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      {educationDetails.map((education, index) => (
        <div key={education.id} className="">
          <div className="flex gap-4 justify-between items-center mb-4 ">
            <div
              style={{ width: "calc(100% )" }}
              className="pl-4 p-2 border border-gray-100 rounded-md shadow-md shadow-gray-100 flex justify-between items-center hover:bg-zinc-50 transition-all cursor-pointer"
              onClick={() => handleToggleExpand(index)} // Toggle expand/collapse on click
            >
              <h3>Education{" " + Number(index + 1)}</h3>
              <CustomImage
                src="/assets/icons/arrowDown.png"
                alt=""
                width={10}
                height={10}
                style={{
                  transform: education.expanded ? "rotate(180deg)" : "",
                }} // Rotate arrow icon based on expanded state
              />
            </div>
            {index !== 0 && (
              <CustomImage
                src="/assets/icons/delete.png"
                alt=""
                width={25}
                height={25}
                className={hoverBgClasses}
                onClick={() => handleRemoveEducation(education.id)} // Corrected line
              />
            )}
          </div>

          {education.expanded && ( // Render education detail content only if expanded is true
            <>
              <div className={`${line}`}>
                <div className={`${inputContainer}`}>
                  <label className={`${inputLabel}`}>Degree</label>
                  <CustomInput
                    type="text"
                    name="degree"
                    placeholder="Eg. B.Tech"
                    value={education.degree}
                    onChange={(e) =>
                      handleInputChange(index, e.target.value, "degree")
                    }
                    style={{ borderColor: "#00000021" }}
                  />
                </div>
              </div>
              <div className={`${line}`}>
                <div className={`${inputContainer}`}>
                  <label className={`${inputLabel}`}>Institute Name</label>
                  <CustomInput
                    type="text"
                    name="collegeName"
                    placeholder="Eg. Harvard University"
                    value={education.collegeName}
                    onChange={(e) =>
                      handleInputChange(index, e.target.value, "collegeName")
                    }
                    style={{ borderColor: "#00000021" }}
                  />
                </div>

                <div className={`${inputContainer}`}>
                  <label className={`${inputLabel}`}>SpecializedIn in</label>
                  <CustomInput
                    type="text"
                    name="specializedIn"
                    placeholder="Eg. Mechanical Engineering"
                    value={education.specializedIn}
                    onChange={(e) =>
                      handleInputChange(index, e.target.value, "specializedIn")
                    }
                    style={{ borderColor: "#00000021" }}
                  />
                </div>
              </div>

              <div className={`${line}`}>
                <div className={`${inputContainer}`}>
                  <label className={`${inputLabel}`}>From</label>
                  <CustomDatePicker
                    name="from"
                    placeholderText="Eg. 20017-06-02"
                    selectedDate={education.from}
                    onChange={(value) =>
                      handleInputChange(index, value, "from")
                    }
                    divStyles={{ borderColor: "#00000021" }}
                    formatSpanStyles={{
                      backgroundColor: "#00000021",
                      borderColor: "#00000021",
                    }}
                  />
                </div>
                <div className={`${inputContainer}`}>
                  <label className={`${inputLabel}`}>To</label>
                  <CustomDatePicker
                    name="to"
                    placeholderText="Eg. 2021-04-02"
                    selectedDate={education.to}
                    onChange={(value) => handleInputChange(index, value, "to")}
                    divStyles={{ borderColor: "#00000021" }}
                    formatSpanStyles={{
                      backgroundColor: "#00000021",
                      borderColor: "#00000021",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      <button
        onClick={handleAddEducation}
        className="flex gap-2 hover:hue-rotate-180 transition-all justify-end"
      >
        <CustomImage
          src="/assets/icons/plus.png"
          alt=""
          width={25}
          height={25}
        />
        <span className="text-orange-500">Add Education</span>
      </button>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Education;
