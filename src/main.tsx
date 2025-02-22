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
import ProductPage from "./pages/ProductPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";

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
        path: "/:productId",
        element: <ProductPage />,
      },
      {
        path: "/all_products",
        element: <All />,
      },
      { path: "/all_products/:productId", element: <ProductPage /> },
      {
        path: "/mens_clothing",
        element: <MensPage />,
      },
      { path: "/mens_clothing/:productId", element: <ProductPage /> },
      {
        path: "/womens_clothing",
        element: <WomensPage />,
      },
      { path: "/womens_clothing/:productId", element: <ProductPage /> },
      {
        path: "/jewelery",
        element: <JeweleryPage />,
      },
      { path: "/jewelery/:productId", element: <ProductPage /> },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      { path: "/electronics/:productId", element: <ProductPage /> },
      {
        path: "/cart",
        element: <CartPage />,
      },
      { path: "/cart/checkout", element: <CheckoutPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
