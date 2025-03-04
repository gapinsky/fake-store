import Aside from "../components/aside/Aside";
import Cart from "../components/Cart";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "../contexts/CartProvider";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {  useState } from "react";
function HomePage() {
  const queryClient = new QueryClient();
  const [isVisible, setIsVisible] = useState(false);
 
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="relative  xl:flex" >
          <button
            className={`absolute top-1/2  z-30 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full border ${
              isVisible ? "right-5" : "-left-4"
            } xl:hidden`}
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </button>
          <Aside isVisible={isVisible} setIsVisible={setIsVisible} />
          <Cart />
          <div className="w-full overflow-hidden h-svh max-h-svh">
            <Outlet />
          </div>
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default HomePage;
