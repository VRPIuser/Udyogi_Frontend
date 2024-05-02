import { useRouter } from "next/router";
import Button from "../UI/Button/Button";
import CustomImage from "../UI/Image/Image";

const PasswordUpdated = ({ action }) => {
  const router = useRouter();

  const SubmitHandler = () => {
    router.push("/login");
  };

  return (
    <div class="max-w-lg mx-auto p-8 bg-white rounded-lg">
      {/* <div class="max-w-lg mx-auto p-8 bg-white rounded-lg"> */}
      <div class="mb-4">
        <CustomImage
          src={`/assets/screenContainers/UpdateScreen.svg`}
          alt=""
          width="500"
          height="500"
          classForDiv="h-auto"
          className="m-auto"
        />
      </div>
      <h2 class="text-4xl font-semibold text-center mb-6">Password Updated</h2>
      <p class="text-zinc-600 text-center mb-8">
        Your Password has been Updated! Please Login to your account and enjoy
        our valuable services
      </p>

      <Button onClick={action} className="w-full mt-4">
        Login
      </Button>
    </div>
  );
};

export default PasswordUpdated;
