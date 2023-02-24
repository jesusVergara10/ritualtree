import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Isadmin from "../Components/Isadmin";
import AlbumDisplay from "../views/AlbumDisplay";
import AllProducts from "../views/AllProducts";
import Cart from "../views/Cart";
import CreateProduct from "../views/CreateProduct";
import DeleteProduct from "../views/DeleteProduct";
import Home from "../views/Home";
import Info from "../views/Info";
import Login from "../views/Login";
import Register from "../views/Register";
import Shop from "../views/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path:"/shop",
        element: <Shop/>
      },
      {
        path:"/albuminfo",
        element: <AlbumDisplay/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/info",
        element: <Info/>
      },
      //   {
      //     path: "/admin/createproduct",
      //     element: (
      //       <Isadmin>
      //         <CreateProduct />
      //       </Isadmin>
      //     ),
      //   },
      //   {
      //     path: "admin/deleteproduct",
      //     element: (
      //       <Isadmin>
      //         <DeleteProduct />
      //       </Isadmin>
      //     ),
      //   },

      {
        path: "admin",
        element: <Isadmin />,
        children: [
          {
            path: "createproduct",
            element: <CreateProduct />,
          },
          {
            path: "deleteproduct",
            element: <DeleteProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/login", element: <Login /> },
]);

export default router;
