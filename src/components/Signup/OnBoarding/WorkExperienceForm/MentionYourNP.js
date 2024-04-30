import { optionClasses } from "@/tailwindClasses/ButtonClassess";
import { useState } from "react";

const SNPData = [
  "Serving Notice Period",
  "Immediate Joiner",
  "15 Days",
  "1 Month",
  "2 Months",
  "3 Months",
  "3 Months +",
];

const MentionYourNP = ({ SNPInput }) => {
  const INPUT_CLASS =
    "form-input mt-1 p-2 border border-zinc-300 rounded w-full";
  // const BUTTON_CLASS =
  //   "px-4 py-2 border border-orange-500 text-orange-500 hover:bg-zinc-50 rounded-xl transition-all";

  const [selected, setSelected] = useState(null);
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Mention your Notice period</h2>
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {SNPData.map((data, index) => (
          <button
            key={index}
            className={`${optionClasses} ${
              selected === index
                ? "bg-orange-500 text-white"
                : "bg-white text-orange-500"
            }`}
            onClick={() => {
              //   console.log(data);
              setSelected(index);
              SNPInput.AssignValue(data);
            }}
          >
            {data}
          </button>
        ))}
      </div>
    </>
  );
};

export default MentionYourNP;
