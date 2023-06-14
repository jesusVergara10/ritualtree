import React, { useContext } from "react";
import { Unstable_Grid2 as Grid } from "@mui/material";
import CartAlbum from "../Components/CartAlbum";
import { cartContext } from "../Components/CartContext";
import { ThemeProvider } from "@mui/material/styles";
import { PrimaryMainTheme } from "../views/PrimaryMainTheme";

const Cart = () => {
  const { cart, getTotalproducts, cleanCart } = useContext(cartContext);

  const removeAlbum = (album) => {
    setCartInfo(
      cart.cart.filter((filteredAlbum) => filteredAlbum.id !== album.id)
    );
  };

  return (
    <ThemeProvider theme={PrimaryMainTheme}>
    <Grid
      container
      sx={{
        "--Grid-borderWidth": "2px",
        borderColor: "primary.main",
        "& > div": {
          borderBottom: "var(--Grid-borderWidth) solid",
          borderColor: "primary.main",
          mt:"5%",
        },
      }}
    >
      {cart.cart.map((album, i) => {
        return (
          <Grid container xs={12} key={i}>
            <CartAlbum
              cartAlbumInfo={album}
              onRemove={() => removeAlbum(album)}
            />
          </Grid>
        );
      })}
    </Grid>
    </ThemeProvider>
  );
};

export default Cart;
