import React from "react";

const IconCard = ({ icon }) => {
  return (
    <div>
      <div className="p-4 hover:bg-gray-100 rounded-lg cursor-pointer text-center ml-3">
        <img  alt="home-icon" src={icon} className="h-8 bg-white" />
      </div>
    </div>
  );
};

export default IconCard;
