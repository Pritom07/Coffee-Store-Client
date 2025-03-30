import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "./firebase.init";

export const ThemeContext = createContext(null);

const Provider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userInfo = { createUser, signinUser };
  return (
    <ThemeContext.Provider value={userInfo}>{children}</ThemeContext.Provider>
  );
};

export default Provider;
