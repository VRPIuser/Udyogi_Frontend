import CustomImage from "@/components/UI/Image/Image";

const LikeAndShare = ({ onLike, liked }) => {
  return (
    <div className="flex gap-4">
      <CustomImage
        src={`/assets/icons/share.png`}
        alt=""
        width={20}
        height={20}
        classForDiv="cursor-pointer hover:bg-orange-200 transition-all p-2 rounded-full"
      />

      <CustomImage
        src={`/assets/icons/${liked ? "heart_fill.png" : "heart_empty.png"}`}
        alt=""
        width={20}
        height={20}
        classForDiv="cursor-pointer hover:bg-orange-200 transition-all p-2 rounded-full"
        divClick={() => onLike(!liked)}
      />
    </div>
  );
};

export default LikeAndShare;
