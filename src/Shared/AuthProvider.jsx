import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";

// create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const userObserver = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("logged In User =>", user.email);
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
