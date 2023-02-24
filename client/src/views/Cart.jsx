import React, { useState } from "react";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";
import CartAlbum from "../Components/CartAlbum";

const Cart = () => {
  const [cartInfo, setCartInfo] = useState([
    {
      imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
      artistName: "Anna Von Hausswolf",
      albumName: "Live at Montreaux",
      price: 100,
      id: 1,
    },
    {
      imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
      artistName: "Von Hausswolf",
      albumName: "at Montreaux",
      price: 100,
      id: 2,
    },
    {
      imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
      artistName: "Anna Von ",
      albumName: "Live",
      price: 100,
      id: 3,
    },
    {
      imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
      artistName: "A Hausswolf",
      albumName: "Live Montreaux",
      price: 100,
      id: 4,
    },
  ]);

  const removeAlbum = (album)=>{
    setCartInfo(cartInfo.filter(filteredAlbum => filteredAlbum.id !== album.id ))
}

  return (
    <Grid
      container
      spacing={5}
      sx={{
        "--Grid-borderWidth": "3px",
        borderColor: "divider",
        "& > div": {
          borderBottom: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
        },
      }}
    >
      {cartInfo.map((album, i) => {
        return (
          <Grid container xs={12} key={i}>
            <CartAlbum cartAlbumInfo={album} onRemove={()=>removeAlbum(album)}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cart;
