import { Filter } from "../../components/Filter";
import { ProductCard } from "../../components/MenPage/ProductCard";
import { SortingFilter } from "../../components/SortingFilter";

export const MensPage = () => {
  return (
    <main className="py-10  px-10 ">
      <SortingFilter />
      <div className="flex">
        <Filter />
        <div className="px-4 py-2 flex-1 ">
          <div className="flex justify-center flex-wrap gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
};
