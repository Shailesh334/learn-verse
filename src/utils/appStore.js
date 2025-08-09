import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import videoSlice from "./videoSlice"
import searchSlice from "./searchSlice"
import commentSlice from "./commentSlice"

const appStore = configureStore({
    reducer:{
        app : appSlice,
        video : videoSlice ,
        search : searchSlice,
        comment : commentSlice ,
    }
});




export default appStore;