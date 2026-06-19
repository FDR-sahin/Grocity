import React from 'react'
import { useSelector } from 'react-redux'

function AddToCart() {
  const {cartItems} = useSelector((state) => state.cart)
  console.log(cartItems);
  return (
     <div className="my-30 grid grid-cols-3">
      {cartItems.map((cart, index) => {
        return (
          <div className='bg-amber-100 p-2 h-50 w-40 rounded-[10px] flex items-center justify-center flex-col gap-3' key={index}>
            <img className='h-20 w-20 object-contain' src={cart.image} alt={cart.name} width="100" />
            <div>{cart.name}</div>
            <div>${cart.price}</div>
          </div>
        );
      })}
    </div>
  )
}

export default AddToCart