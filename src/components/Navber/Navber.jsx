import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navber() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const handleScroll = () => {
        setIsScroll(window.scrollY > 10)
    }
    window.addEventListener('scroll',handleScroll)
    // return window.removeEventListener('scroll',handleScroll)
  }, [])
  return (
    <header className={`bg-white z-50 fixed top-0 right-0 left-0 ${isScroll ? 'shadow-2xl bg-white' : 'bg-transparent'}`}>
      <nav className="max-w-350 mx-auto px-10 flex justify-between items-center  md:h-[10vh] h-[8vh]">
        {/* logo */}
        <Link to='/' className="text-3xl font-bold">
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
              to='/about'
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/processdas'
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* input */}

        <div className="flex items-center gap-x-5">
          <div className="md:flex items-center p-1 border-2 border-orange-500 rounded-full hidden">
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
          </div>

          <a href="" className="text-2xl text-zinc-800">
            <FaHeart />
          </a>
          <a href="" className="text-2xl text-zinc-800">
            <HiShoppingBag />
          </a>
          <button
            className="text-zinc-800  text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <IoCloseSharp /> : <AiOutlineMenu />}
          </button>
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
              to='/'
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/processdas'
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Contact Us
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

    // <header className="">
    //   <nav className="max-w-350 mx-auto px-10 h-[10vh] flex justify-between items-center">
    //     <a href="" className="text-3xl font-bold">
    //       Gr<span className="text-orange-500">O</span>city
    //     </a>
    //     <ul className="flex items-center gap-x-15 tracking-wider">
    //       <li>
    //         <a
    //           href=""
    //           className="font-semibold text-zinc-800 hover:text-orange-500 text-lg"
    //         >
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href=""
    //           className="font-semibold text-zinc-800 hover:text-orange-500 text-lg"
    //         >
    //           About us
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href=""
    //           className="font-semibold text-zinc-800 hover:text-orange-500 text-lg"
    //         >
    //           Process
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href=""
    //           className="font-semibold text-zinc-800 hover:text-orange-500 text-lg"
    //         >
    //           Contact Us
    //         </a>
    //       </li>
    //     </ul>
    //     <div className="flex items-center gap-x-5">
    //       <div className="flex items-center gap-x-2 p-1 border-2 border-orange-500 rounded-full">
    //         <input type="text" placeholder="search" autoComplete="off" className="px-3 focus:outline-none" />
    //         <button className="bg-gradient-to-b from-orange-300 to-orange-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
    //           <IoSearchSharp className="text-lg text-white" />
    //         </button>
    //       </div>
    //      <a href="" className="text-xl text-zinc-800">
    //        <FaHeart />
    //      </a>
    //      <a href="" className="text-xl text-zinc-800">
    //        <HiShoppingBag />
    //      </a>
    //     </div>
    //   </nav>
    // </header>
  );
}

export default Navber;
