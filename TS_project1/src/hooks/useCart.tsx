import { useContext } from "react";
import CartContext, { useCartContextType } from "../context/CartProvider";

function useCart(): useCartContextType {
  return useContext(CartContext);
}

export default useCart;
