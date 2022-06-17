import React from "react";

const ProductCardSkeleton = () => (
  <div>
    <div className="w-full aspect-square animate-pulse bg-gray-200" />
    <div className="w-full h-6 animate-pulse bg-gray-200 mt-3" />
    <div className="flex justify-between items-center mt-3">
      <div className="w-1/4 h-6 animate-pulse bg-gray-200" />
      <div className="w-2/4 h-6 animate-pulse bg-gray-200" />
    </div>
  </div>
);

export default ProductCardSkeleton;
