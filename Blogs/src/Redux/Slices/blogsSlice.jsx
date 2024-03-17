import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  viewCount: {},
}

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
     // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    increaseViews: (state, action) => {
      const  id  = action.payload;
      if (state.viewCount[id]) {
        state.viewCount[id]++;
      } else {
        state.viewCount[id] = 1;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increaseViews } = blogsSlice.actions

export default blogsSlice.reducer