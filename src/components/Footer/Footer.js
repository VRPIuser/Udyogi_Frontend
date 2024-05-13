import style from "./Footer.module.css";

import VRPILogo from "../VRPILogo/VRPILogo";
import CustomImage from "../UI/Image/Image";

const Footer = ({ links, quickLinks, ContactUs, JoinUsBarData }) => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 700;

  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // const handleClickingInActiveLink=()=>{
  //   dispatch(setComingSoon(true)
  // }

  const navElements = (
    <div className={style.navElements}>
      {links.map((link, index) => (
        <li key={index} className={style.element}>
          <a href={link.address} title={`Link to ${link.name}`}>
            {link.name}
          </a>
        </li>
      ))}
    </div>
  );

  const QuickLinks = (
    <div className={style.navElements}>
      <p className={style.head}>Quick Links</p>
      {quickLinks.map(
        (link, index) =>
          link.active && (
            <div key={index}>
              <li className={style.element}>
                <a
                  href={link.address}
                  onClick={handleScrollToTop}
                  title={`Link to ${link.name}`}
                  // className={({ isActive }) =>
                  //   isActive
                  //     ? `${style.active} ${style.mainNavLink}`
                  //     : style.mainNavLink
                  // }
                  style={{ marginLeft: "1rem" }}
                >
                  {link.name}
                </a>
              </li>
            </div>
          )
      )}
    </div>
  );

  const ContactUsSection = (
    <div className={style.contactUs}>
      <p className={style.head}>Contact Us</p>
      <div className={style.allContacts}>
        <div className={style.contact}>
          <CustomImage
            src="/assets/footer/Location.png"
            alt=""
            width={"110"}
            height={"110"}
          ></CustomImage>
          <div>
            {ContactUs.address.map((addrr, index) => (
              <p style={{ marginBottom: "0.5rem" }} key={index}>
                {addrr}
              </p>
            ))}
          </div>
        </div>
        <div className={style.contact}>
          <CustomImage
            src="/assets/footer/Call.png"
            alt=""
            width={"28"}
            height={"28"}
          ></CustomImage>
          <p>{ContactUs.phoneNumber}</p>
        </div>
        <div className={style.contact}>
          <CustomImage
            src="/assets/footer/Email.png"
            alt=""
            width={"28"}
            height={"28"}
          ></CustomImage>
          <p>{ContactUs.infoEmailId}</p>
        </div>
      </div>
    </div>
  );

  const JoinUsBar = (
    <div className={style.joinUsBar}>
      <p className={style.head}>Join Us Via</p>
      <ul>
        {JoinUsBarData.socialMediaIcons.map((icon, index) => (
          <li key={index}>
            <a href={icon.address} target="_blank" rel="noopener noreferrer">
              <CustomImage
                src={`/assets/socialMediaIcons/${icon.src}`}
                alt={icon.alt}
                width={"28"}
                height={"28"}
              ></CustomImage>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const lowerBar = (
    <div className={style.lowerBar}>
      <p>Copyright &copy; 2021 VR PI Group - All Rights Reserved</p>
      <p>Powered by VR PI Group of Companies</p>
    </div>
  );

  return (
    <div className={style.container}>
      <div className={style.brand}>
        <VRPILogo className={style.logo} />
        <div className={style.tagLine}>
          <h1>“Like TATA...... </h1>
          <h1>Like VR PI.......”</h1>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {/* <div className={style.Footer}> */}
        {/* {width < breakpoint ? ( */}
        <div className={`${style.FooterContents} ${style.Footer}`}>
          <div className={style.navAndQuick}>{QuickLinks}</div>
          {/* <div className={style.contactAndJoin}> */}
          {ContactUsSection}
          {JoinUsBar}
          {/* </div> */}
        </div>

        <div className={`${style.footerContentsResized} ${style.Footer}`}>
          {QuickLinks}
          {ContactUsSection}
          {JoinUsBar}
        </div>
        {/* )} */}
        {/* </div> */}
        {lowerBar}
      </div>
    </div>
  );
};
export default Footer;
