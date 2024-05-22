import React, { useEffect, useRef, useState } from "react";
import { ChatHead, ChatMessage, MessageItem, SearchBar } from "./ChatElements";
import ChatInput from "./ChatInput";
import GetCurrentDate from "@/hooks/GetCurrentData";
import formatDate from "@/hooks/formatDate";
import RenderMessagesByDate from "./RenderMessagesByDate";
import {
  addDoc,
  collection,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "@/firebaseConfig/firebaseConfig";
import CustomImage from "@/components/UI/Image/Image";

const ChatComponent = ({ messagesData, sender, receiver, room }) => {
  // Dummy data for messages
  const [messages, setMessages] = useState();

  // Function to sort messages based on date

  const sortMessagesByDate = () => {
    if (messages) {
      return messages.sort((a, b) => {
        return new Date(a.createAt) - new Date(b.createAt);
      });
    } else {
      return [];
    }
  };

  const messagesRef = collection(db, "messages");

  const dummyRef = useRef(null);

  const scrollToBottom = () => {
    console.log("scrollToBottom");
    dummyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  const sendMessage = async (message) => {
    await addDoc(messagesRef, {
      text: message,
      createAt: GetCurrentDate(),
      user: auth.currentUser.displayName,
      room: room,
    });
    scrollToBottom();
  };

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));
    // const unsubscribe =
    onSnapshot(queryMessages, (snapshot) => {
      let snapMessage = [];
      snapshot.forEach((doc) => {
        snapMessage.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setMessages(snapMessage);
    });
  }, [room, messagesRef]);

  // useEffect(() => {
  //   scrollToBottom();
  // }, []);

  return (
    <div className="flex bg-white border" style={{ height: "calc(100vh)" }}>
      <div className="flex-1 flex flex-col">
        <ChatHead />
        <div className="flex-1 px-4 pt-4 overflow-y-auto pb-0">
          <RenderMessagesByDate sortMessagesByDate={sortMessagesByDate} />
          <div ref={dummyRef}></div>
        </div>
        <CustomImage
          src={`/assets/icons/down.png`}
          alt=""
          width={30}
          height={30}
          classForDiv="bottom-16 left-4 p-4 bg-white hover:bg-zinc-100 transitions-all opacity-50 hover:opacity-100 rounded-full"
          divStyles={{ position: "absolute" }}
          className=""
          onClick={() => {
            scrollToBottom();
          }}
        />
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatComponent;
