import formatDate from "@/hooks/formatDate";
import VerifiedStatusComponent from "./VerifiedStatusComponent";

const UserEducationCard = ({ EducationDetails }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Education</h3>
      {EducationDetails.map((education, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-start mb-4"
        >
          <div className="flex justify-between w-full">
            <h4 className="text-md font-medium">{education.collegeName}</h4>
            <VerifiedStatusComponent verified={education.verified} />
          </div>
          <p className="text-gray-500">{education.degree}</p>
          <p className="text-gray-500">
            {formatDate(education.startDate).year} -{" "}
            {formatDate(education.endDate).year}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserEducationCard;
