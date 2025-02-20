import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/context";

const Cart = () => {
  const { cart } = useCart();
  // console.log(cart[0].quantity)
  const productsCounter =
    cart.length > 0 ? cart.reduce((acc, cur) => acc + cur.quantity, 0) : 0;
  return (
    <Link
      to="/cart"
      className="z-10 fixed right-8 top-8 p-5  rounded-full hover:cursor-pointer hover:scale-110 "
    >
      <GrCart className="text-4xl" />
      {cart.length !== 0 && (
        <span className="absolute text-sm top-1 font-bold left-1/2 -translate-x-1/2  rounded-full px-1.5 text-white bg-blue-500">
          {productsCounter > 9 ? "9+" : productsCounter}
        </span>
      )}
    </Link>
  );
};

export default Cart;
