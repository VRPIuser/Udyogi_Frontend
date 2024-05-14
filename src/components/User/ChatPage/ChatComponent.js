import React, { useEffect, useRef, useState } from "react";
import { ChatHead, ChatMessage, MessageItem, SearchBar } from "./ChatElements";
import ChatInput from "./ChatInput";
import GetCurrentDate from "@/hooks/GetCurrentData";
import formatDate from "@/hooks/formatDate";
import RenderMessagesByDate from "./RenderMessagesByDate";

const ChatComponent = ({ messagesData, sender, receiver }) => {
  // Dummy data for messages
  const [messages, setMessages] = useState(messagesData);

  // Function to sort messages based on date
  const sortMessagesByDate = () => {
    return messages.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  };

  const dummyRef = useRef(null);

  const scrollToBottom = () => {
    dummyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  const sendMessage = (message) => {
    const date = GetCurrentDate();
    setMessages((prevMessages) => [
      ...prevMessages,
      { messageBy: sender.id, message, date },
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [sendMessage]);

  const IsReceiverIsCompany =
    receiver?.preferences === undefined ? true : false;

  return (
    <div
      className="flex  bg-white max-w-7xl mx-auto border my-8"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="flex-1 flex flex-col">
        <ChatHead
          IsReceiverIsCompany={IsReceiverIsCompany}
          receiver={receiver}
        />
        <div className="flex-1 px-4 pt-4 overflow-y-auto pb-0">
          <RenderMessagesByDate
            sortMessagesByDate={sortMessagesByDate}
            sender={sender}
          />
          <div ref={dummyRef}></div>
        </div>
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatComponent;
