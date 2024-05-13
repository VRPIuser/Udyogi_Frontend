import {
  descriptionValidation,
  emailValidation,
  fullNameValidation,
  mobileNumberValidation,
} from "@/components/InputValidations/InputValidations";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import { twoInputContainerClasses } from "@/components/tailwindClasses/InputClasses";
import useInput from "@/hooks/use-Input";
import React, { useEffect, useState } from "react";
import { colorTheme, locationURl } from "../../../../constants";
import CustomTextArea from "@/components/UI/TextArea/TextArea";
import MapContainer from "@/components/UI/Map/Map";
import { ContactData } from "@/data/contactData";
import Button from "@/components/UI/Button/Button";
// import Map from "@/components/UI/Map/Map";

const sharedClasses = {
  input:
    "border border-zinc-300 p-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-700",
  button: "mt-6 font-bold",
};

const ContactUsComponent = () => {
  const nameNameInput = useInput({ validateValue: fullNameValidation });
  const lastNameInput = useInput({ validateValue: fullNameValidation });

  const descriptionInput = useInput({ validateValue: descriptionValidation });
  const phoneNumberInput = useInput({ validateValue: mobileNumberValidation });
  const emailInput = useInput({ validateValue: emailValidation });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      nameNameInput.isValid &&
        lastNameInput.isValid &&
        descriptionInput.isValid &&
        phoneNumberInput.isValid &&
        emailInput.isValid
    );
  }, [
    nameNameInput.isValid,
    lastNameInput.isValid,
    descriptionInput.isValid,
    phoneNumberInput.isValid,
    emailInput.isValid,
  ]);

  const handleSubmit = () => {
    console.log(
      nameNameInput.value,
      lastNameInput.value,
      descriptionInput.value,
      phoneNumberInput.value,
      emailInput.value
    );
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            Have a question or need more information? Just drop us a line!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4 mt-8">
            <ContactInfo title="Phone number" info={ContactData.phoneNumber} />
            <ContactInfo title="Email address" info={ContactData.infoEmailId} />
            <ContactInfo
              title="Address"
              info={ContactData.address}
            ></ContactInfo>
          </div>

          <div className="bg-white p-4 rounded-lg h-fit w-full max-w-xl">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <div className="flex flex-col">
              <div className={`${twoInputContainerClasses}`}>
                <InputWithInvalidText
                  type="text"
                  placeholder="First name"
                  inputFields={nameNameInput}
                  colorTheme={colorTheme.input}
                  ErrorMessage={"Invalid input"}
                />
                <InputWithInvalidText
                  type="text"
                  placeholder="Lastname"
                  inputFields={lastNameInput}
                  colorTheme={colorTheme.input}
                  ErrorMessage={"Invalid input"}
                />
              </div>
              <InputWithInvalidText
                type="text"
                placeholder="Enter your email"
                inputFields={emailInput}
                colorTheme={colorTheme.input}
                ErrorMessage={"Invalid email"}
              />
              <InputWithInvalidText
                type="tel"
                placeholder="Enter your phone"
                inputFields={phoneNumberInput}
                colorTheme={colorTheme.input}
                ErrorMessage={"Invalid mobile number"}
              />
              <CustomTextArea
                placeholder="Message"
                inputFields={descriptionInput}
                colorTheme={colorTheme.input}
                err
              />
              <Button
                onClick={handleSubmit}
                disabled={!formIsValid}
                className={sharedClasses.button}
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
        <MapContainer mapURL={locationURl} />
      </div>
    </div>
  );
};

const ContactInfo = ({ title, info, children }) => {
  return (
    <div>
      <h2 className="font-semibold">{title}</h2>
      <p>{info}</p>
      {children}
    </div>
  );
};

export default ContactUsComponent;
