import { createSlice } from "@reduxjs/toolkit"
import { getUsersLands } from "../firebase";

const initialState={
    value:{}
}

export const landSlice = createSlice({
    name:'land',
    initialState,
    reducers:{
        selectLand:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export const {selectLand} = landSlice.actions;
export default landSlice.reducer