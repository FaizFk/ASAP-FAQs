import { createContext, useContext, useState } from "react";

const AuthLanguageContext = createContext();

export const AuthLanguageProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [language, setLanguage] = useState("en");

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAuth(false);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return <AuthLanguageContext.Provider value={{ isAuth, login, logout, language, changeLanguage}}>{children}</AuthLanguageContext.Provider>;
};

export const useAuthLanguage = () => useContext(AuthLanguageContext);
