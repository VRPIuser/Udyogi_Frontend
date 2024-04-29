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
  const BUTTON_CLASS = "px-4 py-2 border border-zinc-300 rounded-xl";

  const [selected, setSelected] = useState(null);
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Mention your Notice period</h2>
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {SNPData.map((data, index) => (
          <button
            key={index}
            className={`${BUTTON_CLASS} ${
              selected === index
                ? "bg-orange-500 text-white transition-all"
                : "bg-white transition-all"
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
