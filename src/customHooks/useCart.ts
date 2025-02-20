import { useState } from "react";
import { CartProduct } from "../contexts/context";

// interface Product {
//   quantity: number;
//   title: string;
//   price: number;
//   image: string;
//   category: string;
//   id: number;
// }

type UseCartOutput = [
  CartProduct[],
  React.Dispatch<React.SetStateAction<CartProduct[]>>
];
const useCart = (): UseCartOutput => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  return [cart, setCart];
};
export default useCart;
