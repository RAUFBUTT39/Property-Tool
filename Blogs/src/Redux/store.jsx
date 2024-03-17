import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../Redux/Slices/blogsSlice'

export const store = configureStore({
  reducer: {
    blogs: blogReducer
  },
})