import { createContext, useState } from "react";

const CartContext = createContext(0);

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState("");

  const getCart = async () => {
    const request = await fetch("http://localhost:3333/cart");
    const data = await request.json();
    setCart(data.cart);
  };

  return (
    <CartContext.Provider value={[isOpen, setIsOpen, cart, getCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
