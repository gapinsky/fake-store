import { Link } from "react-router-dom";
import AsideSocials from "./AsideSocials";
import CategoryItem from "./CategoryItem";
const Aside = () => {
  return (
    <aside className=" h-screen  flex flex-col justify-between bg-white drop-shadow-lg ">
      <div>
        <Link to="/">
          <h1 className=" text-3xl font-bold p-8 ">EverythingShop</h1>
        </Link>
        <ul className=" mt-5 text-2xl px-8">
          <h2 className=" mb-2 px-2 text-xl">Category:</h2>
          <CategoryItem>All products</CategoryItem>
          <CategoryItem>Men's clothing</CategoryItem>
          <CategoryItem>Women's clothing</CategoryItem>
          <CategoryItem>Jewelery</CategoryItem>
          <CategoryItem>Electronics</CategoryItem>
        </ul>
      </div>
      <AsideSocials />
    </aside>
  );
};

export default Aside;
