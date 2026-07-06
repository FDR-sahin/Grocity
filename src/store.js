import { configureStore } from '@reduxjs/toolkit'
import cartReduser from '../src/features/cartSlice.js'
import wishlistReducer from '../src/features/wishlistSlice.js'

export const store = configureStore({
  reducer: {
    cart : cartReduser,
    wishlist : wishlistReducer,
  },
})