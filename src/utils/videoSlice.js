import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name:"video",
    initialState:{
        homeVideos : null,
        topicVideos : null,

    },
    reducers:{
        addHomeVideos :(state,action)=>{
            state.homeVideos = action.payload;
        },
        addTopicVideos :(state,action)=>{
            state.topicVideos = action.payload;
        }
    }
});

export const {addHomeVideos , addTopicVideos} = videoSlice.actions;

export default videoSlice.reducer;