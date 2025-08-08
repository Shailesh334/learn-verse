import React from "react";
import { useDispatch } from "react-redux";
import { closeMenuList } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {

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



    </div>
  );
};

export default Watch;
