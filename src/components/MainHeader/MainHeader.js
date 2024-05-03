import Link from "next/link";
import styles from "./MainHeader.module.css";
import {
  LeftHeaderLinks,
  RightHeaderLinks,
  RightSideIcons,
} from "@/data/HeaderData";
import UdyogiLogo from "../UdyogiLogo/UdyogiLogo";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import CustomImage from "../UI/Image/Image";
import { useRouter } from "next/router";
import ProfileComponent from "./ProfilePopover/ProfilePopover";
import Button from "../UI/Button/Button";

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

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

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

  return (
    <div className={styles.Header}>
      <div className={styles.rightHeaderBar}>
        <UdyogiLogo className={styles.logo} />
        <ul>
          {LeftHeaderLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.address} title={link.name}>
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
  );
};

export default MainHeader;

const UserRightSideElementCard = ({
  handleIconHover,
  link,
  popoverIndex,
  index,
  popoverRef,
}) => {
  return (
    <div
      onMouseEnter={() => handleIconHover(index)}
      style={{ position: "relative" }}
    >
      <CustomImage
        src={`/assets/icons/${link.image}`}
        alt={link.image}
        // onClick={() => router.push(link.link)}
        width={25}
        height={25}
        className="hover:scale-125 transition-all cursor-pointer"
      />
      {popoverIndex === index && (
        <div ref={popoverRef}>
          <div className="absolute top-10 -right-2 bg-white rounded shadow min-w-72">
            <div
              className="absolute -top-3 -z-10 right-2 bg-zinc-400 border-gray-300 rotate-45 "
              style={{ width: "25px", height: "25px" }}
            />
            {link.popover}
          </div>
        </div>
      )}
    </div>
  );
};

const InitialRightSideElements = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href={"/sign-in"}
        className="h-5 flex gap-4 hover:scale-95 transition-all"
      >
        <CustomImage
          src="/assets/icons/login.png"
          alt="login"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Login
      </Link>
      <Link
        href={"/sign-up"}
        className="h-5 flex gap-4 hover:scale-95 transition-all"
      >
        <CustomImage
          src="/assets/icons/register.png"
          alt="register"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Register
      </Link>
      <button
        onClick={() => {}}
        className="flex gap-2 px-4 py-2 rounded-sm hover:bg-orange-600 active:scale-90 transition-all bg-orange-500"
      >
        <CustomImage
          src="/assets/icons/jobPost.png"
          alt="cart"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="h-5 text-sm text-white">Job Post</span>
      </button>
    </div>
  );
};
