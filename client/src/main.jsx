import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";
import CartContextComponent from "./Components/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartContextComponent>
        <RouterProvider router={router} />
      </CartContextComponent>
    </Provider>
  </React.StrictMode>
);
