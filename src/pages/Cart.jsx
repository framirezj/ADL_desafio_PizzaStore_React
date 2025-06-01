import formatPrice from "../utils/formatPrice";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cartItems: pizzas, setCartItems: setPizzas, total} = useContext(CartContext);

  const { token } = useContext(UserContext);

  const increasePizzas = (id) => {
    setPizzas((prev) => 
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decreasePizzas = (id) => {
    setPizzas((prev) =>
      prev
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  //hito8 enviar carrito al backend
  const buy = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`
        },
        body: JSON.stringify({cart: pizzas})
        
      })

      
      if(!response.ok){
        const errorData = await response.json()
        throw new Error(errorData.message || "Error al procesar el pedido");
      }

      //console.log( await response.json())
      alert("ÑAM ÑAM")
      setPizzas([])

    } catch (error) {
      alert(error.message)
    }
  }

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
      {token && <button className="btn btn-dark" onClick={buy}>Pagar</button>}
    </div>
  );
};

export default Cart;
