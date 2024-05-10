import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";

const { default: CustomImage } = require("@/components/UI/Image/Image");

const EducationSectionHead = ({
  index,
  handleToggleExpand,
  education,
  handleRemoveEducation,
}) => {
  return (
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
  );
};

export default EducationSectionHead;
