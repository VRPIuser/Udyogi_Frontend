import SignUpOrLoginContainer from "@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./index.module.css";
const loginScreenData = {
  description:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit. Nulla eu id id diam cras neque id massa in.",
  image: "EnterDetailsScreen.svg",
};

const WorkExperiencePage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router.query.workExperience]);

  return (
    <div style={{ display: "flex" }}>
      <SignUpOrLoginContainer
        screenData={loginScreenData}
        smallFrame={false}
        classForMainContent={`${styles.mainContent} bg-gray-50 `}
        classForFrame={styles.frame}
      >
        hey
      </SignUpOrLoginContainer>
    </div>
  );
};

export default WorkExperiencePage;
