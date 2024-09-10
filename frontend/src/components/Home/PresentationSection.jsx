export const PresentationSection = () => {
  return (
    <section>
      <h3 className="text-xl uppercase text-center font-semibold text-gray-400">
        ESTABLISHED IN NEW ZEALAND, 2005
      </h3>
      <h1 className="text-center text-5xl font-bold my-10">
        Quality Basics | Built to Last
      </h1>
      <h3 className="text-xl uppercase text-center font-semibold text-gray-400">
        THE GLOBAL LEADER IN PREMIUM BLANK APPAREL
      </h3>
      <div className="my-8 px-10 flex items-center justify-center relative">
        <img
          src="https://i.shgcdn.com/28b72b36-4550-4742-a142-6d0178bc5966/-/format/auto/-/preview/3000x3000/-/quality/better/-/resize/2048x/"
          alt="commerce-image"
        />
        <div className="w-full text-white uppercase flex justify-between absolute px-20 bottom-10">
          <p className="text-sm">
            Classic Minus Tee - 5087 Relax Faded White T-Shirts - 3098
          </p>
          <button
            className={`border border-white text-white rounded-full px-8 py-3 text-xs z-[999] hover:bg-white hover:text-black transiton duration-300`}
          >
            SHOP OUTFIT
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full my-20">
        <div className="flex items-center justify-center w-[80%] gap-1">
          <div>
            <img
              src="https://i.shgcdn.com/48c28c1a-7270-4c34-b963-60a896741347/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt=""
            />
          </div>
          <div className="relative">
            <img
              src="https://i.shgcdn.com/ca32d9a5-3800-47ea-a222-a65a8a504941/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt=""
            />
            <p className="text-white absolute left-2 bottom-1 text-3xl font-bold">
              Sweats
            </p>
          </div>
          <div className="relative">
            <img
              src="https://i.shgcdn.com/752c6f43-47e7-4b57-b46a-d1aff6ab3c29/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt=""
            />
            <p className="text-white absolute left-2 bottom-1 text-3xl font-bold">
              Heavy Faded
            </p>
          </div>
          <div className="relative">
            <img
              src="https://i.shgcdn.com/481a712e-294a-4a64-be15-952439e80e65/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt=""
            />
            <p className="text-white absolute left-2 bottom-1 text-3xl font-bold">
              Active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
