const { useRouter } = require("next/router");
const { default: CustomImage } = require("../Image/Image");

const GoBackWithText = ({ text, style }) => {
  const router = useRouter();

  return (
    <div
      className="flex gap-2 items-center justify-start max-w-7xl mx-auto"
      style={style}
    >
      <CustomImage
        src={`/assets/icons/down.png`}
        alt="back_btn"
        width={25}
        height={25}
        className="rotate-90 min-w-6 min-y-6 "
        classForDiv={
          "hover:bg-zinc-200 rounded-full p-2 transition-all active:scale-75"
        }
        divClick={() => {
          router.back();
        }}
      />
      <h2 className="text-2xl font-bold">{text}</h2>
    </div>
  );
};

export default GoBackWithText;
