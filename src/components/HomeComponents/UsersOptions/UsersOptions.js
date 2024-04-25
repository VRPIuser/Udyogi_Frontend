import Link from "next/link";
import styles from "./UsersOptions.module.css";

const UsersOptionsData = [
  {
    title: "Are you an Employ Looking for your Dream Job?",
    description:
      "Non fringilla nisl rutrum magna et risus dui nulla. Non fringilla nisl rutrum magna et risus dui nulla. ",
    link: {
      address: "",
      title: "Explore Profiles",
    },
  },
  {
    title: "Are you an Employer Looking for a Perfect Candidate?",
    description:
      "Non fringilla nisl rutrum magna et risus dui nulla. Non fringilla nisl rutrum magna et risus dui nulla. ",
    link: {
      address: "",
      title: "Find Jobs",
    },
  },
];

const UsersOptions = () => {
  return (
    <div className={styles.container}>
      {UsersOptionsData.map((data, index) => {
        return (
          <div className={styles.UsersOptions} key={index}>
            <h2 className={styles.UsersOptionsTitle}>{data.title}</h2>
            <p className={styles.UsersOptionsDescription}>{data.description}</p>
            <Link className={styles.UsersOptionsLink} href={data.link.address}>
              {data.link.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UsersOptions;
