import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const ThemeContext = createContext(null);

const Provider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const currentSignInUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      currentSignInUser();
    };
  }, []);

  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    createUser,
    signinUser,
    User,
    loading,
    signoutUser,
  };

  return (
    <ThemeContext.Provider value={userInfo}>{children}</ThemeContext.Provider>
  );
};

export default Provider;
