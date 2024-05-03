import { BooleanValidation } from "@/components/InputValidations/InputValidations";
import CustomCheckbox from "@/components/UI/Checkbox/Checkbox";
import useInput from "@/hooks/use-Input";
import React, { useEffect, useState } from "react";

const MessagePopover = () => {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem("messages");
    return storedMessages
      ? JSON.parse(storedMessages)
      : [
          {
            id: 1,
            title: "System Update",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            timestamp: "March 26, 2024 at 6:45 P.M.",
            seen: false,
          },
          {
            id: 2,
            title: "New Message",
            content:
              "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            timestamp: "March 27, 2024 at 9:30 A.M.",
            seen: false,
          },
          {
            id: 3,
            title: "Reminder",
            content:
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            timestamp: "March 28, 2024 at 2:15 P.M.",
            seen: false,
          },
        ];
  });
  const allReadInput = useInput({ validateValue: BooleanValidation });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleMarkAsRead = () => {
    const updatedMessages = messages.map((message) => ({
      ...message,
      seen: true,
    }));
    setMessages(updatedMessages);
  };

  const handleNotificationClick = (id) => {
    const updatedMessages = messages.map((message) =>
      message.id === id ? { ...message, seen: true } : message
    );
    setMessages(updatedMessages);
  };

  const isNotificationSeen = (id) => {
    const message = messages.find((message) => message.id === id);
    return message ? message.seen : false;
  };

  const unseenNotifications = messages.filter((message) => !message.seen);

  return (
    <div className="bg-zinc-400 p-4 rounded-lg max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">messages</h2>
        <CustomCheckbox
          onChange={allReadInput.AssignValue}
          label={"Mark all as Read"}
          checked={allReadInput.value}
          onClick={handleMarkAsRead}
        />
      </div>
      <div className="space-y-2 mb-2">
        {unseenNotifications.length > 0 ? (
          unseenNotifications.map((message) => (
            <div
              key={message.id}
              className={`bg-white p-2 rounded shadow-sm flex  justify-between items-start cursor-pointer  relative ${
                isNotificationSeen(message.id) ? "bg-gray-300" : ""
              }`}
              onClick={() => handleNotificationClick(message.id)}
            >
              <button
                className="text-zinc-400 text-xl hover:text-zinc-600 absolute top-0 right-2"
                onClick={() => handleNotificationClick(message.id)}
              >
                ×
              </button>
              <div className="pr-4">
                <p className="text-sm text-zinc-600">{message.title}</p>
                <p className="text-xs text-zinc-500">{message.content}</p>
                <p className="text-xs text-zinc-400">{message.timestamp}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full">
            <div className="w-full h-24 my-4 bg-zinc-300"></div>
            <p className="text-center text-zinc-600 text-sm">
              You’re all Caught up!! Do click on below button for further past
              messages.
            </p>
          </div>
        )}
      </div>
      <div className="p-2 bg-white">
        <button className="w-full font-semibold">View all Messages</button>
      </div>
    </div>
  );
};

export default MessagePopover;
