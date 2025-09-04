import Button from "react-bootstrap/Button";
import formatPrice from "../utils/formatPrice";
import { Link } from "react-router-dom";
//context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  /* const total = 25000; */
  //const token = false;

  return (
    <>
      <h2>Pizzería Mamma Mia!</h2>
      <div className="nav-buttons">
        <Link to="/">
          <Button variant="outline-light">🍕 Home</Button>
        </Link>
        {token ? (
          <>
            <Link to="/profile">
              <Button variant="outline-light">🔓 Profile</Button>
            </Link>
            <Button variant="outline-light" onClick={logout}>
              🔒 Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="outline-light">🔐 Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline-light">🔐 Register</Button>
            </Link>
          </>
        )}
      </div>
      <div className="total-button">
        <Link to="/cart">
          <Button variant="outline-info">
            🛒 Total: ${formatPrice(total)}
          </Button>
        </Link>
      </div>
    </>
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
