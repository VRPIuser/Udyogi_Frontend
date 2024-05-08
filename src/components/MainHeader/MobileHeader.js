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

const MobileHeader = ({ setShowSideBar, showSideBar }) => {
  const loginData = useSelector((state) => state.login);

  const router = useRouter();

  const CheckPath = (address) => {
    return router.pathname
      .toString()
      .trim()
      .includes(address.toString().trim().toLowerCase());
  };
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
            <ul className="flex flex-col gap-4 w-full">
              {LeftHeaderLinks.map((link, index) => (
                <li key={index} className="w-full">
                  <Link
                    href={link.address}
                    title={link.name}
                    className={`${
                      CheckPath(link.address)
                        ? "bg-orange-600"
                        : "bg-orange-500"
                    } w-full p-2  text-white font-medium block text-start rounded-lg`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={`flex gap-4 w-full justify-end`}>
              {true ? (
                RightSideIcons.map((link, index) => (
                  <div key={index} className="">
                    <CustomImage
                      src={`/assets/icons/${link.image}`}
                      alt={link.image}
                      onClick={() => router.push(link.link)}
                      width={25}
                      height={25}
                      className="hover:scale-125 transition-all cursor-pointer"
                    />
                  </div>
                ))
              ) : (
                <InitialRightSideElements />
              )}
            </div>
          </ul>
        </div>
      }
    </div>
  );
};

export default MobileHeader;
