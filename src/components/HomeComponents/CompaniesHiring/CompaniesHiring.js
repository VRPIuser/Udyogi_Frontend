import { useRef } from "react";
import styles from "./CompaniesHiring.module.css";
import Image from "next/image";
import Section from "@/components/UI/Sections/Section";
import CustomImage from "@/components/UI/Image/Image";

const CompaniesHiringData = [
  { index: 1, name: "ABC 1 Company", image: null },
  { index: 2, name: "ABC 2 Company", image: null },
  { index: 3, name: "ABC 3 Company", image: null },
  { index: 4, name: "ABC 4 Company", image: null },
  { index: 5, name: "ABC 5 Company", image: null },
  { index: 6, name: "ABC 6 Company", image: null },
];

const CompaniesHiring = () => {
  const cardsContainerRef = useRef(null);

  const scrollPrevious = () => {
    if (cardsContainerRef.current) {
      const currentPosition = cardsContainerRef.current.scrollLeft;
      const newPosition = currentPosition - 150; // Scroll 100px to the left
      scrollToPosition(newPosition);
    }
  };

  const scrollNext = () => {
    if (cardsContainerRef.current) {
      const currentPosition = cardsContainerRef.current.scrollLeft;
      const newPosition = currentPosition + 150; // Scroll 100px to the right
      scrollToPosition(newPosition);
    }
  };

  const scrollToPosition = (position) => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollTo({
        left: position,
        behavior: "smooth", // Apply smooth scrolling animation
      });
    }
  };

  return (
    <div className={` bg-gray-200 bg-opacity-75 px-4 py-12`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl w-full p-8 text-center font-medium">
          Top Hiring
        </h1>
        <div className={styles.cards} ref={cardsContainerRef}>
          {CompaniesHiringData.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesHiring;

const CompanyCard = ({ company }) => {
  return (
    <div className={styles.cardContainer}>
      {company.image ? (
        <Image src={company.image} alt={company.name} />
      ) : (
        <div className={styles.dummyImage}></div>
      )}
      <h3 className={styles.companyName}>{company.name}</h3>
    </div>
  );
};
