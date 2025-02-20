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
  // const shipping = 14.99;
  const totalWithShipping =
    shipping === "free"
      ? parseFloat(productsTotalPrice).toFixed(2)
      : (parseFloat(productsTotalPrice) + parseFloat(shipping)).toFixed(2);

  // const totalWithShipping = (
  //   parseFloat(productsTotalPrice) + parseFloat(shipping)
  // ).toFixed(2);

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
      <button className="bg-blue-500 w-full py-1  text-white hover:cursor-pointer hover:bg-blue-600">
        Checkout
      </button>
    </div>
  );
};

export default TotalPrice;
