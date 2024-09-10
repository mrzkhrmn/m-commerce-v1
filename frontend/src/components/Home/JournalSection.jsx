import { FaArrowRightLong } from "react-icons/fa6";

export const JournalSection = () => {
  return (
    <section className="w-full px-14 pb-16">
      <div className="flex items-center justify-between">
        <div className="flex justify-center flex-col gap-2 my-8">
          <h2 className="text-2xl font-bold">The Journal</h2>
          <p>
            The latest industry news, interviews, products, technology and
            resources
          </p>
        </div>
        <button className="underline text-lg">All Articles</button>
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <img
              src="https://20447527.fs1.hubspotusercontent-na1.net/hubfs/20447527/GRLSWIRL%20x%20ASC_BLOG_POST_2024_FEATURE.jpg"
              alt=""
              className="w-[400px] h-[220px] object-cover cursor-pointer"
            />
            <h3 className="text-lg uppercase font-bold ">
              Merch Series: GRLSWIRL
            </h3>
          </div>
          <p className=" text-ellipsis overflow-hidden line-clamp-2 mb-4 mt-9">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            debitis dolorem deleniti ipsam aliquid quidem blanditiis commodi
            quas deserunt voluptatum voluptate ratione ab explicabo impedit,
            tenetur sint soluta sequi cupiditate.
          </p>
          <div className="flex items-center gap-6 cursor-pointer">
            <button>Read More</button>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <img
              src="https://20447527.fs1.hubspotusercontent-na1.net/hubfs/20447527/IKENDOIT_BLOG_POST_2024_D2_4.jpg"
              alt=""
              className="w-[400px] h-[220px] object-cover cursor-pointer"
            />
            <h3 className="text-lg uppercase font-bold">
              Creating a premium music brand
            </h3>
          </div>
          <p className=" text-ellipsis overflow-hidden line-clamp-2 mb-4 mt-9">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            debitis dolorem deleniti ipsam aliquid quidem blanditiis commodi
            quas deserunt voluptatum voluptate ratione ab explicabo impedit,
            tenetur sint soluta sequi cupiditate.
          </p>
          <div className="flex items-center gap-6 cursor-pointer">
            <button>Read More</button>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <img
              src="https://20447527.fs1.hubspotusercontent-na1.net/hubfs/20447527/ACTIVE_BLOG_12-1.jpg"
              alt=""
              className="w-[400px] h-[220px] object-cover cursor-pointer"
            />
            <h3 className="text-lg uppercase font-bold ">
              Our guide to sustainable Activewear
            </h3>
          </div>
          <p className=" text-ellipsis overflow-hidden line-clamp-2 mb-4 mt-9">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            debitis dolorem deleniti ipsam aliquid quidem blanditiis commodi
            quas deserunt voluptatum voluptate ratione ab explicabo impedit,
            tenetur sint soluta sequi cupiditate.
          </p>
          <div className="flex items-center gap-6 cursor-pointer">
            <button>Read More</button>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-2">
            <img
              src="https://20447527.fs1.hubspotusercontent-na1.net/hubfs/20447527/ASCxBivacco.jpg"
              alt=""
              className="w-[400px] h-[220px] object-cover cursor-pointer"
            />
            <h3 className="text-lg uppercase font-bold">
              Our Guide to Choosing the Right Apron
            </h3>
          </div>
          <p className=" text-ellipsis overflow-hidden line-clamp-2 mb-4 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            debitis dolorem deleniti ipsam aliquid quidem blanditiis commodi
            quas deserunt voluptatum voluptate ratione ab explicabo impedit,
            tenetur sint soluta sequi cupiditate.
          </p>
          <div className="flex items-center gap-6 cursor-pointer">
            <button>Read More</button>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </section>
  );
};
