import { configureStore } from "@reduxjs/toolkit";
import landReducer from './slices/landSlice'

export const store = configureStore({
    reducer:{
        land:landReducer
    }
})