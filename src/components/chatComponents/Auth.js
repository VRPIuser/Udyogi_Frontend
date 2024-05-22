import { useState, useEffect } from "react";
import { auth, provider } from "@/firebaseConfig/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import Button from "../UI/Button/Button";
import Cookies from "universal-cookie";

const Auth = ({ setIsAuth }) => {
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

      setIsAuth(false);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex gap-4 my-2 w-full justify-end pr-4 items-center">
          <p>Welcome, {user.displayName}</p>
          <Button onClick={signOutHandler}>Sign Out</Button>
        </div>
      ) : (
        <div className="flex gap-4 my-4 w-full justify-end pr-4 items-center">
          <Button onClick={signInWithGoogleHandler}>Sign In with Google</Button>
        </div>
      )}
    </div>
  );
};

export default Auth;
