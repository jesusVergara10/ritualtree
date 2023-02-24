import React from "react";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";

const CartAlbum = ({ cartAlbumInfo, onRemove }) => {
  return (
    <Grid container>
      <Grid xs={3}>
        <img
          src={cartAlbumInfo.imageLink}
          alt="album image"
          className="object-contain h-56 w-56"
        />
      </Grid>
      <Grid xs={3} display="flex">
        <Grid container direction="column" spacing={3}>
          <Grid>
            <div>{cartAlbumInfo.albumName}</div>
          </Grid>
          <Grid>
            <div>{cartAlbumInfo.artistName}</div>
          </Grid>
          <Grid>
            <div className="flex h-min w-min justify-center items-center  border-2 border-black">
              <button className="p-1">-</button>
              <div className="p-1">1</div>
              <button className="p-1">+</button>
            </div>
          </Grid>
          <Grid>
            <button onClick={onRemove} >Remove</button>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={6}>
        <div className="max-w-min float-right">${cartAlbumInfo.price}</div>
      </Grid>
    </Grid>
  );
};

export default CartAlbum;
