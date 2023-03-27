import React from "react";
import ShopAlbum from "../Components/ShopAlbum";
import { useGetAllAlbumQuery } from "../store/service/albumService";

const Shop = () => {
  const { data: allAlbumsResponse, isLoading } = useGetAllAlbumQuery();
  return (
    <div className="bg-rtgrey">
      <div className="flex flex-wrap justify-evenly">
        {allAlbumsResponse &&
          allAlbumsResponse.results.map((album, i) => {
            return (
              <ShopAlbum
                albumInfo={{
                  artistName: album.artist,
                  albumName: album.name,
                  price: album.price,
                  imageLink: `/api/album/${album.id}/image`,
                  id: album.id,
                }}
                key={i}
              ></ShopAlbum>
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
