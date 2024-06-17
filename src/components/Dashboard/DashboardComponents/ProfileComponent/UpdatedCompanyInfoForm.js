import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import CustomTextArea from "@/components/UI/TextArea/TextArea";
import { useState } from "react";
import { colorTheme } from "../../../../../constants";
import Dropdown from "@/components/UI/Dropdown/Dropdown";

const UpdatedCompanyInfoForm = ({
  companyNameInput,

  industryTypeInput,
  mobileNumberInput,
  emailIDInput,
  locationInput,
  companyURLInput,

  facebookLinkInput,
  twitterLinkInput,
  linkedinLinkInput,
  instagramLinkInput,
  whatsappLinkInput,

  companySizeInput,
  foundedInInput,
  incorporateIDInput,
  overviewInput,
}) => {
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const companySize = [
    { label: "1-5 members", value: "1@5" },
    { label: "6-10 members", value: "6@10" },
    { label: "11-50 members", value: "11@50" },
    { label: "51-100 members", value: "51@100" },
    { label: "101-500 members", value: "101@500" },
    { label: "500+ members", value: "500#" },
  ];

  return (
    <div className="w-full max-w-2xl bg-white p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-8">Company Info</h2>
      <div className="grid grid-cols-1">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4">
          <InputWithInvalidText
            type="text"
            name="companyName"
            placeholder="Company Name"
            inputFields={companyNameInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"Invalid value"}
          />
          <InputWithInvalidText
            type="text"
            name="industryType"
            placeholder="Industry Type"
            inputFields={industryTypeInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"Invalid value"}
          />
        </div>
        <InputWithInvalidText
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          inputFields={mobileNumberInput}
          colorTheme={colorTheme.input}
          ErrorMessage={"Invalid value"}
        />
        <InputWithInvalidText
          type="email"
          name="emailId"
          placeholder="Email ID"
          inputFields={emailIDInput}
          colorTheme={colorTheme.input}
          ErrorMessage={"Invalid value"}
        />
        <InputWithInvalidText
          type="text"
          name="location"
          placeholder="Location"
          inputFields={locationInput}
          colorTheme={colorTheme.input}
          ErrorMessage={"Invalid value"}
        />

        <Dropdown
          placeholder="Company Size"
          onSelect={(value) => companySizeInput.AssignValue(value)}
          options={companySize}
          colorTheme={colorTheme.input}
          initialValue={companySizeInput.value}
        />
        <InputWithInvalidText
          type="text"
          name="foundedIn"
          placeholder="Founded In"
          inputFields={foundedInInput}
          colorTheme={colorTheme.input}
          ErrorMessage={"Invalid value"}
        />
        <InputWithInvalidText
          type="text"
          name="incorporateId"
          placeholder="Incorporate ID"
          inputFields={incorporateIDInput}
          colorTheme={colorTheme.input}
          ErrorMessage={"Invalid value"}
        />

        <InputWithInvalidText
          type="text"
          name="companyUrl"
          placeholder="Company URL"
          inputFields={companyURLInput}
          colorTheme={colorTheme.input}
          ErrorMessage={"Invalid value"}
        />
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4">
          <InputWithInvalidText
            type="text"
            name="facebookLink"
            placeholder="Facebook Link"
            inputFields={facebookLinkInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"Invalid value"}
          />
          <InputWithInvalidText
            type="text"
            name="twitterLink"
            placeholder="Twitter Link"
            inputFields={twitterLinkInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"Invalid value"}
          />
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4">
          <InputWithInvalidText
            type="text"
            name="linkedinLink"
            placeholder="LinkedIn Link"
            inputFields={linkedinLinkInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"Invalid value"}
          />
          <InputWithInvalidText
            type="text"
            name="instagramLink"
            placeholder="Instagram Link"
            inputFields={instagramLinkInput}
            colorTheme={colorTheme.input}
            ErrorMessage={"Invalid value"}
          />
        </div>
        <InputWithInvalidText
          type="text"
          name="whatsappLink"
          placeholder="Whatsapp Link"
          inputFields={whatsappLinkInput}
          colorTheme={colorTheme.input}
          ErrorMessage={"Invalid value"}
        />
        <CustomTextArea
          className="mb-8"
          name="overview"
          placeholder="Overview"
          inputFields={overviewInput}
          colorTheme={colorTheme.input}
        />
      </div>
    </div>
  );
};

export default UpdatedCompanyInfoForm;
