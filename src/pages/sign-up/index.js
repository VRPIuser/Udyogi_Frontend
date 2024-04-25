import SignUpOrLoginContainer from "@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import SignWelcomeScreen from "@/components/Signup/SignWelcomeScreen/SignWelcomeScreen";

const WelcomeToSignUpPage = () => {
  const loginScreenData = {
    description:
      "You’re one step away to unlock all the possible features of Udhyogi ",
    image: "welcomeScreen.svg",
  };

  return (
    <div style={{ display: "flex" }}>
      <SignUpOrLoginContainer screenData={loginScreenData} smallFrame={false}>
        <SignWelcomeScreen />
      </SignUpOrLoginContainer>
    </div>
  );
};

export default WelcomeToSignUpPage;
