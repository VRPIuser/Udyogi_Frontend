import CustomImage from "@/components/UI/Image/Image";
import formatDate from "@/hooks/formatDate";
import { InfoIcon } from "@/svgs/icons";
import { differenceInMonths, parseISO } from "date-fns";
import VerifiedStatusComponent from "./VerifiedStatusComponent";

// const ExperienceData = [
//   {
//     id: "001",
//     joinedDate: "2021-01-02",
//     endDate: "2022-06-06",
//     jobTitle: "Senior Business Correspondent",
//     location: "Delhi",
//     workMode: "remote",
//     verified: false,
//   },
//   {
//     id: "002",
//     joinedDate: "2019-06-20",
//     endDate: "2020-12-23",
//     jobTitle: "Business Correspondent",
//     location: "Delhi",
//     workMode: "remote",
//     verified: true,
//   },
//   {
//     id: "003",
//     joinedDate: "2017-01-02",
//     endDate: "2019-06-06",
//     jobTitle: "Junior Business Correspondent",
//     location: "Delhi",
//     workMode: "remote",
//     verified: true,
//   },
// ];

const getDuration = (start, end) => {
  const startDate = parseISO(start);
  const endDate = parseISO(end);
  const months = differenceInMonths(endDate, startDate);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mo${
    remainingMonths > 1 ? "s" : ""
  }`;
};

const UserExperienceCard = ({ ExperienceData }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md ">
      <h3 className="text-lg font-semibold mb-4">Experience</h3>
      {ExperienceData &&
        ExperienceData.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start mb-4"
          >
            <div className="flex justify-between w-full">
              <h4 className="text-md font-medium">{experience.jobTitle}</h4>
              <VerifiedStatusComponent verified={experience.verified} />
            </div>
            <p className="text-gray-500">
              {formatDate(experience.startDate).date} -{" "}
              {formatDate(experience.endDate).date} •{" "}
              {getDuration(experience.startDate, experience.endDate)}
            </p>
            <p className="text-gray-500">{experience.location}</p>
            {/* </div> */}
          </div>
        ))}
    </div>
  );
};

export default UserExperienceCard;
