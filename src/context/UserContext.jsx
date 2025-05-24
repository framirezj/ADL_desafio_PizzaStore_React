import { Children, createContext, useState } from "react";

//context
export const UserContext = createContext();

//provider
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false)
  }

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
