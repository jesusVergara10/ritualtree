import React from "react";
import {Link} from "react-router-dom"


const ShopAlbum = ({ albumInfo }) => {
  return (
    <div>
      <div>
        <Link to={"/albuminfo?id=" + albumInfo.id}>
          <img src={albumInfo.imageLink} className="object-contain h-80 w-80" />
        </Link>
      </div>
      <div>{albumInfo.artistName}</div>
      <div>{albumInfo.albumName}</div>
      <div>{albumInfo.price}</div>
      <button>Add to cart</button>
    </div>
  );
};

export default ShopAlbum;

//nombre de banda , nombre de album, precio, liga de la imagen
//boton de "Add to cart"
