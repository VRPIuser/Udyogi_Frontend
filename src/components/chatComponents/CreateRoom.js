import { db } from "@/firebaseConfig/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";
import Button from "../UI/Button/Button";

const CreateRoom = ({
  setRoom,
  roomInputRef,
  setJoinRoomOrCreateRoom,
  room,
}) => {
  const messagesRef = collection(db, "messages");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRoom = async () => {
    const roomName = roomInputRef.current.value;

    if (!roomName) {
      setError("Room name cannot be empty");
      return;
    }

    setLoading(true);
    try {
      const queryMessages = query(messagesRef, where("room", "==", roomName));
      const querySnapshot = await getDocs(queryMessages);

      if (!querySnapshot.empty) {
        setError("Room already exists");
      } else {
        setError(null);
        setRoom(roomName);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <label className="text-xl font-semibold text-center">
        Enter room name to create
      </label>
      <div className="flex flex-col items-center w-full gap-4">
        <div>
          <input
            type="text"
            ref={roomInputRef}
            className="focus-visible:outline-none border p-2 rounded-lg"
            placeholder="Room Number"
          />
          <p
            className={`text-red-500 text-xs pt-1 pl-2 ${
              error ? "opacity-100" : "opacity-0"
            } h-4`}
          >
            {error}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={handleRoom} disabled={loading}>
            {loading ? "Creating..." : "Create Room"}
          </Button>
          <span className="block w-full text-center">Or</span>
          <Button
            onClick={() => {
              setJoinRoomOrCreateRoom(true);
            }}
            style={{
              backgroundColor: "white",
              border: "1px solid #ff6501",
              color: "#ff6501",
            }}
          >
            Join Room
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
