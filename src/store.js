import { configureStore } from '@reduxjs/toolkit'
import cartReduser from '../src/features/cartSlice.js'

export const store = configureStore({
  reducer: {
    cart : cartReduser,
  },
})