import Button from "react-bootstrap/Button";
import formatPrice from "../utils/formatPrice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
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
      </div>
      <div className="total-button">
        <Link to="cart">
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
