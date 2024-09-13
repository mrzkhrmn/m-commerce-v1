export const ProductCard = ({ product }) => {
  const sizeMapping = {
    hat: "one size",
    tshirt: ["S", "M", "L", "XL", "2XL", "3XL"],
    pants: ["S", "M", "L", "XL", "2XL", "3XL"],
    shoes: ["38", "39", "40", "41", "42", "43"],
  };

  const sizes = sizeMapping[product.productCategory];
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center border border-transparent hover:border-gray-400">
      <img
        src={product.images[0]}
        alt=""
        className=" object-cover h-[350px] w-[350px]"
      />
      <h3 className="font-bold text-lg">{product.name} - 5079</h3>
      <p>${product.price}</p>
      <p className="text-gray-400 text-sm mt-2">Regular Fit - 5.3 oz</p>
      <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
        {Array.isArray(sizes) ? (
          <p>{sizes.join("   ")}</p> // Eğer bir array ise virgülle ayırarak göster
        ) : (
          <p>{sizes}</p> // Eğer string ise direkt yaz
        )}
      </div>
    </div>
  );
};
