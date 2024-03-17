import { configureStore } from '@reduxjs/toolkit'
import propertyToolReducer from '../Redux/Slices/propertyToolSlice'

export const store = configureStore({
  reducer: {
    propertytool: propertyToolReducer
  },
})