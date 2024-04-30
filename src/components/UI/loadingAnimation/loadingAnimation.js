import React from "react";

const loaderClasses =
  "loader ease-linear rounded-full border-8 border-t-8 border-orange-500 h-24 w-24 mb-4";
const textClasses = "text-center text-zinc-700 text-xl font-semibold";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full  border-t-8 border-orange-500 h-24 w-24 mb-4"></div>
      <h2 className={textClasses}>Hang on a while....</h2>
    </div>
  );
};

export default Loader;
