import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//context
export const UserContext = createContext();

//provider
const UserProvider = ({ children }) => {
  //{email: "asdasd", token: "asdasdasd"}
  const [token, setToken] = useState(() => {
    const stored = localStorage.getItem("token");
    return stored ? JSON.parse(stored) : null;
  });

  const navigate = useNavigate();

  //logout
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  //login
  const login = (data) => {
    setToken(data);
    localStorage.setItem("token", JSON.stringify(data));
    navigate("/");
  };

  //profile: /api/auth/me
  const profile = async () => {

    if(!token || !token.token){
      throw new Error("No autenticado")
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("No se puedo obtener el perfil");
      }

      //data
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ token, logout, login, profile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
