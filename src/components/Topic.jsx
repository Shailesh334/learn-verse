import React from "react";
import { Link } from "react-router-dom";
import useTopicData from "../hooks/useTopicData";

const Topic = ({ name , icon }) => {
  useTopicData(name);
  
  const handleTopicClick =()=>{
    
  }
  return (
    
    <div className="py-4 hover:bg-gray-100  rounded-lg cursor-pointer " onClick={handleTopicClick}>
      <div className="flex">
        <div className="pr-5">
          <img
            alt="home-icon"
            src={icon}
            className="h-8 mr-6"
          />
        </div>
        <div className=" flex items-center text-md">{name}</div>
      </div>
    </div>
   
  );
};

export default Topic;
