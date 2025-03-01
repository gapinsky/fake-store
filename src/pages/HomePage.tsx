import Aside from "../components/aside/Aside";
import Cart from "../components/Cart";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "../contexts/CartProvider";

function HomePage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="relative flex">
          <Aside />
          <Cart />
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default HomePage;
