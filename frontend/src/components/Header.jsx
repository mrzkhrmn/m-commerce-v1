import { MdMenu } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { PiBasket } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { useState } from "react";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav
      className={`w-full flex justify-between lg:px-10 px-4 lg:py-0 py-2    bg-black  text-white relative ${
        isHovered
          ? "lg:bg-black lg:text-white transition duration-300 "
          : " lg:bg-transparent lg:text-black transition duration-300"
      }`}
    >
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <button className="text-xl lg:hidden block mb-[0.1rem]">
            <MdMenu />
          </button>
          <h1 className="lg:text-2xl text-xl mb-[0.3rem]">mcommerce.</h1>
        </div>
        <ul className="lg:flex items-center text-sm gap-6 hidden">
          <li
            className="group h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Men dropdown group */}
            <button>Men</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="group  h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Women dropdown group */}
            <button>Women</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="group  h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button>Headwear</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="group  h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button>Accessories</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="group  h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button>Kids</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="group  h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button>Sale</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="group  h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button>About</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li
            className="group  h-full flex items-center lg:py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button>Journal</button>
            <div className="absolute top-full left-0 w-full bg-black text-white overflow-hidden h-0 transition-all duration-500 ease-in-out group-hover:h-[25rem]">
              <div className="flex px-52 py-4 gap-36">
                <div>
                  <h3 className="font-bold mb-6">Featured.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Appareal.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Headwear.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Acccessories.</h3>
                  <ul className="space-y-2">
                    <li className="font-light">
                      <button>T-Shirts</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>Women</button>
                    </li>
                    <li className="font-light">
                      <button>All styles</button>
                    </li>
                    <li className="font-light">
                      <button>New Arrivals</button>
                    </li>
                    <li className="font-light">
                      <button>Coming Soon</button>
                    </li>
                    <li className="font-light">
                      <button>Workwear</button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6">Collections.</h3>
                  <ul className="space-y-1">
                    <li>
                      <button>Men</button>
                    </li>
                    <li>
                      <button>Women</button>
                    </li>
                    <li>
                      <button>Kids</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="lg:flex hidden items-center gap-6 text-sm">
        <button>Search</button>
        <button>Cart</button>
        <button>Sign In</button>
        <button className="px-4 py-2 text-sm text-gray-100 hover:text-white hover:shadow-2xl hover:shadow-white bg-[#9A877C] transition duration-200 rounded-full">
          Create Account
        </button>
      </div>
      <div className="lg:hidden flex items-center gap-4 text-2xl text-white/90">
        <button>
          <IoSearchOutline />
        </button>
        <button>
          <PiBasket />
        </button>
        <button>
          <FiUser />
        </button>
      </div>
    </nav>
  );
};
