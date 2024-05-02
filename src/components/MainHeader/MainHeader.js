import Link from "next/link";
import styles from "./MainHeader.module.css";
import {
  LeftHeaderLinks,
  RightHeaderLinks,
  RightSideIcons,
} from "@/data/HeaderData";
import UdyogiLogo from "../UdyogiLogo/UdyogiLogo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomImage from "../UI/Image/Image";
import { useRouter } from "next/router";
import ProfileComponent from "./ProfilePopover/ProfilePopover";

const MainHeader = () => {
  const loginData = useSelector((state) => state.login);
  const [popoverIndex, setPopoverIndex] = useState(null);
  const router = useRouter();

  const handleIconHover = (index) => {
    setPopoverIndex(index);
  };

  const handleIconLeave = () => {
    setPopoverIndex(null);
  };

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

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
        {loginData.isUdyogiUserLoggedIn
          ? RightSideIcons.map((link, index) => (
              <div
                key={index}
                onMouseEnter={() => handleIconHover(index)}
                // onMouseLeave={handleIconLeave}
                style={{ position: "relative" }}
              >
                <CustomImage
                  src={`/assets/icons/${link.image}`}
                  alt={link.image}
                  onClick={() => router.push(link.link)}
                  width={25}
                  height={25}
                  className="hover:scale-125 transition-all cursor-pointer"
                />
                {popoverIndex === index && (
                  <div
                    className="absolute top-10 -right-2 bg-white rounded shadow"
                    onClick={handleIconLeave}
                  >
                    <div
                      className="absolute -top-3 -z-10 right-2 bg-zinc-400 border-gray-300 rotate-45 "
                      style={{ width: "25px", height: "25px" }}
                    />

                    {link.popover}
                  </div>
                )}
              </div>
            ))
          : RightHeaderLinks.map((link, index) => (
              <div key={index}>
                <Link href={link.address} title={link.name}>
                  {link.name}
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MainHeader;
