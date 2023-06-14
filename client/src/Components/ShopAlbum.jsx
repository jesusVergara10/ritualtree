import React, { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";

const ShopAlbum = ({ albumInfo }) => {
  const { addToCart } = useContext(cartContext);

  const handleClick = () => {
    const albumObjct = {
      ...albumInfo,
      quantity: 1,
    };
    addToCart(albumObjct);
  };

  console.log(albumInfo);
  return (
    <div className="m-[.1rem] mt-16 -mb-8">
      <div>
        <Link to={{ pathname: "/album", search: "?id=" + albumInfo.id }}>
          <img src={albumInfo.imageLink} className="object-contain mb-2 h-80 w-80" />
        </Link>
      </div>
      <div className="w-2/3 text-rtgreen text-sm font-work-sans uppercase">
        {albumInfo.artistName}
      </div>
      <div className="flex relative bottom-4 bg-rtgreen w-28 h-7 justify-center float-right">
        <button
          onClick={() => handleClick()}
          className="text-rtgrey text-xs font-archivo-black font-bold uppercase"
        >
          Add to cart
        </button>
      </div>
      <div className="text-rtgreen text-sm font-bold font-archivo-black-sans uppercase">
        {albumInfo.albumName}
      </div>
      <div className="text-rtgreen text-sm font-work-sans uppercase">
        ${albumInfo.price}
      </div>
    </div>
  );
};

export default ShopAlbum;
