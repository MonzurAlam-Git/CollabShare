import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

// create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    console.log("login from context");
  };

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const userObserver = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("logged In User", user);
      } else {
        console.log("No user");
      }
    });
    return () => {
      return userObserver();
    };
  }, []);

  const authValue = { createUser, login };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
