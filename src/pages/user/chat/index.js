import Button from "@/components/UI/Button/Button";
import ChatComponent from "@/components/User/ChatPage/ChatComponent";
import Auth from "@/components/chatComponents/Auth";
import CreateRoom from "@/components/chatComponents/CreateRoom";
import JoinRoom from "@/components/chatComponents/JoinRoom";
import { auth } from "@/firebaseConfig/firebaseConfig";
import { useEffect, useRef, useState } from "react";

// Ensure Firebase is initialized only once

const UserChatPage = () => {
  const [room, setRoom] = useState();

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
    <div className="max-w-3xl mx-auto relative overflow-hidden">
      <Auth room={room} setRoom={setRoom} />
      {user && (
        <>
          {room ? (
            <>{user && <ChatComponent room={room} />}</>
          ) : (
            <Rooms setRoom={setRoom} room={room} />
          )}
        </>
      )}
    </div>
  );
};

export default UserChatPage;

const Rooms = ({ setRoom, room }) => {
  const roomInputRef = useRef();

  const [joinRoomOrCreateRoom, setJoinRoomOrCreateRoom] = useState(true);

  useEffect(() => {
    console.log(joinRoomOrCreateRoom);
  });

  return (
    <div
      className="border flex items-center justify-start mt-10 max-w-80 mx-auto md:p-4 p-0 py-4 "
      style={{ maxHeight: "calc(100vh - 56px)" }}
    >
      {joinRoomOrCreateRoom ? (
        <JoinRoom
          roomInputRef={roomInputRef}
          setJoinRoomOrCreateRoom={setJoinRoomOrCreateRoom}
          setRoom={setRoom}
          room={room}
        />
      ) : (
        <CreateRoom
          roomInputRef={roomInputRef}
          setRoom={setRoom}
          room={room}
          setJoinRoomOrCreateRoom={setJoinRoomOrCreateRoom}
        />
      )}
    </div>
  );
};
