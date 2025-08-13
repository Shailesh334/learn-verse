import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:[],
    reducers:{
        addChatComment : (state , action)=>{
            if(state.length > 25)state.shift();
            state.unshift(action.payload);
        }
    }
})


export const {addChatComment} = chatSlice.actions;

export default chatSlice.reducer;