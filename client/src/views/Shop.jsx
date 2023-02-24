import React from 'react'
import ShopAlbum from '../Components/ShopAlbum'

const Shop = () => {

    const albumsToDisplay = [
        {
            imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
            artistName: "Anna Von Hausswolf",
            albumName: "Live at Montreaux",
            price:100,
            id:1
        },
        {
            imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
            artistName: "Von Hausswolf",
            albumName: "at Montreaux",
            price:100,
            id:2

        },
        {
            imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
            artistName: "Anna Von ",
            albumName: "Live",
            price:100,
            id:3

        },
        {
            imageLink: "/public/Vinilos/AnnaVHW/LM_1.jpeg",
            artistName: "A Hausswolf",
            albumName: "Live Montreaux",
            price:100,
            id:4

        }
    ]

  return (
    <div className='p-20'> 
        <div className='flex flex-wrap justify-between'>
            {albumsToDisplay.map((album, i)=>{
                return (
                <ShopAlbum albumInfo={album} key={i}>
                </ShopAlbum>
                )
            })}
        </div>
    </div>
  )
}

export default Shop