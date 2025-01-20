import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Goods from "./components/Goods";
import { getData as goodsLoader } from "./data";
import ShopCart from "./components/SopCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "products/:productId",
    element: <button>dsdfsdfsdfsdf</button>,
  },
  {
    path: "/products",
    element: <Goods />,
    loader: goodsLoader,
    children: [
      {
        path: 'cart',
        element: <ShopCart/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
