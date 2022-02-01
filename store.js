import { configureStore } from "@reduxjs/toolkit";
import landReducer from './slices/landSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer:{
        land:landReducer,
        user:userReducer
    }
})