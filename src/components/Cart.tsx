import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <Link
      to="/cart"
      className="z-10 fixed right-8 top-8 text-4xl border-solid-2 border-2 p-3 rounded-full hover:cursor-pointer hover:scale-110 bg-white"
    >
      <GrCart />
      <span className="absolute text-xl -top-1/3 font-bold left-1/2 -translate-x-1/2 bg-white px-2 rounded-full border-solid-2 border-2">
        3
      </span>
    </Link>
  );
};

export default Cart;
