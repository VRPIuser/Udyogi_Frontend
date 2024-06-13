const { default: CustomImage } = require("@/components/UI/Image/Image");
const { InfoIcon } = require("@/svgs/icons");

const VerifiedStatusComponent = ({ verified }) => {
  return (
    <div className="flex items-center gap-1">
      {verified ? (
        <>
          <span className="text-sm text-green-500">Verified</span>
          <CustomImage
            src={`/assets/icons/verified.png`}
            width={20}
            height={20}
            alt="verified"
          />
        </>
      ) : (
        <>
          <span className="text-sm text-red-500">In Progress</span>

          <InfoIcon width={20} height={20} color={"red"} />
        </>
      )}
    </div>
  );
};
export default VerifiedStatusComponent;
