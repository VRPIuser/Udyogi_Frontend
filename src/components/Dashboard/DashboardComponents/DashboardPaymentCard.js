import PercentageDisplay from "@/components/User/ProfilePageComponents/PercentageDisplay";
import React from "react";

const cardClass =
  "w-full min-w-56 rounded-lg overflow-hidden shadow-lg relative bg-white flex justify-end ";
const buttonClass =
  "w-fit bg-orange-500 text-white font-bold py-2 px-2 rounded-full uppercase text-sm border border-orange-700 hover:bg-orange-600 transition-all";

const tagClass =
  "absolute bottom-2 right-2 text-white uppercase text-xl font-semibold";
const iconClass = "absolute top-2 right-2 bg-white rounded-full";
const iconStyle = { width: "36px", height: "36px" };

const DashboardPaymentCard = () => {
  return (
    <div className={cardClass}>
      <div className="absolute top-0 left-0 bg-white-500 p-4 w-3/4 h-full flex flex-col justify-between ">
        {/* <button className={buttonClass}>Make Payment</button>
        <p className={textClass}>
          In turpis tempor suspendisse malesuada vivamus pellentesque ac
          blandit. Nulla eu id diam.
        </p> */}
        <div className="flex  justify-between items-start flex-wrap">
          <div>
            <p className="text-sm uppercase">Amount Paid</p>
            <p className="text-3xl font-bold">₹ 5,400</p>
            <p className="text-xs">20 Mar 2024</p>
          </div>
          <div className="flex gap-2">
            <PercentageDisplay percentage={80} radius={30} />
            <div>
              <p className="text-sm">Credits Used</p>
              <p className="text-xl font-bold">₹ 345</p>
            </div>
          </div>
        </div>
        <button className={buttonClass}>Recharge</button>
      </div>
      <div
        className={`bg-orange-500  h-full`}
        style={{
          minWidth: "340px",
          borderTop: "0px solid transparent",
          borderLeft: "300px solid white",
          borderBottom: "208px solid transparent",
        }}
      >
        {/* <div className={tagClass}>Udhyogi</div> */}
        <div className="absolute bottom-0 right-0 pb-6 pr-6 text-white">
          <p className="text-sm text-white">Balance</p>
          <p className="text-3xl font-bold text-white">₹ 2,300</p>
        </div>
        <div className={iconClass} style={iconStyle}></div>
      </div>
    </div>
  );
};

export default DashboardPaymentCard;

// ```jsx
// import React from 'react';

// const Card = () => {
//     return (
//         <div className={cardContainerClasses}>
//             <div className="absolute top-0 right-0">
//                 <div className={circleClasses}></div>
//             </div>
//             <div className="flex justify-between items-start">
//                 <div>
//                     <p className="text-sm uppercase">Amount Paid</p>
//                     <p className="text-3xl font-bold">₹ 5,400</p>
//                     <p className="text-xs">20 Mar 2024</p>
//                 </div>
//                 <div className={percentageCircleClasses}>
//                     <span className="text-sm font-bold">18%</span>
//                 </div>
//             </div>
//             <div className="mt-4">
//                 <p className="text-sm">Credits Used</p>
//                 <p className="text-xl font-bold">₹ 345</p>
//             </div>
//             <button className={rechargeButtonClasses}>Recharge</button>
//             <div className="absolute bottom-0 right-0 pb-6 pr-6">
//                 <p className="text-sm">Balance</p>
//                 <p className="text-3xl font-bold">₹ 2,300</p>
//             </div>
//         </div>
//     );
// };

// export default Card;
// ```
