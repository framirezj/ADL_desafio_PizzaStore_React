const Register = () => {
  return (
    <>
      <form style={{color: "black"}}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
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
