import GetTimePassedFromGiven from "@/hooks/GetTimePassedFromGiven";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import SendMessage from "./SendMessage";
import UdyogiLogo from "@/components/UdyogiLogo/UdyogiLogo";
import CustomImage from "@/components/UI/Image/Image";
import HideExtraText from "@/components/UI/HideExtraText/HideExtraText";

const sharedClasses = {
  button: "bg-orange-500 text-white w-full py-2 rounded-lg",
  border: "border-zinc-200 pt-4",
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

const CompanyCard = ({ job, isApplied }) => {
  const router = useRouter();

  const [showQuestions, setShowQuestions] = useState(false);

  // useEffect(() => {
  //   console.log(showQuestions);
  // });

  return (
    <div className="w-full lg:max-w-sm h-fit max-w-3xl">
      {!isApplied && (
        <div className="bg-orange-100 rounded-lg shadow-lg p-4 mb-4">
          <div className=" text-2xl font-semibold py-2 text-center">
            Interested in this job?
          </div>
          <div className="text-sm font-medium pb-4 text-center text-orange-500">
            {GetTimePassedFromGiven(job.postedDate)}
          </div>
          <button className={sharedClasses.button}>Apply now</button>
        </div>
      )}

      <div
        className={`${sharedClasses.border} bg-white rounded-lg shadow-lg p-4  `}
      >
        <div className={sharedClasses.flexItems}>
          <CustomImage
            src={`/assets/logos/${job.companyDetails.image}`}
            alt=""
            width={250}
            height={250}
            className="w-16 h-16 object-cover cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push(`/companies/${job.companyDetails.id}`);
            }}
            title={job.companyDetails.name}
          />

          <div className="">
            <div className="flex gap-2 items-center">
              <span className="text-sm font-semibold">
                {job.companyDetails.name}
              </span>
              <CustomImage
                src="/assets/icons/verified.png"
                alt=""
                width={15}
                height={15}
              />
            </div>
            {/* <span className="text-green-500 text-xs">✔</span> */}
            <button
              className={sharedClasses.companyProfile}
              onClick={() => {
                router.push(job.companyDetails.companyWebsite);
              }}
            >
              View company profile
            </button>
          </div>
        </div>

        <div className={sharedClasses.overview}>
          <div className="flex gap-4 mb-2">
            <h3 className="font-semibold pb-1 border-b-2 border-black">
              Overview
            </h3>
            <div
              className="font-semibold pb-1 text-zinc-500 cursor-pointer"
              onClick={() => {
                router.push(`/companies/${job.companyDetails.id}`);
              }}
              title={"Jobs at " + job.companyDetails.name}
            >
              Jobs
              <span className="rounded-full ml-2 px-2 text-orange-500 bg-orange-50">
                {job.companyDetails.jobs}
              </span>
            </div>
          </div>
          <HideExtraText className="text-sm text-zinc-600" lines={3}>
            {job.companyDetails.overview}
          </HideExtraText>
        </div>

        <div className={sharedClasses.categories}>
          <div className="font-semibold pb-1">Categories</div>
          <div className="flex gap-4">
            {job.companyDetails.categories.map((category, index) => (
              <span key={index} className="font-semibold pb-1 text-orange-500">
                {category}
              </span>
            ))}
          </div>
          <div className="font-semibold pb-1">Company size</div>
          <div className="text-sm text-zinc-600 pb-2">
            {job.companyDetails.companySize.lowerLimit +
              " - " +
              job.companyDetails.companySize.upperLimit}
          </div>
          <div className="font-semibold pb-1">Founded in</div>
          <div className="text-sm text-zinc-600 pb-2">
            {job.companyDetails.foundedIn}
          </div>
          <div className="font-semibold pb-1">Location</div>
          <div className="text-sm text-zinc-600 pb-2">
            {job.companyDetails.location}
          </div>
        </div>

        <button
          className={`${sharedClasses.sendMessage} border-zinc-500 hover:scale-105 transition-all`}
          onClick={() => {
            router.push(job.companyDetails.companyWebsite);
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
          onClick={() => {
            setShowQuestions(true);
          }}
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
          {job.companyDetails.socialMediaLinks.map((link, index) => (
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
      {showQuestions && (
        <SendMessage
          onCloseOverlay={() => setShowQuestions(!showQuestions)}
          showQuestions={showQuestions}
        />
      )}
    </div>
  );
};

export default CompanyCard;
