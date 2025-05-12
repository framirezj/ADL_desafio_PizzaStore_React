import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(0)

    return(
        <CartContext.Provider value={{cart, setCart}}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider