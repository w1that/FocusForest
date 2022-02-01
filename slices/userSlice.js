import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id:''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setCurrentUser:(state,action)=>{
            state.id=action.payload;
        }
    }
})

export const {setCurrentUser} = userSlice.actions;
export default userSlice.reducer