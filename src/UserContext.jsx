import { createContext, useState, useContext } from "react";

const UserContext = createContext(undefined);


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ 
    name: "Roaa", 
    role: "Admin" 
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);