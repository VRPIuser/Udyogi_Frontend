import HideExtraText from "@/UI/HideExtraText/HideExtraText";
import styles from "./JobCard.module.css";
import Button from "@/UI/Button/Button";

const JobCard = ({ key, job }) => {
  return (
    <div className={styles.card} key={key}>
      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.cardTitle}>{job.jobTitle}</h3>
          <h4 className={styles.cardCompany}>{job.companyName}</h4>

          <ul className={styles.jobTags}>
            <li className={styles.cardLocation}>{job.location}</li>
            <li className={styles.cardWorkType}>{job.workType}</li>
            <li className={styles.cardJobType}>{job.jobType}</li>
          </ul>
        </div>
        <div className={styles.symbol}>
          <span>v</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div>
          <HideExtraText className={styles.cardDescription} lines={3}>
            {job.shortDescriptionData}
          </HideExtraText>
          <ul className={styles.jobTags}>
            {job.expectedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <HideExtraText className={styles.cardSalaryRange} lines={1}>
          {<CurrencySymbol currency={job.salaryRange.currency} />}
          {""}
          {job.salaryRange.upperLimit} {job.salaryRange.salaryType} -{" "}
          {job.salaryRange.lowerLimit} {job.salaryRange.salaryType}
        </HideExtraText>

        <div className={styles.actionsBtns}>
          <Button onClick={() => {}} className={styles.showJobBtn}>
            Save Job
          </Button>
          <Button onClick={() => {}} className={styles.viewJobBtn}>
            View Job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

const CurrencySymbol = ({ currency }) => {
  const validatedCurrency = currency.toString().toLowerCase().trim();
  console.log(validatedCurrency);
  if (validatedCurrency === "inr") {
    return <span className={styles.currencySymbol}>₹</span>;
  } else if (validatedCurrency === "usd") {
    return <span className={styles.currencySymbol}>$</span>;
  }
};
