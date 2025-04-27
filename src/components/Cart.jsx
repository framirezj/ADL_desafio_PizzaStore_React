import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [pizzas, setPizzas] = useState(pizzaCart);

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
    );
  };

  const total = pizzas.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container-cart">
      <p>Detalles del pedido</p>

      {/* detalle */}
      <ul>
        {pizzas.map((pizza) =>
          pizza.count > 0 ? (
            <li key={pizza.id}>
              <img src={pizza.img} />
              <span className="name-pizza">{pizza.name}</span>
              <span className="price-pizza">${pizza.price}</span>
              <div className="cart-cantidades">
                <button className="increase" onClick={() => increasePizzas(pizza.id)}>+</button>
                <span>{pizza.count}</span>
                <button className="decrease" onClick={() => decreasePizzas(pizza.id)}>-</button>
              </div>
            </li>
          ) : null
        )}
      </ul>

      <p>
        total: <span>$ {total}</span>
      </p>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;

/* <li key={pizza.id}>
            <img src={pizza.img} />
            <span>{pizza.name}</span>
            <span>{pizza.price}</span>
            <button onClick={() => incrementPizzas(pizza.id)}>+</button>
            <span>{pizza.count}</span>
            <button onClick={() => decreasePizzas(pizza.id)}>-</button>
          </li> */
