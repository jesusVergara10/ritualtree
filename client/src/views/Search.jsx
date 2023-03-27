import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { useGetAlbumSearchQuery } from "../store/service/albumService";
import ShopAlbumToo from "../Components/ShopAlbumToo"
import HeaderThree from "../Components/HeaderThree";


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [submitQuery, setSubmitQuery] = useState("");

  const { data: albumSearchResponse, isLoading } =
    useGetAlbumSearchQuery(submitQuery);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSubmitQuery(searchQuery);
  };

  const onSearchChange = (ref) => {
    console.log(ref.target.value);
    const querySearchParam = ref.target.value;
    setSearchQuery(querySearchParam);
  };

  return (
    <div className="w-screen h-screen m-auto bg-rtgreen">
      <HeaderThree />
      {/* <input type="search"></input> */}
      <Grid container sx={{ height: "40%" }}>
        <Grid
          display="flex"
          xs={12}
          alignItems="flex-end"
          justifyContent="center"
        >
          <form className="w-4/5 font-work-sans uppercase" onSubmit={onFormSubmit}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Search Albums"
              onChange={onSearchChange}
              variant="standard"
            />
          </form>
        </Grid>
      </Grid>
      <div className="flex flex-wrap justify-center w-screen h-screen mt-10 bg-rtgreen">
        {albumSearchResponse &&
          albumSearchResponse.results.map((album, i) => {
            return (
              <div>
                <ShopAlbumToo
                  albumInfo={{
                    artistName: album.artist,
                    albumName: album.name,
                    price: album.price,
                    imageLink: `/api/album/${album.id}/image`,
                    id: album.id,
                  }}
                  key={i}
                ></ShopAlbumToo>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
