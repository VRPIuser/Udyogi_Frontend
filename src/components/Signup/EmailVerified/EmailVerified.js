import Button from "@/UI/Button/Button";
import CustomImage from "@/UI/Image/Image";
import { useRouter } from "next/router";
import React from "react";

// Shared Tailwind CSS classes
const buttonClasses =
  "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded";
const containerClasses = "";
const titleClasses = "text-2xl font-bold mb-2";
const paragraphClasses = "mb-6";

const EmailVerified = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg  max-w-2xl mx-auto text-center">
        <CustomImage
          src="/assets/screenContainers/VerifiedScreen.svg"
          alt="Mobile Verified"
          className="mx-auto mb-6"
          width={500}
          height={1000}
        />
        <h1 className={titleClasses}>Your Account is Created</h1>
        <p className={paragraphClasses}>
          Thank you for creating your account in Udhyogi! Now choose your career
          in Best Companies. All the Best!
        </p>
        <Button
          onClick={() => {
            router.push("/sign-up/job-seeker/onBoarding");
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default EmailVerified;
