import RootLayout from "@/components/RootLayout/RootLayout";
import ChatComponent from "@/components/User/ChatPage/ChatComponent";
import { AllCompaniesData } from "@/data/CompaniesData";
import UserData from "@/data/user";
import ConvertToValueUsedForCondition from "@/hooks/ConvertToValueUsedForCondition";
import { useEffect } from "react";

const chat = {
  sender: "12",
  receiver: "2",
  messages: [
    {
      messageBy: 2,
      message: "Hello!",
      date: "2024-05-14T11:10:02",
      status: {
        send: true,
        delivered: true,
        seen: true,
      },
    },
    {
      messageBy: 12,

      message: "Hi there!",
      date: "2024-05-14T11:10:45",
      status: {
        send: true,
        delivered: true,
        seen: true,
      },
    },
    {
      messageBy: 12,

      message: "How are you?",
      date: "2024-05-14T11:12:20",
      status: {
        send: true,
        delivered: true,
        seen: true,
      },
    },
    {
      messageBy: 1,

      message: "I'm good, thanks!",
      date: "2024-05-14T11:15:03",
      status: {
        send: true,
        delivered: true,
        seen: false,
      },
    },
    {
      messageBy: 12,

      message: "What have you been up to?",
      date: "2024-05-14T11:17:40",
      status: {
        send: true,
        delivered: false,
        seen: false,
      },
    },
    {
      messageBy: 1,

      message: "Just working on some projects. How about you?",
      date: "2024-05-14T11:20:55",
      status: {
        send: true,
        delivered: false,
        seen: false,
      },
    },
    {
      messageBy: 12,

      message: "Same here, busy with work.",
      date: "2024-04-14T11:25:18",
      status: {
        send: true,
        delivered: true,
        seen: true,
      },
    },
    {
      messageBy: 1,
      message: "Sounds like we're both staying productive!",
      date: "2024-04-14T11:30:09",
      status: {
        send: true,
        delivered: true,
        seen: true,
      },
    },
  ],
};

// const sender =
//   ConvertToValueUsedForCondition(UserData?.id) !==
//   ConvertToValueUsedForCondition(chat?.user1Id)
//     ? ConvertToValueUsedForCondition(chat?.user1Id)
//     : ConvertToValueUsedForCondition(chat?.user2Id);
// const receiver =
//   ConvertToValueUsedForCondition(UserData?.id) ===
//   ConvertToValueUsedForCondition(chat?.user1Id)
//     ? ConvertToValueUsedForCondition(chat?.user1Id)
//     : ConvertToValueUsedForCondition(chat?.user2Id);

const sender = UserData;

const receiver = AllCompaniesData.find(
  (company) =>
    ConvertToValueUsedForCondition(company.id) ===
    ConvertToValueUsedForCondition(chat.receiver)
);

const UserChatPage = () => {
  useEffect(() => {
    console.log("s->", sender, "r->", receiver);
  });
  return (
    <ChatComponent
      messagesData={chat.messages}
      sender={sender}
      receiver={receiver}
    />
  );
};

export default UserChatPage;
