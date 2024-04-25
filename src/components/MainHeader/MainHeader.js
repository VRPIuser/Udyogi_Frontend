import Link from "next/link";
import VRPILogo from "../VRPILogo/VRPILogo";
import styles from "./MainHeader.module.css";
import { LeftHeaderLinks, RightHeaderLinks } from "@/data/HeaderData";
import UdyogiLogo from "../UdyogiLogo/UdyogiLogo";

const MainHeader = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.rightHeaderBar}>
        <UdyogiLogo className={styles.logo}></UdyogiLogo>
        <ul>
          {LeftHeaderLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.address} title={link.name}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className={styles.leftHeaderBar}>
        {RightHeaderLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.address} title={link.name}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainHeader;
