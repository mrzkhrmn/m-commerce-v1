export const ProductCard = () => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center border border-transparent hover:border-gray-400">
      <img
        src="https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1500w/products/185/1087/5001G_STAPLE_ORGANIC_TEE_BLACK_BACK__42190.1724903586.jpg?c=1"
        alt=""
        className=" object-cover h-[350px] w-[350px]"
      />
      <h3 className="font-bold text-lg">Classic Minus Tee [-2"] 5079</h3>
      <p>$22.00</p>
      <p className="text-gray-400 text-sm mt-2">Regular Fit - 5.3 oz</p>
      <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
        <p>S</p>
        <p>M</p>
        <p>L</p>
        <p>XL</p>
        <p>2XL</p>
        <p>3XL</p>
      </div>
    </div>
  );
};
