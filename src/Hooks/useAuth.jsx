import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
