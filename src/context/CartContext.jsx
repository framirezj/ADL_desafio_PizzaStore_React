import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //esta funcion se llama desde las pizzas del home con el boton añadir al carrito
  //creamos un formato de objeto para la nueva pizza y por defecto con una unidad "count: 1"
  //si existe la pizza en el carrito le agregamos uno mas a count, si no existe agregamos la nueva al arreglo
  const addToCart = (id, name, price, img) => {
    const newPizza = { id, name, price, img, count: 1 };

    setCartItems((prev) => {
      const pizzaExists = prev.find((item) => item.id === newPizza.id);

      if (pizzaExists) {
        return prev.map((pizza) =>
          pizza.id === newPizza.id
            ? { ...pizza, count: pizza.count + 1 }
            : pizza
        );
      } else {
        return [...prev, newPizza];
      }
    });
  };

  //acumulador para el total
  const total = cartItems.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );



  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
