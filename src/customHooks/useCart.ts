// import { useState } from "react";
// import { CartProduct } from "../contexts/context";

// interface Product {
//   quantity: number;
//   title: string;
//   price: number;
//   image: string;
//   category: string;
//   id: number;
// }

// type UseCartOutput = [
//   CartProduct[],
//   React.Dispatch<React.SetStateAction<CartProduct[]>>
// ];
// const useCart = (): UseCartOutput => {
//   const [cart, setCart] = useState<CartProduct[]>([]);

//   return [cart, setCart];
// };
// export default useCart; ///to dzialalo

// type UseCartOutput = [
//   cart: () => CartProduct[],
//   setCart: (cart: CartProduct[]) => void
// ];

// const SESSION_STORAGE_KEY = "cart";
// const useCart = (): UseCartOutput => {
//   const [cartState, setCartState] = useState<CartProduct[]>(() => {
//     try {
//       const storedCart = sessionStorage.getItem(SESSION_STORAGE_KEY);
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (error) {
//       console.error("Error reading from sessionStorage", error);
//       return [];
//     }
//   });

//   const setCart = (cart: CartProduct[]) => {
//     try {
//       setCartState(cart);
//       sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cart));
//     } catch (error) {
//       console.error("Error writing to sessionStorage", error);
//     }
//   };
//   const cart = () => cartState;
//   return [cart, setCart];
// };
