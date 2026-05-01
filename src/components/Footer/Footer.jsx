import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-100 py-20">

      <div className="max-w-350 mx-auto px-10 flex flex-wrap gap-y-12">

        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500">O</span>city
          </a>
          <h5 className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </h5>
          <p className="text-zinc-800 mt-6">2026 $copy; All Rights Reserve </p>
        </div>

        <ul className="flex-1">
          <li>
            <h4 className="text-2xl font-bold text-zinc-800">Company</h4>
          </li>
          <li className="mt-5">
            <a className="text-zinc-800 hover:text-orange-600" href="#">About Us</a>
          </li>
           <li className="mt-5">
            <a className="text-zinc-800 hover:text-orange-600" href="#">FAQs</a>
          </li>
        </ul>

         <ul className="flex-1">
          <li>
            <h4 className="text-2xl font-bold text-zinc-800">Support</h4>
          </li>
          <li className="mt-5">
            <a className="text-zinc-800 hover:text-orange-600" href="#">Support Center</a>
          </li>
           <li className="mt-5">
            <a className="text-zinc-800 hover:text-orange-600" href="#">FeedBack</a>
          </li>
          <li className="mt-5">
            <a className="text-zinc-800 hover:text-orange-600" href="#">Contact Us</a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h4 className="text-2xl font-bold text-zinc-800">Stay Cannected</h4>
          </li>
          <li className="mt-5">
            <a className="text-zinc-800 hover:text-orange-600" href="#">Question or feedBack? <br /> we'd love to hear from you</a>
          </li>

          <div className="flex mt-5 p-1 bg-white rounded-lg border-2 border-amber-600">
            <input type="email" placeholder="Email Address" autoComplete="off" className="h-[5vh] pl-4 focus:outline-none" />
            <button className="flex-1 flex justify-center items-center bg-gradient-to-b from-orange-300 to-orange-500 text-2xl text-white p-2 rounded-lg cursor-pointer">
                <IoIosArrowForward />
            </button>
          </div>
           
        </ul>

      </div>

    </footer>
  );
}

export default Footer;
