import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface Props {
  applyDiscount: React.Dispatch<React.SetStateAction<string>>;
}

const Discount = ({ applyDiscount }: Props) => {
  const [isDiscoutOpen, setIsDiscountOpen] = useState(false);
  const [isDiscoutApplied, setIsDiscoutApplied] = useState(false);
  const [isWrongCode, setIsWrongCode] = useState(false);
  const discountRef = useRef<HTMLInputElement>(null);
  const discountCode = "free";
  const handleAccordion = () => {
    setIsDiscountOpen((prevState) => !prevState);
  };

  const handleAddDiscount = () => {
    if (!discountRef.current) return;
    if (discountRef.current.value.toLowerCase() !== discountCode) {
      discountRef.current.focus();
      setIsWrongCode(true);
    }
    if (discountRef.current.value.toLowerCase() === discountCode) {
      applyDiscount("free");
      setIsWrongCode(false);
      setIsDiscoutApplied(true);
    }
  };
  return (
    <div className="text-xl my-5">
      <p className="text-sm ">(for testing purpose enter "free")</p>
      <p
        className=" py-1 w-full justify-between inline-flex items-end hover:cursor-pointer"
        onClick={handleAccordion}
      >
        Got a discount code?{" "}
        {isDiscoutOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </p>
      <div className={`${isDiscoutOpen ? "h-fit" : "h-0"} overflow-hidden`}>
        <label htmlFor="text" className="text-sm">
          {isDiscoutApplied
            ? "Free shipping activated!"
            : "Enter the discount code below:"}
        </label>
        <input
          ref={discountRef}
          disabled={isDiscoutApplied}
          type="text"
          className={` border-solid border-1 w-full p-1 text-lg ${
            isDiscoutApplied
              ? "bg-slate-300 text-slate-500 pointer-events-none"
              : ""
          }}`}
        />
        {isWrongCode && (
          <p className="text-sm text-red-500">This code doesn't exists.</p>
        )}
        <button
          disabled={isDiscoutApplied}
          onClick={handleAddDiscount}
          className={`mt-5 w-full border-solid border-2 p-1 text-lg  ${
            isDiscoutApplied
              ? "bg-slate-300 text-slate-500 hover:cursor-not-allowed"
              : "hover:bg-black hover:text-white hover:cursor-pointer"
          }`}
        >
          Add discount
        </button>
      </div>
    </div>
  );
};

export default Discount;
