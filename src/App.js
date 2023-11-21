import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./stores/main";

import Products from "./pages/products";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import Template from "./organisms/template";
import CartPage from "./pages/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Products />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}