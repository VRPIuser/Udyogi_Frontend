import Button from "@/components/UI/Button/Button";
import ChatComponent from "@/components/User/ChatPage/ChatComponent";
import Auth from "@/components/chatComponents/Auth";
import { auth } from "@/firebaseConfig/firebaseConfig";
import { useEffect, useRef, useState } from "react";

// Ensure Firebase is initialized only once

const UserChatPage = () => {
  const [room, setRoom] = useState("room1");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Auth />
      <>
        {room ? (
          <>{user && <ChatComponent room={room} />}</>
        ) : (
          <CreateRoom setRoom={setRoom} />
        )}
      </>
    </>
  );
};

export default UserChatPage;

const CreateRoom = ({ setRoom }) => {
  const roomInputRef = useRef();

  return (
    <div>
      <label>Room Name</label>
      <input type="text" ref={roomInputRef} />
      <Button
        onClick={() => {
          setRoom(roomInputRef.current.value);
        }}
      >
        Enter Chat
      </Button>
    </div>
  );
};
