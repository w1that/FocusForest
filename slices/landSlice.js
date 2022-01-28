import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:-1
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