import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addToWishlist } from "../../features/wishlistSlice";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

function Card({ id, image, name, price }) {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuthAction = (action) => {
    if (!firebase.user) {
      navigate("/signup");
      return;
    }

    action();
  };

  return (
    <div className="bg-zinc-100 p-7 rounded-lg">
      <div className="flex justify-between items-center">
        <button
        onClick={() =>
  handleAuthAction(() =>
    dispatch(
      addToWishlist({
        id,
        name,
        price,
        image,
      })
    )
  )
}
         
          className="cursor-pointer text-3xl  text-zinc-400"
        >
          <FaHeart />
        </button>
        <button
        onClick={() =>
  handleAuthAction(() =>{ 
    console.log(id,name);
    dispatch(
      addToCart({
        product: {
          id,
          name,
          price,
          image,
        },
        quantity: 1,
      })
    )

  }
  )
}
         
           
          className="cursor-pointer text-3xl bg-gradient-to-b from-orange-300 to-orange-500 px-2 py-1 rounded-lg text-white"
        >
          <FaPlus />
        </button>
      </div>
      {/* thik korte  hobe */}
      <div className="w-full h-50 flex justify-center items-center my-2">
        <img src={image} className="w-full h-full object-contain" alt="" />
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-zinc-700">{name}</h3>
        <p className="text-2xl font-bold my-2">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
}

export default Card;
