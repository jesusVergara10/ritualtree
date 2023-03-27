import React, { useContext } from "react";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { cartContext } from "./CartContext";
import { ThemeProvider } from "@mui/material/styles";
import { PrimaryMainTheme } from "../views/PrimaryMainTheme";
import { Link } from "react-router-dom";


const CartAlbum = ({ cartAlbumInfo, onRemove }) => {
  const { changeQuantity } = useContext(cartContext);

  return (
    <ThemeProvider theme={PrimaryMainTheme}>
    <Grid container sx={{display: "flex", flexWrap: "wrap", mt:1 }}>
      <Grid xs={4}  >
      <Link to={{ pathname: "/album", search: "?id=" + cartAlbumInfo.id }}>
        <img
          src={cartAlbumInfo.imageLink}
          alt="album image"
          className="flex object-contain max-h-[73%] max-w-[73%]"
        />
      </Link>
      </Grid>
      <Grid
        xs={4}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          alignItems: "flex-start",
        }}
      >
        <Grid container direction="column">
        <Grid>
            <div className="font-work-sans text-rtgreen ">{cartAlbumInfo.artistName}</div>
          </Grid>
          <Grid>
            <div className="font-archivo-black text-rtgreen uppercase">{cartAlbumInfo.albumName}</div>
          </Grid>
          <Grid>
            <div className="flex h-min w-[5.8vw] justify-around items-center border-2 border-rtgreen">
              <button
                onClick={() =>
                  changeQuantity(cartAlbumInfo.id, cartAlbumInfo.quantity - 1)
                }
                className="p-1 font-work-sans text-rtgreen"
              >
                -
              </button>
              <div className="p-1 font-work-sans text-rtgreen">{cartAlbumInfo.quantity}</div>
              <button
                onClick={() =>
                  changeQuantity(cartAlbumInfo.id, cartAlbumInfo.quantity + 1)
                }
                className="p-1 font-work-sans text-rtgreen"
              >
                +
              </button>
            </div>
          </Grid>
          <Grid  xs={4}>
            <button className="text-rtgreen underline" onClick={() => changeQuantity(cartAlbumInfo.id, 0)}>
              Remove
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <div className="float-right text-rtgreen font-work-sans h-[36vh]">
          ${cartAlbumInfo.price}
        </div>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default CartAlbum;
