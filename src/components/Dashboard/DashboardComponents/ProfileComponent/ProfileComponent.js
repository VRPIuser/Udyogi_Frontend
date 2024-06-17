// src/components/CompanyInfoForm.js

import React, { useEffect, useState } from "react";
import ProfileMainInfo from "./ProfileMainInfo";
import UpdatedCompanyInfoForm from "./UpdatedCompanyInfoForm";
import useInput from "@/hooks/use-Input";
import {
  NumberValidation,
  ValueUndefinedValidations,
  descriptionValidation,
  emailValidation,
  fullNameValidation,
  urlValidation,
} from "@/components/InputValidations/InputValidations";
import Button from "@/components/UI/Button/Button";

const CompanyInfoForm = ({ companyData }) => {
  const companyNameInput = useInput({
    validateValue: fullNameValidation,

    initialValue: companyData.companyName,
  });

  const industryTypeInput = useInput({
    validateValue: fullNameValidation,

    initialValue: companyData.industryType,
  });
  const mobileNumberInput = useInput({
    validateValue: fullNameValidation,

    initialValue: companyData.mobileNumber,
  });
  const emailIDInput = useInput({
    validateValue: emailValidation,

    initialValue: companyData.emailId,
  });
  const locationInput = useInput({
    validateValue: fullNameValidation,

    initialValue: companyData.location,
  });
  const companyURLInput = useInput({
    validateValue: urlValidation,

    initialValue: companyData.companyURL,
  });

  const facebookLinkInput = useInput({
    validateValue: urlValidation,
    initialValue: companyData.facebookLink,
  });
  const twitterLinkInput = useInput({
    validateValue: urlValidation,

    initialValue: companyData.twitterLink,
  });
  const linkedinLinkInput = useInput({
    validateValue: urlValidation,
    initialValue: companyData.linkedinLink,
  });
  const instagramLinkInput = useInput({
    validateValue: urlValidation,

    initialValue: companyData.instagramLink,
  });
  const whatsappLinkInput = useInput({
    validateValue: urlValidation,

    initialValue: companyData.whatsappLink,
  });

  const companySizeInput = useInput({
    validateValue: NumberValidation,

    initialValue: companyData.companySize,
  });
  const foundedInInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: companyData.foundedIn,
  });
  const incorporateIDInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: companyData.incorporateID,
  });
  const overviewInput = useInput({
    validateValue: descriptionValidation,
    initialValue: companyData.overview,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("data->", companyData);
  });

  useEffect(() => {
    setFormIsValid(
      companyNameInput.isValid ||
        industryTypeInput.isValid ||
        mobileNumberInput.isValid ||
        emailIDInput.isValid ||
        locationInput.isValid ||
        companyURLInput.isValid ||
        facebookLinkInput.isValid ||
        twitterLinkInput.isValid ||
        linkedinLinkInput.isValid ||
        instagramLinkInput.isValid ||
        whatsappLinkInput.isValid ||
        companySizeInput.isValid ||
        foundedInInput.isValid ||
        incorporateIDInput.isValid ||
        overviewInput.isValid
    );
  }, [
    companyNameInput.isValid,
    industryTypeInput.isValid,
    mobileNumberInput.isValid,
    emailIDInput.isValid,
    locationInput.isValid,
    companyURLInput.isValid,
    facebookLinkInput.isValid,
    twitterLinkInput.isValid,
    linkedinLinkInput.isValid,
    instagramLinkInput.isValid,
    whatsappLinkInput.isValid,
    companySizeInput.isValid,
    foundedInInput.isValid,
    incorporateIDInput.isValid,
    overviewInput.isValid,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      companyName: companyNameInput.value,
      industryType: industryTypeInput.value,
      mobileNumber: mobileNumberInput.value,
      emailID: emailIDInput.value,
      location: locationInput.value,
      companyURL: companyURLInput.value,
      facebookLink: facebookLinkInput.value,
      twitterLink: twitterLinkInput.value,
      linkedinLink: linkedinLinkInput.value,
      instagramLink: instagramLinkInput.value,
      whatsappLink: whatsappLinkInput.value,
      companySize: companySizeInput.value,
      foundedIn: foundedInInput.value,
      incorporateID: incorporateIDInput.value,
      overview: overviewInput.value,
    });
  };

  return (
    <div className="flex lg:items-start items-center gap-4 lg:flex-row  flex-col justify-center">
      <ProfileMainInfo companyData={companyData} />
      <div className="w-full max-w-2xl">
        <UpdatedCompanyInfoForm
          companyData={companyData}
          companyNameInput={companyNameInput}
          industryTypeInput={industryTypeInput}
          mobileNumberInput={mobileNumberInput}
          emailIDInput={emailIDInput}
          locationInput={locationInput}
          companyURLInput={companyURLInput}
          facebookLinkInput={facebookLinkInput}
          twitterLinkInput={twitterLinkInput}
          linkedinLinkInput={linkedinLinkInput}
          instagramLinkInput={instagramLinkInput}
          whatsappLinkInput={whatsappLinkInput}
          companySizeInput={companySizeInput}
          foundedInInput={foundedInInput}
          incorporateIDInput={incorporateIDInput}
          overviewInput={overviewInput}
        />
        <div className="w-full my-8 flex justify-center">
          <Button onClick={handleSubmit} disabled={!formIsValid}>
            Update Information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoForm;
