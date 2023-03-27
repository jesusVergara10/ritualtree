import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Isadmin from "../Components/Isadmin";
import AlbumDisplay from "../views/AlbumDisplay";
import Cart from "../views/Cart";
import Home from "../views/Home";
import Info from "../views/Info";
import Login from "../views/Login";
import Register from "../views/Register";
import Shop from "../views/Shop";
import Search from "../views/Search";
import EditProfile from "../views/EditProfile";
import ProductManagment from "../views/ProductManagment";
import CategoryManagment from "../views/CategoryManagment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/admin",
        element: <Isadmin />,
        children: [
          {
            path: "productmanagment",
            element: <ProductManagment />,
          },
          {
            path: "categorymanagment",
            element: <CategoryManagment />,
          },
        ],
      },
    ],
  },
  {
    path: "/editprofile",
    element: <EditProfile />,
  },
  {
    path: "/album",
    element: <AlbumDisplay />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/login", element: <Login /> },
]);

export default router;
