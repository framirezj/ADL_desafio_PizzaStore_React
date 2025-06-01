import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {

  const { logout, profile } = useContext(UserContext)
  const [user, setUser] = useState(null)

  //al momento de cargar el componente hare la llamada a la api
  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const data = await profile()
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfile()
  },[profile])

  return (
    <>
      <p style={{color:"black"}}>{user ? user.email : "Cargando..."}</p>
      <a href="#">
        <button onClick={logout} className="btn btn-dark">Cerrar Sesion</button>
      </a>
    </>
  );
};

export default Profile;
