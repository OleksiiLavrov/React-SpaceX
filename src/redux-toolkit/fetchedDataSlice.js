import {createSlice} from "@reduxjs/toolkit";

const fetchedDataSlice = createSlice({
   name: "fetchedData",
   initialState: {
      data: [],
      convertedData: [] // divided by 3 slides for array
   },
   reducers: {
      setFetchedData(state, action) {
         state.data = action.payload

         const slidesPerView = 3;
         for (let i = 0; i <Math.ceil(state.data.length/slidesPerView); i++){
            state.convertedData[i] = state.data.slice((i*slidesPerView), (i*slidesPerView) + slidesPerView);
         }
      },
   }
})

export default fetchedDataSlice.reducer
export const {setFetchedData, convertDataForSlider} = fetchedDataSlice.actions