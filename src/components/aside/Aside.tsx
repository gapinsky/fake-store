import { Link } from "react-router-dom";
import AsideSocials from "./AsideSocials";
import CategoryItem from "./CategoryItem";
type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const Aside = ({ isVisible, setIsVisible }: Props) => {
  return (
    <aside
      className={`fixed h-svh w-svw flex-col justify-between bg-white drop-shadow-lg z-20 ${
        isVisible ? "flex" : "hidden"
      } xl:flex xl:relative xl:w-fit`}
    >
      <div onClick={() => setIsVisible(false)}>
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
