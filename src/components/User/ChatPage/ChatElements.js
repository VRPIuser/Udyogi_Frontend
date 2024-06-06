import HideExtraText from "@/components/UI/HideExtraText/HideExtraText";
import { auth } from "@/firebaseConfig/firebaseConfig";
import formatDate from "@/hooks/formatDate";

export const SearchBar = () => (
  <div className="flex items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-md mb-4">
    <input
      className="flex-1 bg-transparent outline-none"
      placeholder="Search here"
    />
  </div>
);

export const MessageItem = ({ sender, message }) => (
  <div className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
    <div className="bg-green-500 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
      V
    </div>
    <div className="ml-2">
      <div className="text-sm font-semibold">{sender}</div>
      <p
        className="text-xs text-gray-600 dark:text-gray-400"
        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
      >
        {message}
      </p>
    </div>
  </div>
);

export const ChatMessage = ({ chat }) => {
  // const statusIcon =
  //   (chat.status?.send &&
  //     !chat.status?.delivered &&
  //     !chat.status?.seen &&
  //     "tick_b.png") ||
  //   (chat.status?.send &&
  //     chat.status?.delivered &&
  //     !chat.status?.seen &&
  //     "doubleTick.png") ||
  //   (chat.status?.seen && "seen.png");
  // const isSender =
  //   chat.messageBy.toString().trim().toLowerCase() ===
  //   sender.id.toString().trim().toLowerCase();

  const isUserLoggedIn = auth.currentUser.uid === chat.uid;

  return (
    <div
      className={`flex items-end mb-4 ${
        isUserLoggedIn ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`${
          isUserLoggedIn ? "bg-white" : "bg-orange-100"
        } shadow-lg rounded-lg py-2 px-2 max-w-xs relative`}
      >
        <h4 className="text-xs">{chat.user}</h4>
        <p className="text-black">{chat.text}</p>
        <div className="w-full flex justify-end gap-2 h-4 items-center">
          <div className="h-fit text-xs">{formatDate(chat.createAt).time}</div>
          {/* {!isUserLoggedIn && (
            <div className="flex">
              <CustomImage
                src={`/assets/icons/${statusIcon}`}
                alt=""
                width={20}
                height={20}
                className="min-w-4 min-h-4 w-4 h-4 opacity-90"
              />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export const ChatHead = ({}) => {
  const titleClasses = "text-lg font-bold text-gray-600";

  if (true) {
    return (
      <div className="p-4 bg-white dark:bg-gray-900 flex justify-between items-center border-b dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div>
            {/* <span
              className={
                "text-orange-500 font-bold text-3xl pt-1 bg-white border border-gray-300 w-12 h-12 inline-block rounded-full text-center leading-12"
              }
            >
              {receiver.name[0]}
            </span> */}
          </div>
          <div className="w-full">
            <div className="flex justify-between w-full gap-2">
              <h2 className={titleClasses}>{receiver.name}</h2>
            </div>
            <HideExtraText className={"text-xs flex flex-wrap"} lines={1}>
              {receiver?.location}
              {"  •  "}
              {receiver.categories[0]}
              {"  •  "}

              {receiver?.companySize.lowerLimit +
                " -" +
                receiver.companySize.upperLimit +
                " members"}
            </HideExtraText>
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 cursor-pointer">⋮</div>
      </div>
    );
  } else {
    return (
      <div className="p-4 bg-white dark:bg-gray-900 flex justify-between items-center border-b dark:border-gray-700">
        <div className="text-lg font-semibold">
          {/* Chat Group Name · Location · Remote - Full-Time */}
        </div>
        <div className="text-gray-600 dark:text-gray-400 cursor-pointer">⋮</div>
      </div>
    );
  }
};
