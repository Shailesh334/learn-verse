import React from 'react'
import CommentCard from './CommentCard'


const CommentList = ({comments}) => {
   if(comments.length <= 0)return;
  return (
    <div >
      {
        comments.map((comment , index )=> <CommentCard key={index} data={comment}/>)
      }
    </div>
  )
}

export default CommentList
