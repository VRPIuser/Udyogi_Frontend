import Link from "next/link";
import styles from "./MainHeader.module.css";
import { LeftHeaderLinks, RightSideIcons } from "@/data/HeaderData";
import UdyogiLogo from "../UdyogiLogo/UdyogiLogo";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";

import InitialRightSideElements from "./InitialRightSideElements";
import UserRightSideElementCard from "./UserRightSideElementCard";
import MobileHeader from "./MobileHeader";

const MainHeader = () => {
  const loginData = useSelector((state) => state.login);
  const [popoverIndex, setPopoverIndex] = useState(null);
  const router = useRouter();
  const popoverRef = useRef(null);

  const handleIconHover = (index) => {
    setPopoverIndex(index);
  };

  const handleIconLeave = () => {
    setPopoverIndex(null);
  };

  // useEffect(() => {
  //   console.log(loginData);
  // }, [loginData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        handleIconLeave();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const CheckPath = (address) => {
    return router.pathname
      .toString()
      .trim()
      .includes(address.toString().trim().toLowerCase());
  };

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      {
        <>
          <div className={`${styles.Header} sm:flex hidden`}>
            <div className={styles.rightHeaderBar}>
              <UdyogiLogo className={styles.logo} />
              <ul className="flex gap-4">
                {LeftHeaderLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.address}
                      title={link.name}
                      className={`${
                        CheckPath(link.address) && "text-orange-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.leftHeaderBar} `}>
              {true ? (
                RightSideIcons.map((link, index) => (
                  <UserRightSideElementCard
                    key={index}
                    index={index}
                    link={link}
                    handleIconHover={handleIconHover}
                    popoverIndex={popoverIndex}
                    popoverRef={popoverRef}
                  />
                ))
              ) : (
                <InitialRightSideElements />
              )}
            </div>
          </div>

          <MobileHeader
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
        </>
      }
    </>
  );
};

export default MainHeader;
