import React from "react";
import CustomImage from "@/components/UI/Image/Image";
import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";
import {
  ABCTechnologies,
  DataCrunchersInc,
  VRPIGroup,
} from "@/data/CompaniesData";

import CompanyTable from "./CompanyTable";
import useInput from "@/hooks/use-Input";
import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";

const INPUT_CLASS =
  "border-1 border rounded-lg flex-grow mr-2 w-fit items-center p-px pr-2 bg-white";

const MyFollowingComponent = () => {
  const companies = [VRPIGroup, ABCTechnologies, DataCrunchersInc];

  const searchInput = useInput({ validateValue: ValueUndefinedValidations });

  return (
    <div className="max-w-4xl mx-auto  rounded-lg sm:p-6 p-3">
      <h1 className="text-2xl font-semibold mb-4">My Following</h1>
      <div className={`${INPUT_CLASS} flex mb-6`}>
        <input
          type="text"
          placeholder="Search company title"
          className="border-none"
          style={{ boxShadow: "none" }}
          onChange={searchInput.valueChangeHandler}
          onBlur={searchInput.validateValueHandler}
          value={searchInput.value}
        />
        <CustomImage
          src="/assets/icons/searchIcon.png"
          alt=""
          width={20}
          height={20}
          classForDiv={`${hoverBgClasses}`}
        />
      </div>
      <div className="bg-white  rounded-lg shadow">
        <CompanyTable companies={companies} searchInput={searchInput.value} />
      </div>
    </div>
  );
};

export default MyFollowingComponent;
