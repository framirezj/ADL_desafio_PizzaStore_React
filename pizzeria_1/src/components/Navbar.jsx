import Button from "react-bootstrap/Button";
import formatPrice from "../utils/formatPrice";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <>
      <h2>Pizzería Mamma Mia!</h2>
      <div className="nav-buttons">
        <Button variant="outline-light">🍕 Home</Button>
        <Button variant="outline-light">
          {token ? `🔓 Profile` : `🔐 Login`}
        </Button>
        <Button variant="outline-light">
          {token ? `🔒 Logout` : `🔐 Register`}
        </Button>
      </div>
      <Button variant="outline-info" className="total-button">
        🛒 Total: ${formatPrice(total)}
      </Button>
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
