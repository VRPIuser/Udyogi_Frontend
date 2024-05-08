import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomImage from "../UI/Image/Image";

const sharedClasses = {
  button: "bg-orange-500 text-white w-full py-2 rounded-lg",
  border: "border-zinc-200 mt-4 pt-4",
  flexItems: "flex items-center space-x-2 pb-2",
  companyLogo: "bg-orange-100 p-2 rounded-full",
  companyProfile: "text-orange-500 font-medium text-sm",
  overview: "py-4",
  categories: "py-2",
  visitLink: "text-blue-500 text-sm flex items-center space-x-1",
  sendMessage:
    "border w-full py-2 rounded-3xl mt-4 flex items-center justify-center space-x-2",
  flexCenter: "flex justify-center space-x-2 mt-4",
};

const CompanyInfo = ({ company }) => {
  const router = useRouter();

  const [showQuestions, setShowQuestions] = useState(false);

  useEffect(() => {
    console.log(showQuestions);
  });

  return (
    <div className="w-full lg:max-w-sm h-fit max-w-3xl">
      <div className="bg-white rounded-lg shadow-lg p-4 ">
        <div className=" text-2xl font-semibold py-2 text-center">
          Information
        </div>

        <div className={sharedClasses.categories}>
          <div className="font-semibold pb-1">Categories</div>
          <div className="flex gap-4">
            {company.categories.map((category, index) => (
              <span key={index} className="font-semibold pb-1 text-orange-500">
                {category}
              </span>
            ))}
          </div>
          <div className="font-semibold pb-1">Company size</div>
          <div className="text-sm text-zinc-600 pb-2">
            {company.companySize.lowerLimit +
              " - " +
              company.companySize.upperLimit}
          </div>
          <div className="font-semibold pb-1">Founded in</div>
          <div className="text-sm text-zinc-600 pb-2">{company.foundedIn}</div>
          <div className="font-semibold pb-1">Location</div>
          <div className="text-sm text-zinc-600 pb-2">{company.location}</div>
        </div>

        <button
          className={`${sharedClasses.sendMessage} border-zinc-500 hover:scale-105 transition-all`}
          onClick={() => {
            router.push(company.companyWebsite);
          }}
        >
          <span>Visit Company Website</span>
          <CustomImage
            src="/assets/icons/link.png"
            alt=""
            width={20}
            height={20}
          />
        </button>

        <button
          className={`${
            sharedClasses.sendMessage
          } border-orange-500 text-orange-500 hover:scale-105 transition-all ${
            showQuestions && "scale-105"
          }`}
          //   onClick={() => {
          //     setShowQuestions(true);
          //   }}
        >
          <span>Send message</span>
          <CustomImage
            src="/assets/icons/message.svg"
            alt=""
            width={20}
            height={20}
          />
        </button>

        <div
          className={`flex gap-0 px-4 pt-4 pb-0 items-center justify-center`}
        >
          {company.socialMediaLinks.map((link, index) => (
            <CustomImage
              key={index}
              src={`/assets/icons/${link.title.toLowerCase()}.png`}
              alt={link.title.toLowerCase()}
              width={20}
              height={20}
              classForDiv={
                "cursor-pointer hover:bg-zinc-200 rounded-full p-2 transition-all"
              }
              className="w-8 h-8 rounded-xl"
              onClick={() => {
                router.push(link.address);
              }}
            />
          ))}
        </div>
      </div>
      {/* {showQuestions && (
        <SendMessage
          onCloseOverlay={() => setShowQuestions(!showQuestions)}
          showQuestions={showQuestions}
        />
      )} */}
    </div>
  );
};

export default CompanyInfo;
