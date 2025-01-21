import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Goods from "./components/Goods";
import { getData as goodsLoader } from "./data";
import ShopCart from "./components/SopCart";
import App from "./components/App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: goodsLoader,
    children: [
      { index: true,
        element: <HomePage />
      },
      {
        path: "/products",
        element: <Goods />,
        children: [
          {
            path: 'cart',
            element: <ShopCart/>
          }
    
        ]
      },
      {
        path: "products/:productId",
        element: <button>dsdfsdfsdfsdf</button>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
