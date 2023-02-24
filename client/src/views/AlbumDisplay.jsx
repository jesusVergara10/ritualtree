import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";

const AlbumDisplay = () => {
    const [searchParams] = useSearchParams();
    const album = {
        imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
        artistName: "A Hausswolf",
        albumName: "Live Montreaux",
        description: "Loreasdjkhvadljalfjka",
        price:100,
        id:4
    }
  return (
    <Grid container>
       <Grid xs={6} >
        <img src={album.imageLink} alt="album image" />
       </Grid>

       <Grid xs={6} >
       <div>
       {album.artistName}
       </div>
       <div>
       {album.albumName}
       </div>
       <div>
       {album.description}
       </div>
       <div>
       {album.price}
       </div>
       <div>
        <button>add to cart</button>
       </div>
       </Grid>
    </Grid>
    
  )
}

export default AlbumDisplay