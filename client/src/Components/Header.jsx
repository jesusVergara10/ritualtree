import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useLogoutMutation, useMeQuery} from "../store/service/userService"

// const Header = () => {
//   const navigate = useNavigate();
//   const [logout] = useLogoutMutation();

//   const handleClick = () =>{
//     logout();
//     navigate("/")
//   }
//   return (
//     <header>
//       <Link to={"/home"}> Home </Link>
     
//       <button onClick={handleClick}>Logout</button>
//     </header>
//   )
// }


function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-lg font-bold">
              Ritual Tree
            </Link>
            <Link to="/search" className="ml-4 text-white">
              Search
            </Link>
            <Link to="/shop" className="ml-4 text-white">
              Shop
            </Link>
            <Link to="/info" className="ml-4 text-white">
              Info
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="text-white">
              Cart
            </Link>
            <Link to="/login" className="ml-4 text-white"> Login </Link>
            <Link to="/admin/createproduct" className="ml-4 text-white"> Create Product</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

