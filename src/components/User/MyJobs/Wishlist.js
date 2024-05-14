import React, { useState } from "react";
import CustomImage from "@/components/UI/Image/Image";
import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";
import UserData from "@/data/user";
import SavedJobsTable from "./SavedJobTable";
import useInput from "@/hooks/use-Input";
import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";

const INPUT_CLASS =
  "border-1 border rounded-lg flex-grow mr-2 w-fit items-center p-px pr-2 bg-white";

const WishlistComponent = () => {
  const searchInput = useInput({ validateValue: ValueUndefinedValidations });

  return (
    <div className="max-w-full mx-auto  rounded-lg">
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
        {UserData?.savedJobs && (
          <SavedJobsTable
            savedJobs={UserData?.savedJobs}
            searchInput={searchInput.value}
          />
        )}
      </div>
    </div>
  );
};

export default WishlistComponent;
