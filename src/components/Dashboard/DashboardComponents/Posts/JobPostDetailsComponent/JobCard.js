import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";
import Dropdown from "@/components/UI/Dropdown/Dropdown";
import GetTimePassedFromGiven from "@/hooks/GetTimePassedFromGiven";
import useInput from "@/hooks/use-Input";
import React, { useState } from "react";
import { colorTheme } from "../../../../../../constants";

const JobCard = ({ job }) => {
  const statusDropdownInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: job.status,
  });

  const statusDropdownData = [
    { label: "Active", value: "active" },
    { label: "In-active", value: "in-active" },
  ];

  return (
    <div className="max-w-5xl mt-4 mx-auto p-4 pl-8 pt-8 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {job.jobTitle} - {job.jobId}
          </h2>
        </div>
        <div className="text-right">
          <p className="text-xs text-orange-500">
            {GetTimePassedFromGiven(job.postedDate)}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col gap-2">
          <p className="text-xl text-gray-400">{job.companyDetails.name}</p>
          <p className=" text-gray-400">
            • {job.location} • {job.jobType} • {job.workType}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Co-Ordinator</p>
          <p className=" text-gray-400 text-center">{job.coordinator}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Openings</p>
          <p className=" text-gray-400 text-center">{job.openings}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Applications</p>
          <p className=" text-gray-400 text-center">{job.applicants.length}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          {job.expectedSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-50 border border-orange-600 text-orange-600 text-sm rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-1">
          {/* <span>Status :</span> */}

          <Dropdown
            options={statusDropdownData}
            onSelect={(value) => {
              statusDropdownInput.AssignValue(value);
            }}
            placeholder="Status"
            colorTheme={colorTheme.input}
            initialValue={job.status}
            inputStyles={{
              margin: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
