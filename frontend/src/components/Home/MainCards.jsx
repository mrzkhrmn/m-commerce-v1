import { useState } from "react";
import { Link } from "react-router-dom";

export const MainCards = ({ image, title, link }) => {
  const [showShopOutfitButton, setShowOutfitButton] = useState(false);
  return (
    <Link to={`/${link}`} className="md:w-[50%] w-[100%] h-[48rem] relative">
      <img
        src={image}
        alt="productImage"
        className="h-full w-full object-cover"
      />
      <div className=" w-full">
        <h2
          className={`transition-all duration-300 text-4xl font-bold pointer-events-none ${
            showShopOutfitButton ? "md:translate-y-0" : " md:translate-y-12"
          } absolute left-10 z-[999] text-white md:bottom-[4.5rem] bottom-[2rem]`}
        >
          {title}
        </h2>

        <div
          className={`md:flex hidden transition-all duration-300 absolute text-white items-center gap-6 z-[999] text-lg left-10 pointer-events-none ${
            showShopOutfitButton
              ? "opacity-100 translate-y-0 bottom-9"
              : "opacity-0 translate-y-3 bottom-0"
          }`}
        >
          <p>T-Shirts</p>
          <p>Sweatshirts</p>
          <p>Jackets</p>
          <p>Headwear</p>
        </div>

        <button
          className={`${
            showShopOutfitButton ? "inline-block" : "hidden"
          } absolute right-20 bottom-8 border border-white text-white rounded-full px-8 py-3 text-xs z-[999]`}
        >
          SHOP OUTFIT
        </button>
      </div>
      <div
        onMouseEnter={() => setShowOutfitButton(true)}
        onMouseLeave={() => setShowOutfitButton(false)}
        className="absolute top-0 w-full h-full z-[99] cursor-pointer  transition duration-300 hover:bg-black/15 bg-transparent"
      ></div>
    </Link>
  );
};
