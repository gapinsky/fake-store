import CartItem from "../components/CartItem";
import { useCart } from "../contexts/context";

import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal, FaCcAmex, FaMoneyBillTransfer } from "react-icons/fa6";
import TotalPrice from "../components/TotalPrice";
import Discount from "../components/Discount";
import { useState } from "react";
const CartPage = () => {
  const { cart } = useCart();

  const cartWithTotal = cart.map((item) => ({
    ...item,
    total: item.quantity * item.price,
  }));

  const [shipping, setShipping] = useState("14.99");
  return (
    <div className="h-full flex flex-col items-center justify-center overflow-hidden ">
      <div className=" flex flex-col w-[100%] bg-slate-50 p-2 overflow-hidden z-10 xl:flex-row xl:w-[80%]">
        <ul
          className={`gap-1 bg-white w-full h-[60svh] list-none flex flex-col overflow-y-scroll`}
        >
          {cartWithTotal.map((item, id) => (
            <CartItem item={item} key={id} />
          ))}
        </ul>
        <div className="  flex flex-col  text-2xl px-5 py-2 xl:w-[40%]">
          <TotalPrice cartWithTotal={cartWithTotal} shipping={shipping} />
          <Discount applyDiscount={setShipping} />
          <div className="">
            <p className="text-xl">Payment methods:</p>
            <div className="flex gap-4 text-4xl">
              <FaCcVisa />
              <FaCcPaypal />
              <FaCcMastercard />
              <FaCcAmex />
              <FaMoneyBillTransfer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
