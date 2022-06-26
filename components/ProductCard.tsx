import useImageOnLoad from "@/core/hooks/useImageOnLoad";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  const isImageLoaded = useImageOnLoad(data.image);

  return (
    <Link href={`/product/${data.id}`}>
      <a href="" className="block group">
        <div className="flex justify-center">
          <p className="relative duration-200 h-6 px-4 text-xs leading-6 text-white bg-black">
            {" "}
            {data.category}{" "}
          </p>
        </div>

        {!isImageLoaded && (
          <div className="w-full aspect-square animate-pulse bg-gray-200" />
        )}

        {isImageLoaded && (
          <img
            alt="Trainer Product"
            src={data.image}
            className="object-cover group-hover:scale-125 duration-200 group-hover:object-contain -mt-3 aspect-square"
          />
        )}

        <h5 className="mt-4 text-sm text-black/90 line-clamp-1">
          {data.title}
        </h5>

        <div className="flex items-center justify-between mt-4 font-bold">
          <p className="text-lg">${data.price}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
