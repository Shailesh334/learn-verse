import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState:{
        searchCache :{

        }
    },
    reducers:{
        addSearchSuggestions : (state , action) =>{
            state.searchCache = Object.assign(state.searchCache , action.payload);
        }
    }
})

export const {addSearchSuggestions} = searchSlice.actions; 

export default searchSlice.reducer;