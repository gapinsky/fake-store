// import { FaBasketShopping } from "react-icons/fa6";

interface Product {
  // description: string;
  image: string;
  price: number;
  title: string;
  // rating: { count: number; rate: number };
}

const ProductCard = ({ title, image, price }: Product) => {
  return (
    <div className="flex min-h-[400px] flex-col justify-between w-[300px] my-6 px-4 py-2 rounded-md  hover:cursor-pointer hover:shadow-md">
      <div className="">
        <img
          src={image}
          alt={title}
          className="h-[200px] aspect-square object-center mx-auto"
        />
        <p className="text-xl my-2">{title}</p>
      </div>
      {/* <p className="inline-flex justify-between w-full items-center "> */}
      <p className="text-xl font-semibold">{price}$</p>
      {/* <button className="bg-blue-500 text-white inline-flex items-center text-xl px-4 py-1 rounded-md hover:cursor-pointer hover:bg-blue-600 card-btn">
          Add
          <FaBasketShopping className="ml-1 btn-icon-animate" />
        </button> */}
      {/* </p> */}
    </div>
  );
};

export default ProductCard;
