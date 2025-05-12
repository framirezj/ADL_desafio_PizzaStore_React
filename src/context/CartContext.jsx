import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //elementos de carrito
  const [cartItems, setCartItems] = useState([
    {
      id: "P001",
      name: "napolitana",
      price: 5950,
      count: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    },
  ]);

  //funcionalidad para agregar desde el home las pizzas MODIFRICAR ESTE PORQUE NO COINCIDE EL OBJETO
  const addToCart = (id) => {
    setCartItems((prev) => {
      prev.map((pizza) => {
        console.log(pizza)
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza;
      });
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


 /* 
 const addToCart = (pizza) => {
  setCartItems((prev) => {
    const pizzaExists = prev.find((item) => item.id === pizza.id);

    if (pizzaExists) {
      // Incrementar el count si ya existe
      return prev.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      // Agregar una nueva pizza al carrito
      return [
        ...prev,
        {
          ...pizza,
          count: 1, // Nueva pizza comienza con count = 1
        },
      ];
    }
  });
};
 
 */