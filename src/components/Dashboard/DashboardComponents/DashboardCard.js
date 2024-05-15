import sharedClasses from "./DashboardClasses";

const DashboardCard = ({ title, count }) => {
  return (
    <div
      className={`${sharedClasses.cardContainer} flex h-full mx-auto flex-col max-w-72 min-w-32 w-full items-center justify-center gap-2`}
      style={{
        aspectRatio: 5 / 3,
      }}
    >
      <span className={`${sharedClasses.titleColor}`}>{title}</span>
      <span className={`${sharedClasses.fontBold} text-4xl`}>{count}</span>
    </div>
  );
};

export default DashboardCard;
