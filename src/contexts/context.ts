import { createContext, useContext } from "react";

export interface CartProduct {
  quantity: number;
  id: number;
  price: number;
  title: string;
  image: string;
  category: string;
  total: number;
}

interface CartContextType {
  cart: CartProduct[];
  setCart: (cart: CartProduct[]) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a cartProvider");
  }
  return context;
} 




