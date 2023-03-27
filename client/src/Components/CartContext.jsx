import React, { useState, createContext } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState({
    totalProducts: 0,
    cart: [],
    totalPrice: 0,
  });
  const addToCart = (product) => {
    let cartCopy = JSON.parse(JSON.stringify(cart));

    let ifProducts = cartCopy.cart.findIndex((p) => p.id === product.id);

    if (ifProducts > -1) {
      cartCopy.cart[ifProducts].quantity += product.quantity;
    } else {
      cartCopy.cart.push(product);
    }
    cartCopy.totalProducts += product.quantity;
    cartCopy.totalPrice += product.price * product.quantity;
    setCart(cartCopy);
  };

  const getTotalproducts = () => {
    return cart.totalProducts;
  };

  const changeQuantity = (id, quantity) => {
    let cartCopy = JSON.parse(JSON.stringify(cart));
    const cartIndex = cartCopy.cart.findIndex((p) => p.id === id);
    cartCopy.cart[cartIndex].quantity = quantity;
    if(quantity ===0){
      cartCopy.cart.splice(cartIndex,1)
    }
    setCart(cartCopy);
  };

  const cleanCart = () => {
    setCart({ totalProducts: 0, cart: [], totalPrice: 0 });
  };
  const cartData = {
    cart,
    addToCart,
    getTotalproducts,
    cleanCart,
    changeQuantity
  };

  return <Provider value={cartData}>{children}</Provider>;
};
export default CartContextComponent;
