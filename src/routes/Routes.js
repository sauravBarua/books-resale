import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/addProduct/AddProduct";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Home from "../layout/home/Home";
import Main from "../layout/main/Main";
import Blog from "../pages/blog/Blog";
import Buyer from "../pages/buyer/Buyer";
import Category from "../pages/category/Category";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import Login from "../pages/login/Login";
import MyOrders from "../pages/myOrders/MyOrders";
import MyProducts from "../pages/myProducts/MyProducts";
import Seller from "../pages/seller/Seller";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>,
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Category",
        element: <Category></Category>,
      },
      {
        path: "/categorypage",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myproducts",

        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/categories/:id",

      //   element: (
      //     <PrivateRoute>
      //       <AdvertisementModal></AdvertisementModal>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/buyers",
        element: <Buyer></Buyer>,
      },
      {
        path: "/dashboard/sellers",
        element: <Seller></Seller>,
      },
    ],
  },
]);
