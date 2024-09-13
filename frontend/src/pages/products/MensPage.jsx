import { useState } from "react";
import { Filter } from "../../components/Filter";
import { ProductCard } from "../../components/MenPage/ProductCard";
import { SortingFilter } from "../../components/SortingFilter";
import { useGetMenProductsQuery } from "../../redux/api/productApiSlice";

export const MensPage = () => {
  const { data: productData, isLoading, error } = useGetMenProductsQuery();

  console.log(productData);

  return isLoading ? (
    <h1 className="text-center text-black text-3xl">Loading</h1>
  ) : (
    <main className="py-10  px-10 ">
      <SortingFilter />
      <div className="flex">
        <Filter />
        <div className="px-4 py-2 flex-1 ">
          <div className="flex justify-center flex-wrap gap-4">
            {productData?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
