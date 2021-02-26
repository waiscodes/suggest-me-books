import React, { useContext, useState } from "react";
import { auth, db } from "../fire.js";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  const value = {};

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
