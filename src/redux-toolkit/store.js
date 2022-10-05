import {combineReducers, configureStore} from "@reduxjs/toolkit";
import favouriteSlice from "./favouriteSlice";
import fetchedDataSlice from "./fetchedDataSlice";

const rootReducer = combineReducers({
   favourite: favouriteSlice,
   fetchedData: fetchedDataSlice,
})

export const store = configureStore({
   reducer: rootReducer
})