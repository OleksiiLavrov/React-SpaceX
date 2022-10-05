import {createSlice} from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
   name: "favourite",
   initialState: {
      count: 0,
      tours: []
   },
   reducers: {
      addToFavourite(state, action) {
         state.tours.push(action.payload)
         state.count = state.count + 1
      },
      delFromFavourite(state, action) {
         let index = state.tours.indexOf(action.payload)
         if (index !== -1) {
            state.tours.splice(index, 1);
         }
         state.count = state.count - 1
      },
      clearFavourite(state) {
         state.tours = []
         state.count = 0
      }
   }
})

export default favouriteSlice.reducer
export const {addToFavourite, delFromFavourite, clearFavourite} = favouriteSlice.actions