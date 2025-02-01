import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAuth(false);
  }

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
