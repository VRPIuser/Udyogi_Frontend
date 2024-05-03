import Footer from "../Footer/Footer";
import {
  footerLinks,
  quickLinks,
  ContactUs,
  JoinUsBarData,
} from "../../data/FooterData";
import { ReactNode } from "react";
import MainHeader from "../MainHeader/MainHeader";
import styles from "./RootLayout.module.css";

const RootLayout = ({ children, classForMain }) => {
  return (
    <div className={styles.layout}>
      <MainHeader />
      <main className={`${styles.Main} ${classForMain}`}>{children}</main>
      <Footer
        links={footerLinks}
        quickLinks={quickLinks}
        ContactUs={ContactUs}
        JoinUsBarData={JoinUsBarData}
      />
    </div>
  );
};

export default RootLayout;
