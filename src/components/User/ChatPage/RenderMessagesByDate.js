import CustomImage from "@/components/UI/Image/Image";
import formatDate from "@/hooks/formatDate";

const { ChatMessage } = require("./ChatElements");

const RenderMessagesByDate = ({ sortMessagesByDate }) => {
  const sortedMessages = sortMessagesByDate();
  const currentDate = new Date();

  let previousDate = null;
  return sortedMessages.map((msg, index) => {
    const messageDate = new Date(msg.createAt);

    let messageDateString;
    if (
      messageDate.getDate() === currentDate.getDate() &&
      messageDate.getMonth() === currentDate.getMonth() &&
      messageDate.getFullYear() === currentDate.getFullYear()
    ) {
      messageDateString = "Today";
    } else if (
      messageDate.getDate() === currentDate.getDate() - 1 &&
      messageDate.getMonth() === currentDate.getMonth() &&
      messageDate.getFullYear() === currentDate.getFullYear()
    ) {
      messageDateString = "Yesterday";
    } else {
      messageDateString = formatDate(msg.createAt).date;
    }

    let renderDateHeading;
    if (messageDateString !== previousDate) {
      renderDateHeading = (
        <div className="w-fit py-1 px-3 font-semibold text-center text-sm rounded-3xl border">
          {messageDateString}
        </div>
      );
      previousDate = messageDateString;
    } else {
      renderDateHeading = null;
    }

    return (
      <div key={index}>
        <div className="flex justify-center">{renderDateHeading}</div>
        <ChatMessage chat={msg} />
      </div>
    );
  });
};

export default RenderMessagesByDate;
