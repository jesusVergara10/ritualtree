import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation, useMeQuery } from "../store/service/userService";

function Header() {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { data: currentUser } = useMeQuery();
  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-black text-lg font-archivo-black">
              RITUAL TREE
            </Link>
            <Link
              to="/search"
              className="ml-4 text-xs text-black font-work-sans"
            >
              SEARCH
            </Link>
            <Link to="/shop" className="ml-4 text-xs text-black font-work-sans">
              SHOP
            </Link>
            <Link to="/info" className="ml-4 text-xs text-black font-work-sans">
              INFO
            </Link>

            {currentUser?.result?.role === "admin" && (
              <Link
                to="/admin/productmanagment"
                className="ml-4 text-xs text-black font-work-sans"
              >
                PRODUCT MANAGEMENT
              </Link>
            )}

            {currentUser?.result?.role === "admin" && (
              <Link
                to="/admin/categorymanagment"
                className="ml-4 text-xs text-black font-work-sans"
              >
                CATEGORY MANAGEMENT
              </Link>
            )}
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="text-black text-xs font-work-sans">
              CART
            </Link>
            {currentUser?.result ? (
              <button
                onClick={handleClick}
                className="ml-4 text-xs font-work-sans text-black uppercase"
              >
                Logout
              </button>
            ) : (
              <>
              <Link
                to="/login"
                className="ml-4 text-xs text-black font-work-sans"
              >
                {" "}
                LOGIN{" "}
              </Link>
              <Link
                to="/register"
                className="ml-4 text-xs text-black font-work-sans"
              >
                {" "}
                REGISTER{" "}
              </Link>
              </>
              
            )}
            {currentUser?.result && (
              <Link
                to={"/editprofile"}
                className="ml-4 text-xs text-black font-work-sans uppercase"
              >
                HOLA {currentUser.result.name}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
