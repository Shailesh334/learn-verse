import React from "react";

const ShimmerVideoCard = () => {
  return (
    <div className="w-72 m-4 animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded-lg"></div>
      <div className="flex gap-3 mt-3">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="flex flex-col gap-2">
          <div className="w-48 h-4 bg-gray-300 rounded"></div>
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
