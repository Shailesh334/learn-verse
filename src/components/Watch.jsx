import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenuList } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";


 



const Watch = () => {

  const { idCount , commentsData }= useSelector(store => store.comment);
  
  const dispatch =useDispatch();
  
  dispatch(closeMenuList());

  let [ searchParams ] = useSearchParams();
  const id = searchParams.get('v');
  return (
    <div className="p-2 m-2">
      <iframe
        className="rounded-lg"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + id }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="p-2 my-2">
        <h1 className="text-2xl font-bold">Comments :</h1>
        <CommentList comments={commentsData}/>
      </div>

    </div>
  );
};

export default Watch;
