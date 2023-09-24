import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      const errorMessage = () =>
        toast.error("Product is already selected", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      errorMessage();
    }
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });

    return total;
  };

  const total = getTotal();

  const removeItem = (id) => {
    setCart((prev) => prev.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, totalQuantity, removeItem, clearCart, total }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
