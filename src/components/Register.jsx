import { useState } from "react";

const Register = () => {

    //estados
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <>
      <form style={{color: "black"}}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={password}/>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}/>
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};

export default Register;

/*
Aplica las siguientes validaciones mínimas:
● Todos los campos son obligatorios (no pueden estar vacíos).
● El password debe tener al menos 6 caracteres.
● El password y la confirmación del password deben ser iguales.
*/
