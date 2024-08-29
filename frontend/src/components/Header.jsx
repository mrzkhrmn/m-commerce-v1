import { MdMenu } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { PiBasket } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

export const Header = () => {
  return (
    <nav className="w-full flex justify-between  lg:px-10 px-4 lg:py-6 py-2 lg:bg-transparent bg-black lg:text-black text-white">
      <div className="flex  gap-8 ">
        <div className="flex items-center gap-2">
          <button className="text-xl lg:hidden block mb-[0.1rem]">
            <MdMenu />
          </button>
          <h1 className="lg:text-2xl text-xl mb-[0.3rem]">mcommerce.</h1>
        </div>
        <ul className="lg:flex items-center text-sm gap-6 hidden">
          <li>
            <button>Men</button>
          </li>
          <li>
            <button>Women</button>
          </li>
          <li>
            <button>Headwear</button>
          </li>
          <li>
            <button>Accessories</button>
          </li>
          <li>
            <button>Kids</button>
          </li>
          <li>
            <button>Sale</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Journal</button>
          </li>
        </ul>
      </div>
      <div className="lg:flex hidden items-center gap-6 text-sm ">
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
