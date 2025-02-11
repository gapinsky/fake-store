import Aside from "../components/Aside";
import Cart from "../components/Cart";

import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative flex ">
      <Aside />
      <Cart />
      <div className="w-5/6">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
