import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [datosRegister, setDatosRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = datosRegister;

  //context
  const { login } = useContext(UserContext)

  const handleChangeObject = (e) => {
    const { name, value } = e.target;

    setDatosRegister((prevDatosRegister) => ({
      ...prevDatosRegister,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("password debe ser al menos de 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("password no coincide");
      return;
    }

    //hito8 register
    try {

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: datosRegister.email,
          password: datosRegister.password
        })
      })

      if(!response.ok){
        const errorData = await response.json()
        throw new Error(errorData.message || "Error al registrar usuario")
      }

      //data
      const data = await response.json()
      login(data)
      alert("Bienvenido!!!");

      setDatosRegister({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeObject}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangeObject}
          />
        </div>

        <div>
          <label className="form-label" htmlFor="confirmPassword">
            Confirmar Contraseña:
          </label>
          <input
            className="form-control"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeObject}
          />
        </div>

        <button className="btn btn-primary mb-3" type="submit">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Register;

/*
Aplica las siguientes validaciones mínimas:
● Todos los campos son obligatorios (no pueden estar vacíos). ok
● El password debe tener al menos 6 caracteres. ok
● El password y la confirmación del password deben ser iguales. ok
*/
