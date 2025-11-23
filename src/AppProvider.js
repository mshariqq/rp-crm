import { createContext, useState } from "react";

// 1️⃣ Create context outside the component
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John", loggedIn: false });
  const [theme, setTheme] = useState("light");
  const [meta, setMeta] = useState({ title: "RP CRM" });

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ user, setUser, theme, toggleTheme, meta, setMeta }}>
      {children}
    </AppContext.Provider>
  );
};
