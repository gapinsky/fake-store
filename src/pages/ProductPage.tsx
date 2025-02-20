import { useNavigate, useParams } from "react-router-dom";
import useFetchProducts from "../customHooks/useFetchProducts";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { FaBasketShopping } from "react-icons/fa6";
import { CartProduct, useCart } from "../contexts/context";
interface Product {
  quantity: number; //dodane
  image: string;
  id: number;
  description: string;
  title: string;
  price: number;
  category: string;
  rating: { rate: number; count: number };
}

interface FetchProductsResult {
  data: Product[];
  isLoading: boolean;
  error: any;
}

const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.productId ? parseInt(params.productId) : params.productId;

  const {
    data, //usuniete : products
    isLoading,
    error,
  } = useFetchProducts("") as FetchProductsResult;

  const products = data?.map((item) => ({ ...item, quantity: 1 }));
  const productPage = products?.find((product) => product.id === id);

  const cartProduct = {
    ...productPage,
  } as CartProduct;

  const { cart, setCart } = useCart();

  const addToCart = (product: CartProduct) => {
    const exists = cart.some((item) => item.id === product.id);
    if (!exists) setCart([...cart, product]);
    if (exists) {
      const updatedItem = cart
        .map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
        })
        .filter((item): item is CartProduct => item !== undefined);
      setCart([
        ...cart.filter((item) => item.id !== product.id),
        ...updatedItem,
      ]);
    }
  };
  // console.log(cartItemObject);
  // console.log(cart);

  if (isLoading) return <Loading />;
  if (error) return <NotFound />;

  return (
    <div className=" h-full flex flex-col justify-center items-center">
      <div className="relative flex p-5 justify-center max-w-[80%] ">
        <button
          onClick={() => navigate(-1)}
          className="font-bold px-8 py-1 text-2xl absolute left-0 -top-10 hover:cursor-pointer hover:bg-slate-100 rounded-lg "
        >
          Back
        </button>
        <img
          src={productPage?.image}
          alt={productPage?.title}
          className="w-[500px] object-center aspect-square mr-5"
        />
        <div className=" p-5 flex flex-col justify-between">
          <div className=" h-[80%] flex flex-col justify-evenly">
            <p className="text-3xl font-semibold">{productPage?.title}</p>
            <p className="text-xl">
              <span className="font-semibold">Category: </span>
              {productPage &&
                productPage.category.charAt(0).toUpperCase() +
                  productPage.category.slice(1)}
            </p>
            <p className="text-xl max-w-[500px]">
              <span className="font-semibold">Description: </span>
              {productPage?.description}
            </p>
            <span className="inline-flex text-xl ">
              <p>
                <span className="font-semibold">Rating: </span>
                {productPage?.rating.rate}/5⭐
              </p>
              <p>of {productPage?.rating.count} reviews</p>
            </span>
          </div>
          <span className="inline-flex items-center justify-between w-full place-self-end text-2xl">
            <p className="mr-5">Price: {productPage?.price}$</p>
            <button
              onClick={() => addToCart(cartProduct)}
              className="bg-blue-500 text-white inline-flex items-center rounded-md px-4 py-2 hover:cursor-pointer hover:bg-blue-600 card-btn"
            >
              <FaBasketShopping className="mr-2 btn-icon-animate" /> Add to cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
