import Button from "react-bootstrap/Button";
import formatPrice from "../utils/formatPrice";
import { Link } from "react-router-dom";
//context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Navbar = () => {
  const { cart } = useContext(CartContext)
  //const total = 25000;
  const token = false;

  return (
    <>
      <h2>Pizzería Mamma Mia!</h2>
      <div className="nav-buttons">
        <Link to="/">
          <Button variant="outline-light">🍕 Home</Button>
        </Link>
        <Link to="login">
          <Button variant="outline-light">
            {token ? `🔓 Profile` : `🔐 Login`}
          </Button>
        </Link>
        <Link to="register">
          <Button variant="outline-light">
            {token ? `🔒 Logout` : `🔐 Register`}
          </Button>
        </Link>
        <Link to="profile">
          <Button variant="outline-light">😃 Profile</Button>
        </Link>
      </div>
      <div className="total-button">
        <Link to="cart">
          <Button variant="outline-info">
            🛒 Total: ${formatPrice(cart)}
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
