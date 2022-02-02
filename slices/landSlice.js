import { createSlice } from "@reduxjs/toolkit"
import { getUsersLands } from "../firebase";

const initialState={
    value:{id:-1, plant:{id:-2,level:-2}},
    seed:-1
}

export const landSlice = createSlice({
    name:'land',
    initialState,
    reducers:{
        selectLand:(state,action)=>{
            state.value = action.payload;
        },
        selectSeed:(state,action)=>{
            state.seed=action.payload;
        }
    }
})

export const {selectLand, selectSeed} = landSlice.actions;
export default landSlice.reducer