import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name :"app",
    initialState : {
        showMenuList : true,
    },
    reducers:{
        toggleMenuList : (state) =>{
            state.showMenuList = !state.showMenuList;
        },
        closeMenuList:(state)=>{
            state.showMenuList = false;
        }
    }
});


export const {toggleMenuList , closeMenuList} = appSlice.actions;



export default appSlice.reducer;