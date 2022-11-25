import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/addProduct/AddProduct";
import Home from "../layout/home/Home";
import Main from "../layout/main/Main";
import Blog from "../pages/blog/Blog";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
