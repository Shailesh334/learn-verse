import { createSlice } from "@reduxjs/toolkit";
import {MockcommentsData} from "./constants";


const addReplyById = (comment , id , newReply) =>{
     comment.map((c)=>{
        if(c.id === id){
            c.replies.push(newReply);
            return;
        }

        if(c.replies.length >0 ){
            addReplyById(c.replies , id , newReply);
        } 
    })
   
}


const commentSlice = createSlice({
    name : "comment",
    initialState : {
        idCount : 16 ,
        commentsData : MockcommentsData ,
    },
    reducers:{
        addReply : (state , action) => {
            const {newReply , id } = action.payload;
            addReplyById(state.commentsData ,id , newReply );
        },
    }
})


 export const {addReply} = commentSlice.actions;

export default commentSlice.reducer;