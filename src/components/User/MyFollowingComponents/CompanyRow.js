import CustomImage from "@/components/UI/Image/Image";
import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";
import formatDate from "@/hooks/formatDate";
import { useState } from "react";
const TABLE_CELL_CLASS = "relative py-2 px-3 bg-white";
const TABLE_ROW_CLASS = "bg-white border-b";

const CompanyRow = ({ company }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleUnfollow = () => {
    // Logic for unfollowing the company
    console.log("Unfollow company:", company.name);
    setIsPopoverOpen(false);
  };

  const handleOptionClick = (option) => {
    // Handle other options
    console.log("Selected option:", option);
    // Close popover after selecting an option
    setIsPopoverOpen(false);
  };

  const options = [
    {
      label: "Unfollow",
      onClick: handleUnfollow,
    },
    {
      label: "Options-1",
      onClick: handleOptionClick,
    },
    {
      label: "Options-2",
      onClick: handleOptionClick,
    },
  ];

  return (
    <tr className={TABLE_ROW_CLASS}>
      <td className={TABLE_CELL_CLASS}>
        <div className="flex items-center">
          <div className="bg-white w-8 h-8 rounded-full border flex justify-center items-center mr-2">
            <span className="text-orange-500 text-xl">{company?.name[0]}</span>
          </div>
          <div>
            <span className="text-md font-medium text-green-800">
              {company?.name}
            </span>

            <div className=" flex gap-2">
              <span className=" text-zinc-500 text-sm font-medium px-0 py-1 rounded-full flex w-fit gap-2 items-center">
                <CustomImage
                  src={`/assets/icons/location_b.png`}
                  alt=""
                  width={20}
                  height={20}
                  className="min-w-4 min-h-4 w-4 h-4"
                  classForDiv="inline"
                />
                {company?.location}
              </span>
              <span className=" text-zinc-500 text-sm font-medium px-0 py-1 rounded-full flex w-fit gap-2 items-center">
                <CustomImage
                  src={`/assets/icons/quantity_bl.png`}
                  alt=""
                  width={20}
                  height={20}
                  className="min-w-4 min-h-4 w-4 h-4"
                  classForDiv="inline"
                />
                {company?.companySize.lowerLimit +
                  " - " +
                  company?.companySize.upperLimit}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className={TABLE_CELL_CLASS}>
        {formatDate(company?.foundedIn).date}
      </td>
      <td className={`${TABLE_CELL_CLASS} text-right relative`}>
        <button
          className={`text-zinc-400 w-6 h-6 flex items-center justify-center pb-5 text-2xl hover:text-zinc-500 ${hoverBgClasses}`}
          onClick={togglePopover}
        >
          ...
        </button>
        {isPopoverOpen && (
          <div className="absolute top-0 right-full mt-1 w-24 text-center  rounded-lg bg-white shadow z-10">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => option.onClick()}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </td>
    </tr>
  );
};
export default CompanyRow;
