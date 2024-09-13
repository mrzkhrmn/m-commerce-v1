import { MdMenu, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { PiBasket } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Temizlik fonksiyonu
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={` w-full flex justify-between lg:px-10 px-4 lg:py-0 py-2 fixed z-[9999] transition duration-300 ${
        scrolled
          ? "bg-black text-white lg:bg-black lg:text-white"
          : "bg-black text-white"
      } ${
        !scrolled && isHovered
          ? "lg:bg-black lg:text-white"
          : !scrolled
          ? "lg:bg-transparent lg:text-black"
          : ""
      }`}
    >
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <button
            className="text-xl lg:hidden block mb-[0.1rem]"
            onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          >
            {isMenuOpen ? <RiCloseLargeFill /> : <MdMenu />}
          </button>
          <h1 className="lg:text-2xl text-xl mb-[0.3rem]">mcommerce.</h1>
        </div>
        {/* Small Screen Hamburger Menu */}
        <div className="lg:hidden items-center text-sm gap-6 flex">
          <div
            className={`absolute top-full left-0 w-0   bg-black/90 text-white overflow-hidden h-screen transition-all duration-500 ease-in-out ${
              isMenuOpen && "w-full"
            }`}
          >
            <ul className="text-[1.35rem] py-8 flex flex-col px-4 md:px-8 gap-6">
              <li>
                <div className="flex justify-between cursor-pointer">
                  <h1>Men</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex justify-between cursor-pointer">
                  <h1>Women</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex justify-between cursor-pointer">
                  <h1>Headwear</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex justify-between cursor-pointer">
                  <h1>Accessories</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex justify-between cursor-pointer">
                  <h1>Kids</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex justify-between cursor-pointer">
                  <h1>Sale</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex justify-between cursor-pointer">
                  <h1>About</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex justify-between cursor-pointer">
                  <h1>Journal</h1>{" "}
                  <button>
                    <MdOutlineKeyboardArrowRight size={40} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Large Screen Hamburger Menu */}
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
