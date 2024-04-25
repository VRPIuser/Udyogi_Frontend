import CustomImage from "@/UI/Image/Image";
import style from "./SignUpOrLoginContainer.module.css";

const SignUpOrLoginContainer = ({
  screenData,
  children,
  classForMainContent,
  classForScreen,
  smallFrame,
}) => {
  return (
    <div className={`${style.container} ${classForScreen}`}>
      <div
        className={style.frame}
        style={{ width: smallFrame ? "50vw" : "100%" }}
      >
        <div className={style.content}>
          {/* <h1>{screenData.title}</h1> */}
          <p className={style.description}>{screenData.description}</p>
        </div>
        <CustomImage
          src={`../../assets/screenContainers/${screenData.image}`}
          alt=""
          classForDiv={style.screenImage}
          className={style.image}
        />
      </div>
      <div
        className={`${style.mainContent} ${classForMainContent}`}
        style={{ width: smallFrame ? "100%" : "50vw" }}
      >
        {children}
      </div>
    </div>
  );
};

export default SignUpOrLoginContainer;
