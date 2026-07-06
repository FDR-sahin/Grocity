import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import us from "../../assets/user.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirebase } from "../../context/Firebase";

function Navber() {
  const { items } = useSelector((state) => state.cart);
  const { wishlistItem } = useSelector((state) => state.wishlist);
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const firebase = useFirebase();
  const user = firebase.user;
  // console.log(user);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // return window.removeEventListener('scroll',handleScroll)
  }, []);
  return (
    <header
      className={`bg-white z-50 fixed top-0 right-0 left-0 ${isScroll ? "shadow-2xl bg-white" : "bg-transparent"}`}
    >
      <nav className="max-w-350 mx-auto px-10 flex justify-between items-center  md:h-[10vh] h-[8vh]">
        {/* logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>city
        </Link>

        {/* menu link */}

        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/processdas"
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* input */}

        <div className="flex items-center gap-x-5">
          <div className="md:flex items-center h-[5vh] p-1 border-2 border-orange-500 rounded-full hidden">
            {/* input fild */}
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 mb-1 h-[2vh] px-3 focus:outline-none pt-1.5 "
            />
            <button className="bg-gradient-to-b from-orange-300 to-orange-500 text-xl w-8 h-8 text-white flex justify-center items-center rounded-full">
              <IoSearchSharp />
            </button>
          </div>

          {user ? (
            <>
              <Link to="/wishlist" className="relative text-2xl text-zinc-800">
                {wishlistItem.length == 0 ? (
                  ""
                ) : (
                  <h1 className="text-[15px] bg-red-600 text-white p-3 h-5 w-5 flex items-center justify-center rounded-full absolute bottom-3 left-4 z-10">
                    {" "}
                    {wishlistItem.length}
                  </h1>
                )}
                <FaHeart />
              </Link>
              <Link
                to="/addtocart"
                className="relative text-2xl text-zinc-800 z-8"
              >
                {items.length == 0 ? (
                  ""
                ) : (
                  <h1 className="text-[15px] bg-red-600 text-white p-3 h-5 w-5 flex items-center justify-center rounded-full absolute bottom-3 left-4 z-10">
                    {" "}
                    {items.length}
                  </h1>
                )}

                <HiShoppingBag />
              </Link>
              

              <div className="relative">
                <div
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-amber-200 rounded-full overflow-hidden">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    ) : (
                      <img
                        src={us}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    )}
                  </div>

                  <div className="hidden md:block">
                    <p className="text-xl font-bold text-orange-400">
                      {user.displayName}
                    </p>
                    <p className="text-sm">{user.email}</p>
                  </div>
                </div>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50">
                    <button
                      onClick={firebase.logOut}
                      className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              <button
                className="text-zinc-800  text-3xl md:hidden"
                onClick={toggleMenu}
              >
                {showMenu ? <IoCloseSharp /> : <AiOutlineMenu />}
              </button>
             </>
              
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 bg-orange-500 text-white rounded-lg hidden md:block"
              >
                Login
              </Link>
              <button
                className="text-zinc-800  text-3xl md:hidden"
                onClick={toggleMenu}
              >
                {showMenu ? <IoCloseSharp /> : <AiOutlineMenu />}
              </button>
            </>
          )}
         
          
        </div>

        {/* movile menu */}

        <ul
          className={`flex flex-col gap-y-10 bg-amber-500/20 backdrop-blur-xl shadow-xl p-9 rounded-lg items-center md:hidden absolute top-25 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
            showMenu
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/processdas"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Login
            </Link>
          </li>
          <li className="flex items-center  p-1 border-2 border-orange-500 rounded-full md:hidden">
            {/* input fild */}
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 mb-1.5 h-[3vh] px-3 focus:outline-none pt-2"
            />
            <button className="bg-gradient-to-b from-orange-300 to-orange-500 text-xl w-10 h-10 text-white flex justify-center items-center rounded-full">
              <IoSearchSharp />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navber;
