import { useRouter } from "next/router";
import CustomImage from "../UI/Image/Image";
import style from "./UdyogiLogo.module.css";

const UdyogiLogo = ({ className }) => {
  const Router = useRouter();

  return (
    <CustomImage
      className={`${style.logo}`}
      classForDiv={className}
      src="/assets/UdyogiLogo.png"
      alt="logo"
      onClick={() => {
        Router.push("/");
      }}
      width={500}
      height={200}
    />
  );
};
export default UdyogiLogo;
