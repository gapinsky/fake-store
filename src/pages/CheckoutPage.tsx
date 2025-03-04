import { useCart } from "../contexts/context";

const CheckoutPage = () => {
  const { cart } = useCart();
  const returnObject = cart.map(({ id, quantity, price }) => ({
    id,
    quantity,
    price,
  }));
  console.log(returnObject);
  const cartJson = JSON.stringify(returnObject);
  return (
    <div className="h-full flex flex-col items center justify-center">
      <div className=" mx-auto text-xl p-5 xl:text-2xl">
        <p className="my-5">
          This is the end of this project. Hope you liked it. :)
        </p>
        <p className="my-5">
          Build using: react.js, tailwind, typescript, react router, react
          query, vite, react icons, fakestoreapi
        </p>
        <p>
          Finally, we get an array of abbreviated objects with the keys id,
          quantity and price in json format.
        </p>
        <div className="my-5">Array: {cartJson.length > 0 && cartJson}</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
