import React from "react";
import ShimmerVideoCard from "./ShimmerVideoCard";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <ShimmerVideoCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;
