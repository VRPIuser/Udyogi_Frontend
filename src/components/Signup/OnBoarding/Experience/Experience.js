import SignUpOrLoginContainer from "@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer";

import styles from "./Experience.module.css";
import { useRouter } from "next/router";

const loginScreenData = {
  description:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit. Nulla eu id id diam cras neque id massa in.",
  image: "ThinkingFace.svg",
};

const boxClasses =
  "font-medium  max-w-96 w-full max-h-60 h-52 flex items-center justify-center text-xl px-6 text-center cursor-pointer hover:scale-105 hover:bg-orange-500 hover:text-white  transition-all ";

const Experience = () => {
  const router = useRouter();
  return (
    <SignUpOrLoginContainer
      screenData={loginScreenData}
      smallFrame={false}
      classForMainContent={`${styles.mainContent} bg-gray-50 `}
      classForFrame={styles.frame}
    >
      <div
        className={`${styles.container} flex flex-col gap-5 justify-center items-center h-full`}
      >
        <h1 className="font-normal text-3xl mb-6 text-center ">
          Any Work Experience?
        </h1>
        <div
          className={`${boxClasses}`}
          onClick={() => {
            router.push("/sign-up/job-seeker/work-experience");
          }}
        >
          I’ve have an Work Experience
        </div>
        <div
          className={`${boxClasses} `}
          onClick={() => {
            router.push("/sign-up/job-seeker/education-details");
          }}
        >
          No! I don’t have any work experience. I’m a Fresher
        </div>
      </div>
    </SignUpOrLoginContainer>
  );
};
export default Experience;
