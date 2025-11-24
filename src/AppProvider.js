import { createContext, useEffect, useState } from "react";
import { supabase } from "./Supabase";

// 1️⃣ Create context outside the component
export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const [meta, setMeta] = useState({ title: "RP CRM" });
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const login = async (email, password) => {
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    if(error) throw error;
    setUser(data.user);
  }

  const logout = async () => {
    const {error} = await supabase.auth.signOut();
    if(error) throw error;
    setUser(null);
  }

  // to add some activity
  useEffect(() => {

     const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
      setLoading(false); // 👈 done loading
    };

    getSession();

    // listen the session change
    const {data: listener} = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
    })

    return () => {
      listener.subscription.unsubscribe();
    }
  }, []);

  if(loading) return (<p>Please wait...</p>);

  return (
    <AppContext.Provider value={{ user, setUser, theme, toggleTheme, meta, setMeta, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
