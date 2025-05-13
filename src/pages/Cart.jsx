import formatPrice from "../utils/formatPrice";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems: pizzas,
    setCartItems: setPizzas,
    total,
  } = useContext(CartContext);

  const increasePizzas = (id) => {
    setPizzas((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decreasePizzas = (id) => {
    setPizzas((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0)
    );
  };

  return (
    <div className="container-cart">
      <h3>Detalles del pedido:</h3>

      {/* detalle */}
      <ul>
        {pizzas
          .filter((pizza) => pizza.count > 0)
          .map((pizza) => (
            <li key={pizza.id}>
              <img src={pizza.img} />
              <span className="name-pizza">{pizza.name}</span>
              <span className="price-pizza">${formatPrice(pizza.price)}</span>
              <div className="cart-cantidades">
                <button
                  className="increase"
                  onClick={() => increasePizzas(pizza.id)}
                >
                  +
                </button>
                <span>{pizza.count}</span>
                <button
                  className="decrease "
                  onClick={() => decreasePizzas(pizza.id)}
                >
                  -
                </button>
              </div>
            </li>
          ))}
      </ul>

      <p>
        Total: <span>$ {formatPrice(total)}</span>
      </p>
      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;
