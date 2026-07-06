import React from 'react'
import { useSelector } from 'react-redux';

function WishList() {
    const {wishlistItem} = useSelector((state) => state.wishlist)
  return (
    <>
      <h1 className='text-3xl text-red-400 font-bold text-center mt-30'>Your wishList</h1>
     <div className="my-30 grid grid-cols-3">
      
      {wishlistItem.map((wish, index) => {
        return (
          <div className='bg-amber-100 p-2 h-50 w-40 rounded-[10px] flex items-center justify-center flex-col gap-3' key={index}>
            <img className='h-20 w-20 object-contain' src={wish.image} alt={wish.name} width="100" />
            <div>{wish.name}</div>
            <div>${wish.price}</div>
          </div>
        );
      })}
    </div>
     </>
  )
}

export default WishList