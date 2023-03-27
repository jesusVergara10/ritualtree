import React, { useContext } from "react";
import { cartContext } from "../Components/CartContext";
import { useSearchParams } from "react-router-dom";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { useGetAlbumByIdQuery } from "../store/service/albumService";
import Header from "../Components/Header";

const AlbumDisplay = () => {
  const [searchParams] = useSearchParams();

  const { data: AlbumToDisplayData, isLoading } = useGetAlbumByIdQuery(
    searchParams.get("id")
  );
  const { addToCart } = useContext(cartContext);

  const handleClick = () => {
    const albumObjct = {
      quantity: 1,
      artistName: AlbumToDisplayData.results.artist,
      albumName: AlbumToDisplayData.results.name,
      price: AlbumToDisplayData.results.price,
      imageLink: `/api/album/${AlbumToDisplayData.results.id}/image`,
      id: AlbumToDisplayData.results.id,
    };
    addToCart(albumObjct);
  };
    

  return (
    <Grid container sx={{ mt: 5, p: 2 }}>
      <Header />
      <Grid xs={6}>
        {AlbumToDisplayData && (
          <img
            className="flex-1"
            src={`/api/album/${AlbumToDisplayData.results.id}/image`}
            alt="album image"
          />
        )}
      </Grid>
      <Grid xs={6}>
        {AlbumToDisplayData && (
          <div className="flex flex-row flex-wrap p-12 content-start bg-rtgrey w-full h-full">
            <div className="font-work-sans text-base w-5/6 text-rtgreen uppercase">
              {AlbumToDisplayData.results.artist}
            </div>
            <div className="font-work-sans w-1/6 text-base text-rtgreen">
              ${AlbumToDisplayData.results.price}
            </div>
            <div className="uppercase text-rtgreen text-lg w-full font-bold font-archivo-black-sans">
              {AlbumToDisplayData.results.name}
            </div>
            <div className="font-work-sans my-4 text-rtgreen text-base">
              {AlbumToDisplayData.results.description}
            </div>
            <div className="flex bg-rtgreen mt-6 w-32 h-9 justify-center">
              <button
                onClick={() => handleClick()}
                className="text-rtgrey text-sm font-archivo-black font-bold uppercase"
              >
                add to cart
              </button>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default AlbumDisplay;
