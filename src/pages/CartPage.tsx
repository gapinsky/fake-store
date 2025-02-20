import CartItem from "../components/CartItem";
import { CartProduct, useCart } from "../contexts/context";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal, FaCcAmex, FaMoneyBillTransfer } from "react-icons/fa6";
import { useState } from "react";
import TotalPrice from "../components/TotalPrice";
const CartPage = () => {
  const { cart } = useCart();
  const [isDiscoutOpen, setIsDiscountOpen] = useState(false);

  const cartWithTotal = cart.map((item) => ({
    ...item,
    total: item.quantity * item.price,
  }));

  const handleAccordion = () => {
    setIsDiscountOpen((prevState) => !prevState);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center overflow-hidden">
      <div className=" flex w-[80%] bg-slate-50 p-2 overflow-hidden">
        <ul
          className={`gap-1 bg-white w-full h-[60svh] list-none flex flex-col ${
            cart.length > 7 && "overflow-y-scroll"
          }`}
        >
          {cartWithTotal.map((item, id) => (
            <CartItem item={item} key={id} />
          ))}
        </ul>
        <div className=" w-[40%] flex flex-col  text-2xl px-5 py-2 ">
          <TotalPrice cartWithTotal={cartWithTotal} />
          <div className="text-xl my-5">
            <p className="text-sm ">(for testing purpose enter "free")</p>
            <p
              className=" py-1 w-full justify-between inline-flex items-end hover:cursor-pointer"
              onClick={handleAccordion}
            >
              Got a discount code?{" "}
              {isDiscoutOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>
            <div
              className={`${isDiscoutOpen ? "h-fit" : "h-0"} overflow-hidden`}
            >
              <label htmlFor="text" className="text-sm">
                Enter the discount code below:{" "}
              </label>
              <input
                type="text"
                className="border-solid border-1 w-full mb-5 p-1 text-lg"
              />
              <button className="w-full border-solid border-2 p-1 text-lg hover:bg-black hover:text-white hover:cursor-pointer">
                Add discount
              </button>
            </div>
          </div>
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
