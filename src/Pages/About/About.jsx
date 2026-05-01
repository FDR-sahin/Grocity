import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import Pic from '../../assets/pic.jpeg'

function About() {
  return (
    <div className=' my-30 max-w-350 mx-auto px-10'>
           <h3 className='text-center my-5 md:text-2xl text-lg font-semibold text-green-500'>About Us</h3>
           <h1 className='text-center my-5 md:text-5xl text-3xl font-bold text-zinc-800'>Why <span className='text-orange-500'>Chooces</span> Us</h1>
       
        <div className='md:flex md:flex-row flex-col gap-10 items-center justify-center'>
           <div className=' md:w-150 w-75 md:h-150 h-75 rounded-full bg-amber-200 overflow-hidden'>
          <img className='w-full h-full object-cover' src={Pic} alt="" />
         </div>

         <div className='flex-1'>
            <h2 className='md:text-4xl text-2xl font-bold text-blue-800 my-5'>Best Food Quality</h2>
            <p className='text-sm font-semibold text-green-600 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore quos voluptatum consequatur esse dolorum dolores. Recusandae explicabo illum, praesentium omnis debitis pariatur a tenetur ab inventore placeat? Nobis aut cum libero nihil, asperiores, velit sit nisi mollitia quia numquam ab explicabo illum suscipit molestiae inventore nam officiis, facere itaque.</p>
            <div className='flex flex-wrap items-center gap-5'>
              <div className='flex items-center gap-3 border border-gray-400 rounded bg-zinc-100 px-5 py-3' >
                 <FaTruckFast className='text-2xl text-green-400'/>
                 <span className='text-1xl text-zinc-800 font-semibold'>Free Delivery</span>
              </div>
              <div className='flex items-center gap-3 border border-gray-400 rounded bg-zinc-100 px-5 py-3' >
                 <FaDollarSign className='text-2xl text-green-400'/>
                 <span className='text-1xl text-zinc-800 font-semibold'>Easy Payment</span>
              </div>
              <div className='flex items-center gap-3 border border-gray-400 rounded bg-zinc-100 px-5 py-3' >
                 <Ri24HoursLine className='text-2xl text-green-400'/>
                 <span className='text-1xl text-zinc-800 font-semibold'>24/7 Service</span>
              </div>
            </div>
         </div>
        </div>



      
        
        
      </div>
  )
}

export default About