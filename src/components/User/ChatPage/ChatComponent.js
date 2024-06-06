import React, { useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";
import RenderMessagesByDate from "./RenderMessagesByDate";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/firebaseConfig/firebaseConfig";
import CustomImage from "@/components/UI/Image/Image";
import GetCurrentDate from "@/hooks/GetCurrentData";

const ChatComponent = ({ messagesData, sender, receiver, room }) => {
  // Dummy data for messages
  const [messages, setMessages] = useState();
  const [showScrollDownButton, setShowScrollDownButton] = useState(false);

  const [loading, setLoading] = useState(false);

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
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    dummyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const sendMessage = async (message) => {
    setLoading(true);
    await addDoc(messagesRef, {
      text: message,
      createAt: GetCurrentDate(),
      user: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      room: room,
    });
    setLoading(false);
    scrollToBottom();
    // console.log(auth.currentUser);
  };

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));
    // const unsubscribe =
    // setLoading(true);

    onSnapshot(queryMessages, (snapshot) => {
      let snapMessage = [];
      snapshot.forEach((doc) => {
        snapMessage.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setMessages(snapMessage);
      // setLoading(false);
      // console.log(loading);
    });
    scrollToBottom();
  }, [room]);

  // useEffect(() => {
  //   console.log(loading);
  // });

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          chatContainerRef.current;
        if (scrollHeight - scrollTop === clientHeight) {
          setShowScrollDownButton(false);
        } else {
          setShowScrollDownButton(true);
        }
      }
    };

    scrollToBottom();
    const chatContainer = chatContainerRef.current;
    chatContainer.addEventListener("scroll", handleScroll);

    return () => {
      chatContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex bg-white border"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <div className="flex-1 flex flex-col">
        {/* <ChatHead /> */}
        <div
          ref={chatContainerRef}
          className="flex-1 px-4 pt-4 overflow-y-auto pb-0"
        >
          <RenderMessagesByDate sortMessagesByDate={sortMessagesByDate} />
          <div ref={dummyRef}></div>
        </div>
        {showScrollDownButton && (
          <CustomImage
            src={`/assets/icons/down.png`}
            alt=""
            width={30}
            height={30}
            classForDiv="bottom-16 left-1/2 -translate-x-1/2 p-2 bg-zinc-50 border hover:bg-zinc-100 transitions-all rounded-full"
            divStyles={{ position: "absolute" }}
            className=""
            divClick={() => {
              scrollToBottom();
            }}
          />
        )}
        <ChatInput onSendMessage={sendMessage} loading={loading} />
      </div>
    </div>
  );
};

export default ChatComponent;
