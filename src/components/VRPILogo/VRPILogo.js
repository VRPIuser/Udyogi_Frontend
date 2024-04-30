// import { useNavigate } from "react-router-dom";
import CustomImage from "../UI/Image/Image";
import style from "./VRPILogo.module.css";

const VRPILogo = ({ className }) => {
  // const navigate = useNavigate();

  return (
    <CustomImage
      className={`${style.logo}`}
      classForDiv={className}
      src="/assets/vrpiLogo.png"
      alt="logo"
      title="VRPI Logo"
    />
  );
};
export default VRPILogo;
