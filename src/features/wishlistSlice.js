import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItem : []
}

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
       addToWishlist : (state, action) => {
        state.wishlistItem.push(action.payload);
       },
    },
});

export const  {addToWishlist} = wishlistSlice.actions; 
export default wishlistSlice.reducer;