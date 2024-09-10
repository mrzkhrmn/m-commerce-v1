export const NewProductsSection = () => {
  return (
    <section className="bg-[#FAFAFA] w-full pb-10">
      <div className="flex items-center justify-center relative  py-12">
        <h2 className=" text-3xl font-bold absolute left-10 ">New</h2>
        <div className=" content-center flex items-center justify-center gap-4">
          <button className="border-b border-transparent hover:border-black">
            Workwear
          </button>
          <button className="border-b border-transparent hover:border-black">
            Activewear
          </button>
          <button className="border-b border-transparent hover:border-black">
            Womenswear
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 pb-6">
        <div className="bg-white relative flex items-center justify-center flex-col pb-8 gap-6 rounded-md">
          <img
            src="https://i.shgcdn.com/59e850d7-d03e-4a8d-80bc-89615a85e7bb/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
            className="w-[400px] h-[350px] object-contain"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">Relax Faded Track Shorts 18" | 5939</p>
            <p className="text-gray-400">Relaxed Fit - 9.4 oz</p>
          </div>
          <span className="bg-black text-white py-2 px-3 rounded-full absolute top-4 left-4 text-sm font-thin">
            New
          </span>
        </div>
        <div className="bg-white relative flex items-center justify-center flex-col pb-8 gap-6 rounded-md">
          <img
            src="https://i.shgcdn.com/4ffc4895-7348-4c28-bb8f-3fa4e884061a/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
            className="w-[400px] h-[350px] object-contain"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">Two Tone Carrie Tote | 1008</p>
            <p className="text-gray-400">Large Style</p>
          </div>
          <span className="bg-black text-white py-2 px-3 rounded-full absolute top-4 left-4 text-sm font-thin">
            New
          </span>
        </div>
        <div className="bg-white relative flex items-center justify-center flex-col pb-8 gap-6 rounded-md">
          <img
            src="https://i.shgcdn.com/055daf6b-bc42-4cdb-b9f2-e2ba618d6996/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
            className="w-[400px] h-[350px] object-contain"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">Recycled Camera Bag | 1010</p>
            <p className="text-gray-400">Adjustable Shoulder Strap</p>
          </div>
          <span className="bg-black text-white py-2 px-3 rounded-full absolute top-4 left-4 text-sm font-thin">
            New
          </span>
        </div>
        <div className="bg-white relative flex items-center justify-center flex-col pb-8 gap-6 rounded-md">
          <img
            src="https://i.shgcdn.com/1b57042f-8087-412e-9e82-9ae644c3765e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
            className="w-[400px] h-[350px] object-contain"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">Linen Apron | 1086</p>
            <p className="text-gray-400">Mid Weight - 100% Linen</p>
          </div>
          <span className="bg-black text-white py-2 px-3 rounded-full absolute top-4 left-4 text-sm font-thin">
            New
          </span>
        </div>
      </div>
    </section>
  );
};
