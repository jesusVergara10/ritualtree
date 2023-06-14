import React, { useState } from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);
const miEstilo =  (menuOpen ? "opacity-100" : "opacity-0") +
" flex flex-wrap md:bg-transparent bg-white md:opacity-100 transition-all ease-in duration-500 w-[50vw] md:w-[100vw] md:flex-row md:justify-between md:h-16 "
  const menu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed md:top-0 md:left-0 md:w-full md:z-10 bg-transparent">
      <div className="md:max-w-7xl md:mx-auto md:px-4 flex ">
        <Link to="/" className="text-rtgreen text-lg font-archivo-black">
          RITUAL TREE
        </Link>
        <div className="text-3x1 cursor-pointer md:hidden block">
          <ion-icon name="menu" onClick={menu}></ion-icon>
        </div>
        <div
          className={miEstilo}
        >
          <div className="md:flex md:items-center md:flex-row md:static flex flex-col">
            <Link
              to="/search"
              className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans"
            >
              SEARCH
            </Link>
            <Link
              to="/shop"
              className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans"
            >
              SHOP
            </Link>
            <Link
              to="/info"
              className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans"
            >
              INFO
            </Link>

            {currentUser?.result?.role === "admin" && (
              <Link
                to="/admin/productmanagment"
                className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans"
              >
                PRODUCT MANAGEMENT
              </Link>
            )}

            {currentUser?.result?.role === "admin" && (
              <Link
                to="/admin/categorymanagment"
                className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans"
              >
                CATEGORY MANAGEMENT
              </Link>
            )}
          </div>
          <div className="md:flex md:items-center md:flex-row flex flex-col">
            <Link
              to="/cart"
              className="md:ml-4 md:my-0 mx-4 my-4 text-rtgreen text-xs font-work-sans"
            >
              CART
            </Link>
            {currentUser?.result ? (
              <button
                onClick={handleClick}
                className="md:ml-4 md:my-0 mx-4 my-4 font-work-sans text-xs text-rtgreen uppercase"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans"
                >
                  {" "}
                  LOGIN{" "}
                </Link>
                <Link
                  to="/register"
                  className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans"
                >
                  {" "}
                  REGISTER{" "}
                </Link>
              </>
            )}
            {currentUser?.result && (
              <Link
                to={"/editprofile"}
                className="md:ml-4 md:my-0 mx-4 my-4 text-xs text-rtgreen font-work-sans uppercase"
              >
                Hola {currentUser.result.name}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
