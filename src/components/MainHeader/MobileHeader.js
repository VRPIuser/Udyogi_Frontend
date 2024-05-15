const { default: UdyogiLogo } = require("../UdyogiLogo/UdyogiLogo");
const {
  default: InitialRightSideElements,
} = require("./InitialRightSideElements");
const {
  default: UserRightSideElementCard,
} = require("./UserRightSideElementCard");

import { useSelector } from "react-redux";
import styles from "./MainHeader.module.css";
import { LeftHeaderLinks, RightSideIcons } from "@/data/HeaderData";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomImage from "../UI/Image/Image";
import ProfileDataComponent from "@/data/ProfileData";

const MobileHeader = ({ setShowSideBar, showSideBar }) => {
  const isLoggedIn = useSelector((state) => state.login.isUdyogiUserLoggedIn);

  const router = useRouter();

  const CheckPath = (address) => {
    return router.pathname
      .toString()
      .trim()
      .includes(address.toString().trim().toLowerCase());
  };

  const profileData = ProfileDataComponent();

  return (
    <div
      className="sm:hidden flex absolute top-0 left-0 justify-between items-center w-full"
      style={{ height: "70px" }}
    >
      <UdyogiLogo className={styles.logo} />

      <div
        className={`${styles.menuIcon} ${
          showSideBar && styles.menuIconChange
        } `}
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      {
        <div
          className={`${styles.sideBar} ${
            showSideBar && styles.show
          } shadow-xl`}
        >
          <UdyogiLogo className={styles.logo} />
          <ul className={styles.sideBarList}>
            <ul className="w-full">
              {LeftHeaderLinks.map((link, index) => (
                <li
                  key={index}
                  className={`w-full flex p-2 hover:bg-zinc-100 cursor-pointer border-b 
                  ${CheckPath(link.address) ? "bg-zinc-100" : "bg-white"}
                  `}
                  onClick={() => {
                    router.push(link.address);
                  }}
                >
                  <Link
                    href={link.address}
                    title={link.name}
                    className={` w-full font-medium block text-start`}
                  >
                    {link.name}
                  </Link>
                  <CustomImage
                    src={`/assets/icons/nextIcon_s.png`}
                    alt={link.image}
                    width={25}
                    height={25}
                  />
                </li>
              ))}
            </ul>
            <ul className={`w-full`}>
              {isLoggedIn ? (
                profileData.map((link, index) => (
                  <li
                    key={index}
                    className={`flex gap-2 items-center p-2 hover:bg-zinc-100 cursor-pointer border-b
                  ${CheckPath(link.address) ? "bg-zinc-100" : "bg-white"}
                    `}
                    onClick={link.action}
                  >
                    <span className="text-black font-medium block w-full text-start">
                      {link.label}
                    </span>
                    <CustomImage
                      src={`/assets/icons/nextIcon_s.png`}
                      alt={link.image}
                      width={25}
                      height={25}
                    />
                  </li>
                ))
              ) : (
                <InitialRightSideElements />
              )}
            </ul>
          </ul>
        </div>
      }
    </div>
  );
};

export default MobileHeader;
