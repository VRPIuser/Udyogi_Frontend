import CustomImage from "@/components/UI/Image/Image";

const UserRightSideElementCard = ({
  handleIconHover,
  link,
  popoverIndex,
  index,
  popoverRef,
}) => {
  return (
    <div
      onMouseEnter={() => handleIconHover(index)}
      style={{ position: "relative" }}
    >
      <CustomImage
        src={`/assets/icons/${link.image}`}
        alt={link.image}
        // onClick={() => router.push(link.link)}
        width={25}
        height={25}
        className="hover:scale-125 transition-all cursor-pointer"
      />
      {popoverIndex === index && (
        <div ref={popoverRef}>
          <div className="absolute top-10 -right-2 bg-white rounded shadow min-w-72">
            <div
              className="absolute -top-3 -z-10 right-2 bg-zinc-400 border-gray-300 rotate-45 "
              style={{ width: "25px", height: "25px" }}
            />
            {link.popover}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRightSideElementCard;
