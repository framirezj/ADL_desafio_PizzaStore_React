import { useState } from "react";

const Register = () => {
  const [datosRegister, setDatosRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = datosRegister;

  const handleChangeObject = (e) => {
    const { name, value } = e.target;

    setDatosRegister((prevDatosRegister) => ({
      ...prevDatosRegister,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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

    alert("Bienvenido!!!");

    setDatosRegister({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <form style={{ color: "black" }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeObject}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangeObject}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeObject}
          />
        </div>

        <button type="submit">Registrarse</button>
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
