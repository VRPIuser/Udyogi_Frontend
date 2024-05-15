import React from "react";

const cardClass =
  "w-full min-w-80 rounded-lg overflow-hidden shadow-lg relative bg-white flex justify-end";
const buttonClass =
  "bg-orange-500 text-white font-bold py-2 px-2 rounded-full uppercase text-sm";
const textClass = "text-black mt-4 text-xs";
const tagClass =
  "absolute bottom-2 right-2 text-white uppercase text-xl font-semibold";
const iconClass = "absolute top-2 right-2 bg-white rounded-full";
const iconStyle = { width: "36px", height: "36px" };

const DashboardPaymentCard = () => {
  return (
    <div className={cardClass}>
      <div className="absolute top-0 left-0 bg-white-500 p-4 w-1/2">
        <button className={buttonClass}>Make Payment</button>
        <p className={textClass}>
          In turpis tempor suspendisse malesuada vivamus pellentesque ac
          blandit. Nulla eu id diam.
        </p>
      </div>
      <div
        className={`bg-orange-500 min-w-60 h-full`}
        style={{
          borderTop: "0px solid transparent",
          borderLeft: "200px solid white",
          borderBottom: "240px solid transparent",
        }}
      >
        <div className={tagClass}>Udhyogi</div>
        <div className={iconClass} style={iconStyle}></div>
      </div>
    </div>
  );
};

export default DashboardPaymentCard;
