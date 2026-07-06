import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
} from "../../features/cartSlice";
const DELIVERY_FEE = 60;

function AddToCart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const subtotal = useSelector(selectCartTotal);
  const total = items.length > 0 ? subtotal + DELIVERY_FEE : 0;
  //console.log(cartItems);


   if (items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-display font-semibold text-charcoal-800">
          Apnar cart khali
        </h1>
        <p className="text-charcoal-400 mt-2">
          Product dekhe cart-e add korun
        </p>
        <Link to="/products" className="btn-primary inline-block mt-6">
          Shopping korte jan
        </Link>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-3xl text-green-400 font-bold text-center mt-30">
        Your cards
      </h1>

      <div className="flex md:flex-row flex-col justify-between gap-15 max-w-6xl mx-auto px-10 my-5">




       
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-zinc-100  rounded-xl p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover bg-mustard-50"
              />
              <div className="flex-1">
                <h3 className="font-display font-medium text-charcoal-800">
                  {item.name}
                </h3>
                <p className="text-mustard-500 font-semibold mt-1">
                  ৳{item.price}
                </p>
              </div>

              <div className="flex items-center border border-charcoal-100 rounded-full">
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                  }
                  className="w-8 h-8 flex items-center justify-center text-charcoal-600 hover:text-mustard-400"
                  aria-label="Quantity komano"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                  className="w-8 h-8 flex items-center justify-center text-charcoal-600 hover:text-mustard-400"
                  aria-label="Quantity barano"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-charcoal-400 hover:text-red-500 ml-2"
                aria-label="Cart theke baad din"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.8 12a2 2 0 0 1-2 1.8H9.8a2 2 0 0 1-2-1.8L7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        {/* <div className="flex-1 px-3 rounded-2xl ">
          <div className="flex flex-col gap-4 ">
            {cartItems.map((cart, index) => {
            return (
              <div className=" flex items-center justify-between bg-gray-200 px-3 rounded-2xl" key={index}>
                <div>
                  <img
                    className="h-20 w-20 object-contain"
                    src={cart.image}
                    alt={cart.name}
                    width="100"
                  />
                </div>
                <div>
                  <p className="font-bold">{cart.name}</p>
                  <p>${cart.price}</p>
                </div>
              </div>
            );
          })}
          </div>
        </div> */}



        <div className="bg-zinc-100   rounded-2xl p-6 h-fit flex-1">
          <h2 className="font-display font-semibold text-lg text-charcoal-800 mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 text-charcoal-600 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>৳{DELIVERY_FEE}</span>
            </div>
          </div>
          <div className="border-t border-charcoal-100 mt-4 pt-4 flex justify-between font-display font-semibold text-lg text-charcoal-800">
            <span>Total</span>
            <span>৳{total}</span>
          </div>
          <Link to="/checkout" className="px-5 py-2 bg-orange-500 text-white rounded-lg block text-center mt-6">
            Checkout Korun
          </Link>
        </div>


        {/* <div className="bg-amber-200 p-5 rounded-2xl">
          <h3>Order summary</h3>

          <div>
            <div className="flex justify-between gap-10">
              <p>subtotal</p>
              <p>$1000</p>
            </div>
            <div className="flex justify-between gap-10">
              <p>Delevery Charge</p>
              <p>$1000</p>
            </div>
          </div>

        </div> */}
      </div>

     
    </>
  );
}

export default AddToCart;
