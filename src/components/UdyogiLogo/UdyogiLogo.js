import { useRouter } from "next/router";
import CustomImage from "../UI/Image/Image";
import style from "./UdyogiLogo.module.css";

const UdyogiLogo = ({ className }) => {
  // const navigate = useNavigate();
  const Router = useRouter();

  return (
    <CustomImage
      className={`${style.logo}`}
      classForDiv={className}
      src="/assets/UdyogiLogo.jpg"
      alt="logo"
      onClick={() => {
        Router.push("/");
      }}
    />
  );
};
export default UdyogiLogo;
