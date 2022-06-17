import React from "react";

const ProductCard = ({ data }) => (
  <a href="" className="block">
    <div className="flex justify-center">
      <p className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
        {" "}
        {data.category}{" "}
      </p>
    </div>

    <img
      alt="Trainer Product"
      src={data.image}
      className="object-cover w-full -mt-3 aspect-square"
    />

    <h5 className="mt-4 text-sm text-black/90 line-clamp-1">{data.title}</h5>

    <div className="flex items-center justify-between mt-4 font-bold">
      <p className="text-lg">${data.price}</p>

      <p className="text-xs tracking-wide uppercase">6 Colors</p>
    </div>
  </a>
);

export default ProductCard;
