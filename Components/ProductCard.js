import { getDiscountPricePercentage } from "@/UTILS/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      href={`/product/${p.slug}`}
    >
      <Image
        width={300}
        height={300}
        src={p.thumbnail.data.attributes.url}
        alt={p.Name}
      />

      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p.Name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>

          {p.original_price && (
            <>
              <p className="text-base font-meduim line-through">
                {p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
