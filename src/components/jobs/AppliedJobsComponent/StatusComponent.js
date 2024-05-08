const { default: CustomImage } = require("@/components/UI/Image/Image");

const StatusComponent = ({ application }) => {
  return (
    <div className="flex items-center flex-wrap mt-4">
      {application.applicationStatus.map((status, index) => {
        const statusMode =
          status.status.toString().trim().toLowerCase() !== "rejected";

        return (
          <div key={index} className="">
            <div className="flex items-center">
              <div
                className={`pl-2 lr-1 py-px  rounded-3xl w-fit flex gap-2 items-center ${
                  statusMode ? "bg-green-50" : "bg-red-50"
                }`}
              >
                <span className={`text-sm`}>{status.status}</span>
                <CustomImage
                  src={`/assets/icons/${
                    statusMode ? "verified.png" : "wrong.png"
                  }`}
                  width={30}
                  height={30}
                  alt=""
                  className="w-6 h-6 object-contain"
                />
              </div>
              {index !== application.applicationStatus.length - 1 && (
                <span className={`min-w-2 h-px bg-zinc-400 mx-1`}></span>
              )}
            </div>
            <span className={`text-xs text-zinc-500`}>{status.statusDate}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StatusComponent;
