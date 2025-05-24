import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 

//context
export const UserContext = createContext();

//provider
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const navigate = useNavigate()

  const logout = () => {
    console.log("logout....")
    setToken(false)
    navigate("/login")
    
  }

  return (
    <UserContext.Provider value={{ token, logout }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
