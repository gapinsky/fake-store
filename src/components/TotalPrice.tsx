import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  cartWithTotal: {
    total: number;
    quantity: number;
    id: number;
    price: number;
    title: string;
    image: string;
    category: string;
  }[];
  shipping: string;
}

const TotalPrice = ({ cartWithTotal, shipping }: Props) => {
  const productsTotalPrice = cartWithTotal
    .reduce((acc, cur) => acc + cur.total, 0)
    .toFixed(2);
  const totalWithShipping =
    shipping === "free"
      ? parseFloat(productsTotalPrice).toFixed(2)
      : (parseFloat(productsTotalPrice) + parseFloat(shipping)).toFixed(2);

  
  const navigateCheckout = useNavigate();
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const handleCheckout = () => {
    if (parseFloat(productsTotalPrice) === 0) {
      setIsCheckedOut(true);
      return;
    }
    setIsCheckedOut(false);
    navigateCheckout("/cart/checkout");
  };

  return (
    <div className="">
      <p className="inline-flex justify-between w-full mb-2">
        Products total:{" "}
        <span>{productsTotalPrice ? productsTotalPrice : "0.00"}$</span>
      </p>
      <p className="inline-flex justify-between w-full mb-2">
        Shipping:{" "}
        <span>{`${shipping === "free" ? "Free" : shipping + "$"}`}</span>
      </p>
      <p className="inline-flex justify-between w-full mb-5">
        Total:{" "}
        <span>
          {productsTotalPrice === "0.00" ? "0.00" : totalWithShipping}$
        </span>
      </p>
      {isCheckedOut && (
        <p className="text-sm text-red-500">
          You need to add something to the cart first.
        </p>
      )}
      <button
        // to="/cart/checkout"
        onClick={handleCheckout}
        className="bg-blue-500 w-full block text-center py-1  text-white hover:cursor-pointer hover:bg-blue-600 "
      >
        Checkout
      </button>
    </div>
  );
};

export default TotalPrice;
