import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import videoSlice from "./videoSlice"
import searchSlice from "./searchSlice"
import commentSlice from "./commentSlice"
import chatSlice from "./chatSlice"
const appStore = configureStore({
    reducer:{
        app : appSlice,
        video : videoSlice ,
        search : searchSlice,
        comment : commentSlice ,
        chat : chatSlice ,
    }
});




export default appStore;