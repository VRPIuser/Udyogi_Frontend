import { useRouter } from "next/router";

const ManualNavbar = ({ data }) => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto sm:pt-8 sm:pl-8 pt-4 pl-4 flex flex-wrap">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex items-center">
            <span
              className="hover:underline cursor-pointer p-2"
              onClick={() => {
                router.push(item.link);
              }}
            >
              {item.name} {/* Access the text property */}
            </span>
            {index !== data.length - 1 && <span>{" > "}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default ManualNavbar;
