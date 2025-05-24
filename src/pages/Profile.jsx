import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {

  const { logout } = useContext(UserContext)

  return (
    <>
      <p style={{color:"black"}}>correo_pizzas@pizzas.cl</p>
      <a href="#">
        <button onClick={logout} className="btn btn-dark">Cerrar Sesion</button>
      </a>
    </>
  );
};

export default Profile;
