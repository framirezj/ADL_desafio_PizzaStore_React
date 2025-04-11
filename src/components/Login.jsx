import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//usa solo un useState y relaciono los datos en un objeto
const Login = () => {
  const [datosLogin, setDatosLogin] = useState({
    email: "",
    password: "",
  });

  //hago un destructurin para ocupar solo el nombre de la propiedad y no datoLogin.email...
  const { email, password } = datosLogin;

  const handleChangeObject = (e) => {
    //accede a las propiedades del elemento desde el evento
    const { name, value } = e.target;

    //actualizar el estado del objeto
    setDatosLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("password debe ser al menos de 6 caracteres");
      return;
    }

    if (email === "correo@gmail.com" && password === "123456") {
      alert("Welcome!!!");
    } else {
      alert("Email y/o Password Incorrectos!");
      return;
    }

    setDatosLogin({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="email">Email:</label>
          <input
          className="form-control"
            type="email"
            id="email"
            name="email" //importante porque relaciona los datos con el objeto
            value={email}
            onChange={handleChangeObject}
          />
        </div>

        <div>
          <label className="form-label" htmlFor="password">Contraseña:</label>
          <input
          className="form-control"
            type="password"
            id="password"
            name="password" //importante porque relaciona los datos con el objeto
            value={password}
            onChange={handleChangeObject}
          />
        </div>

        <button className="btn btn-primary mb-3" type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
