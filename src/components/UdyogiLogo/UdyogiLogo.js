import CustomImage from "../UI/Image/Image";
import style from "./UdyogiLogo.module.css";

const UdyogiLogo = ({ className }) => {
  // const navigate = useNavigate();

  return (
    <CustomImage
      className={`${style.logo}`}
      classForDiv={className}
      src="/assets/UdyogiLogo.jpg"
      alt="logo"
    />
  );
};
export default UdyogiLogo;
