import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";

const { default: CustomImage } = require("../Image/Image");

const SearchInput = ({ searchInput, className, classForInput }) => {
  const INPUT_CLASS =
    "border-1 border rounded-lg items-center bg-zinc-100 w-fit ";

  return (
    <div className={`${INPUT_CLASS} flex ${className}`}>
      <CustomImage
        src="/assets/icons/searchIcon.png"
        alt=""
        width={20}
        height={20}
        // className="px-2"
        classForDiv={`px-2`}
      />
      <input
        type="text"
        placeholder="Search company title"
        className={`border-none px-3 py-1 bg-zinc-100 ${classForInput}`}
        style={{ boxShadow: "none", outline: "none" }}
        onChange={searchInput.valueChangeHandler}
        onBlur={searchInput.validateValueHandler}
        value={searchInput.value}
      />
    </div>
  );
};

export default SearchInput;
