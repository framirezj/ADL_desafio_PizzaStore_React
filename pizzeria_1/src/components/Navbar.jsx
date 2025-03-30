import Button from "react-bootstrap/Button";
import "../../src/index.css";

const Navbar = () => {
  return (
    <div className="contenedor-navbar">
      <h2>Pizzería Mamma Mia!</h2>
      <div className="nav-buttons">
        <Button variant="outline-light">🍕 Home</Button>
        <Button variant="outline-light">🔐 Login</Button>
        <Button variant="outline-light">🔐 Register</Button>
      </div>
      <Button variant="outline-info" className="total-button">
        🛒 Total: $
      </Button>
    </div>
  );
};

export default Navbar;

/*
a. 🍕 Home
b. 🔓 Profile
c. 🔒 Logout
d. 🔐 Login
e. 🔐 Register
f. 🛒 Total: $
*/
