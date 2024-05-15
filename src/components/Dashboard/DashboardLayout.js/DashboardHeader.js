import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";
import CustomImage from "@/components/UI/Image/Image";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import { hoverBgClasses } from "@/components/tailwindClasses/ButtonClassess";
import useInput from "@/hooks/use-Input";

const DashboardHeader = ({ role, setShowSidebar }) => {
  const searchInput = useInput({ validateValue: ValueUndefinedValidations });

  return (
    <div className="flex h-20 items-center top-0 left-0 w-full bg-white z-10 gap-4 justify-between px-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-semibold ">Hello {role} 👋</h1>
        <CustomImage
          src={`/assets/icons/notifications.png`}
          alt=""
          width={40}
          height={25}
          classForDiv={`p-1 hover:bg-zinc-100 transition-all rounded-lg border`}
          //   divStyles={{ height: "24px", width: "24px" }}
          //   style={{ height: "25px" }}
          className="w-5 h-5 object-contain"
          onClick={setShowSidebar}
        />
      </div>
      <SearchInput searchInput={searchInput} />
    </div>
  );
};

export default DashboardHeader;
