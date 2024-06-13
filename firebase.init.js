import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBErr2rx55dbgZCZ3bozNw1RWzJDYuvghQ",
  authDomain: "collabshare-project.firebaseapp.com",
  projectId: "collabshare-project",
  storageBucket: "collabshare-project.appspot.com",
  messagingSenderId: "808764718924",
  appId: "1:808764718924:web:2e637dca0c66e83dda99e9",
};

export const auth = getAuth();
export const app = initializeApp(firebaseConfig);
