import { CartProduct, useCart } from "../contexts/context";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
interface Props {
  item: CartProduct;
}

const CartItem = ({ item }: Props) => {
  const { cart, setCart } = useCart();
  // const title =
  //   item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;

  const removeItem = () => {
    const removedItemArray = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(removedItemArray);
  };

  const increaseItems = () => {
    const increasedItemArray = cart.map((increasedItem) =>
      increasedItem.id === item.id
        ? { ...increasedItem, quantity: increasedItem.quantity + 1 }
        : increasedItem
    );
    setCart(increasedItemArray);
  };

  const decreaseItems = () => {
    const decreasedItemArray = cart.map((decreasedItem) => {
      if (decreasedItem.id === item.id && decreasedItem.quantity > 1) {
        return { ...decreasedItem, quantity: decreasedItem.quantity - 1 };
      } else {
        return decreasedItem;
      }
    });
    setCart(decreasedItemArray);
  };

  return (
    <li className="inline-flex items-center justify-between  w-full p-1 text-lg   ">
      <div className="inline-flex items-center">
        <button
          onClick={removeItem}
          className="p-2 py-5 text-2xl min-h-full mr-2 hover:cursor-pointer  delete-btn hover:bg-red-400"
        >
          <RiDeleteBin6Line className="btn-icon-animate" />
        </button>
        <img
          src={item.image}
          alt={item.title}
          className="max-h-16 aspect-square p-2 "
        />
        <p className="px-2 ">{item.title}</p>
      </div>
      <div className="inline-flex items-center mr-2">
        <span className="flex items-center px-2 text-xl">
          <button
            className="hover:cursor-pointer"
            onClick={decreaseItems}
            disabled={item.quantity === 1}
          >
            <FiMinusCircle />
          </button>
          <p className="px-2 ">{item.quantity}</p>
          <button className="hover:cursor-pointer" onClick={increaseItems}>
            <FiPlusCircle />
          </button>
        </span>
        <p>{item.total.toFixed(2)}$</p>
      </div>
    </li>
  );
};

export default CartItem;
