// import { useNavigate } from "react-router-dom";
import CustomImage from "../../UI/Image/Image";
import style from "./UdyogiLogo.module.css";

const UdyogiLogo = ({ className }) => {
  // const navigate = useNavigate();

  return (
    // <div className={style.logoContainer}>
    <CustomImage
      className={`${style.logo}`}
      classForDiv={className}
      src="/assets/UdyogiLogo.jpg"
      alt="logo"
      // title="Home"
      // onClick={() => navigate("/")}
    />
    // </div>
  );
};
export default UdyogiLogo;
