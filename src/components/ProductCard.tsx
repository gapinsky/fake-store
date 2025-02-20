import { Link } from "react-router-dom";

interface Product {
  category: string;
  image: string;
  price: number;
  title: string;
  id: number;
}

const ProductCard = ({ category, title, image, price, id }: Product) => {
  const effectiveCategory = category || "/all_products";
  const link = effectiveCategory
    .toLowerCase()
    .replace(" ", "_")
    .replace("'", "");
  return (
    <Link to={`${link}/${id}`}>
      <div className=" flex h-[380px] flex-col justify-between w-[300px] my-4 px-4 py-2 rounded-md  hover:cursor-pointer hover:scale-105">
        <div>
          <img
            src={image}
            alt={title}
            className="h-[200px] aspect-square object-center mx-auto"
          />
          <p className="text-lg my-2">{title}</p>
        </div>
        <p className="text-xl font-semibold">{price}$</p>
      </div>
    </Link>
  );
};

export default ProductCard;
