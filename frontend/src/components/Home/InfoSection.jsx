import { FaArrowRightLong } from "react-icons/fa6";

export const InfoSection = () => {
  return (
    <section className="w-full">
      <div className="px-32 py-10 gap-8  flex items-center justify-center w-full">
        <div className="flex justify-center flex-col gap-6">
          <h2 className="font-bold text-5xl">
            Designed in <br /> New Zealand
          </h2>
          <p className="text-lg">
            Proudly New Zealand owned and operated since 2005. We're passionate
            about designing premium blank apparel for the creators and makers of
            today.
          </p>
          <div>
            <button className="flex items-center gap-1 font-bold text-lg border-b border-transparent hover:border-black">
              Learn more about us <FaArrowRightLong />
            </button>
          </div>
        </div>
        <img
          src="https://i.shgcdn.com/d27ae74e-7589-499f-a30d-613fe5cae52f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
          className="w-[750px] h-[700px] object-contain"
        />
      </div>
      <div className="px-[8.5rem] pl-24 pr-52 gap-8  flex items-center justify-center w-full">
        <img
          src="https://i.shgcdn.com/b74ccb5d-bc94-4c48-87ae-80d92aed6942/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
          className="w-[750px] h-[700px] object-contain"
        />
        <div className="flex justify-center flex-col gap-6">
          <h2 className="font-bold text-5xl">
            Our new warehouse, servicing the East Coast: Charlotte
          </h2>
          <p className="text-lg">
            Our second distribution centre in Charlotte, North Carolina, is now
            servicing the East Coast. This 240,000 sq ft facility is our largest
            yet, and will enable faster shipping times and hold bigger volumes
            across all products and styles.
          </p>
          <div>
            <button className="flex items-center gap-1 font-bold text-lg border-b border-transparent hover:border-black">
              View all showrooms <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
