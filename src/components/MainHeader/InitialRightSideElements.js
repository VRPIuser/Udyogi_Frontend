import Link from "next/link";
import CustomImage from "../UI/Image/Image";

const InitialRightSideElements = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href={"/sign-in"}
        className="h-5 flex gap-4 hover:scale-95 transition-all"
      >
        <CustomImage
          src="/assets/icons/login.png"
          alt="login"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Login
      </Link>
      <Link
        href={"/sign-up"}
        className="h-5 flex gap-4 hover:scale-95 transition-all"
      >
        <CustomImage
          src="/assets/icons/register.png"
          alt="register"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Register
      </Link>
      <button
        onClick={() => {}}
        className="flex gap-2 px-4 py-2 rounded-sm hover:bg-orange-600 active:scale-90 transition-all bg-orange-500"
      >
        <CustomImage
          src="/assets/icons/jobPost.png"
          alt="cart"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="h-5 text-sm text-white">Job Post</span>
      </button>
    </div>
  );
};

export default InitialRightSideElements;
