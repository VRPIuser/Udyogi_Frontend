import { useState, useEffect } from "react";
import { auth, provider } from "@/firebaseConfig/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import Button from "@/components//UI/Button/Button";
import MenuIcon from "@/components/UI/MenuIcon/MenuIcon";
import Sidebar from "./SideHeader";

const Auth = ({ setIsAuth, room, setRoom }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const cookies = new Cookies();

  const signInWithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, provider);
      cookies.set("auth-token", auth.currentUser.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      cookies.set("auth-token", null);
      setUser(null);

      setIsAuth(false);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="h-14 p-2 flex items-center bg-white border border-b-0">
      {user ? (
        <div className="flex gap-4 w-full justify-between items-center pl-4">
          <h2>{room}</h2>

          <MenuIcon
            action={() => setShowSidebar(!showSidebar)}
            show={showSidebar}
          />
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button onClick={signInWithGoogleHandler}>Sign In with Google</Button>
        </div>
      )}
      {user && (
        <>
          <Sidebar
            setShowSidebar={setShowSidebar}
            user={user}
            showSidebar={showSidebar}
            signOutHandler={signOutHandler}
            setRoom={setRoom}
          />
        </>
      )}
    </div>
  );
};

export default Auth;
