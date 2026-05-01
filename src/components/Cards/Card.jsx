import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

function Card({image, title, price}) {
  return (
    <div className='bg-zinc-100 p-7 rounded-lg'>
        <div className='flex justify-between items-center'>
            <span className='cursor-pointer text-3xl  text-zinc-400'> <FaHeart/> </span>
            <button className='cursor-pointer text-3xl bg-gradient-to-b from-orange-300 to-orange-500 px-2 py-1 rounded-lg text-white'> <FaPlus/> </button>
        </div>
         {/* thik korte  hobe */}
        <div className='w-full h-50 flex justify-center items-center my-2'>
            <img src={image} alt="" />
        </div>

        <div className='text-center'>
            <h3 className='text-2xl font-bold text-zinc-700'>{title}</h3>
            <p className='text-2xl font-bold my-2'>${price.toFixed(2)}</p>
            <Button content = 'Shop Now'/>
        </div>

    </div>
  )
}

export default Card