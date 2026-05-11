import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import goti from '../../assets/gori.webp'

// function Gullary() {
//   return (
//     <div className="py-5 max-w-350 mx-auto px-10">
//       <div>
//         <div className="bg-zinc-100 p-5 max-w-[300px]  rounded flex flex-col items-center">
//           <div className="w-full h-40 flex justify-center items-center overflow-hidden">
//             <img className="object-contain h-full" src={goti} alt="" />
//           </div>
//           <div className="bg-white w-full flex flex-col justify-center p-5">
//             <h1 className="text-2xl font-bold">Heading</h1>
//             <h2 className="text-lg font-semibold pb-2">Rs.1800.00</h2>
//             <div className="flex items-center gap-4 mb-1">
//               <p className="text-sm text-zinc-500 line-through ">Rs.20000</p>
//               <span className="text-sm bg-amber-500 px-2 py-1 rounded-r-full">Save 10%</span>
//             </div>
//             <div className="flex items-center gap-5 pb-2">
//               <div className="flex gap-2 font-bold text-yellow-400">
//                 <IoIosStar />
//                 <IoIosStar />
//                 <IoIosStar />
//                 <IoIosStar />
//                 <IoIosStar />
//               </div>
//               <p className="text-sm font-bold">Best Rating</p>
//             </div>
//             <p className="text-zinc-600 text-xs max-w-[300px] mb-3 line-clamp-2 mb-3">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatem ab sint dolores repudiandae exercitationem perferendis
//               tenetur harum odio inventore nulla.
//             </p>
//             <div className="flex items-center gap-3">
//               <button className="bg-blue-700 text-white px-2 py-1 rounded">Buy Now</button>
//               <button className="bg-blue-700 text-white px-3 py-2 rounded">
//                 <FaCartPlus />
//               </button>
//               <button className="bg-blue-700 text-red-700 px-2 py-2 rounded">
//                 <FaHeart />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
function Gullary() {
  return (
    <div className="py-5 max-w-7xl mx-auto px-4 md:grid md:grid-cols-3 grid-cols-1 md:gap-4">
      <div className="bg-zinc-100 p-3 max-w-[280px] rounded-lg flex flex-col items-center shadow-sm">
        {/* ছবির অংশ - Aspect Ratio ব্যবহার করা ভালো */}
        <div className="w-full h-40 flex justify-center items-center overflow-hidden">
          <img src={goti} alt="Product" className="object-contain h-full" />
        </div>

        <div className="bg-white w-full flex flex-col p-4 rounded-b">
          <h1 className="text-xl font-bold">Heading</h1>
          <h2 className="text-md font-semibold text-blue-800">Rs. 1800.00</h2>
          
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs text-zinc-400 line-through">Rs. 20000</p>
            <span className="text-[10px] bg-amber-500 px-2 py-0.5 rounded-full font-bold">Save 10%</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400 text-xs">
              <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
            </div>
            <p className="text-[10px] font-bold text-zinc-500">Best Rating</p>
          </div>

          {/* line-clamp-2 ব্যবহার করে হাইট কন্ট্রোল করা হয়েছে */}
          <p className="text-zinc-600 text-xs line-clamp-2 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Voluptatem ab sint dolores repudiandae.
          </p>

          <div className="flex items-center gap-2">
            <button className="bg-blue-700 text-white text-sm px-3 py-1.5 rounded flex-grow">Buy Now</button>
            <button className="bg-zinc-100 text-blue-700 p-2 rounded hover:bg-blue-100 transition-colors">
              <FaCartPlus />
            </button>
            <button className="bg-zinc-100 text-red-500 p-2 rounded hover:bg-red-50 transition-colors">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 p-3 max-w-[280px] rounded-lg flex flex-col items-center shadow-sm">
        {/* ছবির অংশ - Aspect Ratio ব্যবহার করা ভালো */}
        <div className="w-full h-40 flex justify-center items-center overflow-hidden">
          <img src={goti} alt="Product" className="object-contain h-full" />
        </div>

        <div className="bg-white w-full flex flex-col p-4 rounded-b">
          <h1 className="text-xl font-bold">Heading</h1>
          <h2 className="text-md font-semibold text-blue-800">Rs. 1800.00</h2>
          
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs text-zinc-400 line-through">Rs. 20000</p>
            <span className="text-[10px] bg-amber-500 px-2 py-0.5 rounded-full font-bold">Save 10%</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400 text-xs">
              <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
            </div>
            <p className="text-[10px] font-bold text-zinc-500">Best Rating</p>
          </div>

          {/* line-clamp-2 ব্যবহার করে হাইট কন্ট্রোল করা হয়েছে */}
          <p className="text-zinc-600 text-xs line-clamp-2 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Voluptatem ab sint dolores repudiandae.
          </p>

          <div className="flex items-center gap-2">
            <button className="bg-blue-700 text-white text-sm px-3 py-1.5 rounded flex-grow">Buy Now</button>
            <button className="bg-zinc-100 text-blue-700 p-2 rounded hover:bg-blue-100 transition-colors">
              <FaCartPlus />
            </button>
            <button className="bg-zinc-100 text-red-500 p-2 rounded hover:bg-red-50 transition-colors">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 p-3 max-w-[280px] rounded-lg flex flex-col items-center shadow-sm">
        {/* ছবির অংশ - Aspect Ratio ব্যবহার করা ভালো */}
        <div className="w-full h-40 flex justify-center items-center overflow-hidden">
          <img src={goti} alt="Product" className="object-contain h-full" />
        </div>

        <div className="bg-white w-full flex flex-col p-4 rounded-b">
          <h1 className="text-xl font-bold">Heading</h1>
          <h2 className="text-md font-semibold text-blue-800">Rs. 1800.00</h2>
          
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs text-zinc-400 line-through">Rs. 20000</p>
            <span className="text-[10px] bg-amber-500 px-2 py-0.5 rounded-full font-bold">Save 10%</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400 text-xs">
              <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
            </div>
            <p className="text-[10px] font-bold text-zinc-500">Best Rating</p>
          </div>

          {/* line-clamp-2 ব্যবহার করে হাইট কন্ট্রোল করা হয়েছে */}
          <p className="text-zinc-600 text-xs line-clamp-2 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Voluptatem ab sint dolores repudiandae.
          </p>

          <div className="flex items-center gap-2">
            <button className="bg-blue-700 text-white text-sm px-3 py-1.5 rounded flex-grow">Buy Now</button>
            <button className="bg-zinc-100 text-blue-700 p-2 rounded hover:bg-blue-100 transition-colors">
              <FaCartPlus />
            </button>
            <button className="bg-zinc-100 text-red-500 p-2 rounded hover:bg-red-50 transition-colors">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gullary;
