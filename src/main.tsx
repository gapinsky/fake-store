import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import MensPage from "./pages/MensPage.tsx";
import WomensPage from "./pages/WomensPage.tsx";
import JeweleryPage from "./pages/JeweleryPage.tsx";
import Electronics from "./pages/Electronics.tsx";
import Main from "./components/homepage/Main.tsx";
import CartPage from "./pages/CartPage.tsx";
import All from "./pages/All.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/all_products",
        element: <All />,
      },
      {
        path: "/mens_clothing",
        element: <MensPage />,
      },
      {
        path: "/womens_clothing",
        element: <WomensPage />,
      },
      {
        path: "/jewelery",
        element: <JeweleryPage />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
