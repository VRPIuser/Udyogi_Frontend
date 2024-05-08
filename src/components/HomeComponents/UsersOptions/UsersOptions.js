import Link from "next/link";
import styles from "./UsersOptions.module.css";
import CustomImage from "@/components/UI/Image/Image";

const UsersOptionsData = [
  {
    title: "I'm an Employer",
    description:
      "Non fringilla nisl rutrum magna et risus dui nulla. Non fringilla nisl rutrum magna et risus dui nulla. ",
    link: {
      address: "",
      title: "Explore Profiles",
    },
    image: "employer.png",
    color: "#EB6333",
  },
  {
    title: "I'm a Candidate",
    description:
      "Non fringilla nisl rutrum magna et risus dui nulla. Non fringilla nisl rutrum magna et risus dui nulla. ",
    link: {
      address: "",
      title: "Find Jobs",
    },
    image: "candidate.png",
    color: "#367A15",
  },
];

const UsersOptions = () => {
  return (
    <div className={styles.container}>
      {UsersOptionsData.map((data, index) => {
        return (
          <div
            className={styles.UsersOptions}
            key={index}
            style={{ backgroundColor: data.color }}
          >
            <h2 className={styles.UsersOptionsTitle}>{data.title}</h2>
            <p className={styles.UsersOptionsDescription}>{data.description}</p>
            <Link className={styles.UsersOptionsLink} href={data.link.address}>
              {data.link.title}
            </Link>
            <CustomImage
              src={`/assets/home/${data.image}`}
              alt={data.image}
              classForDiv=""
              divStyles={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "200px",
              }}
              className="h-full object-cover"
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UsersOptions;
