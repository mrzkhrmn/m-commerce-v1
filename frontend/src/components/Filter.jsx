import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Filter = () => {
  return (
    <div className="h-screen w-[150px]">
      <div className="border-b border-black py-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold mb-2">Product Type</h3>
          <button className="mb-2">
            <MdOutlineKeyboardArrowDown size={20} />
          </button>
        </div>
        <div className="flex justify-center flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>T-shirts</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>Pants</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>Shoes</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>Hats</label>
          </div>
        </div>
      </div>
      <div className="border-b border-black py-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold mb-2">Product Type</h3>
          <button className="mb-2">
            <MdOutlineKeyboardArrowDown size={20} />
          </button>
        </div>
        <div className="flex justify-center flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>T-shirts</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>Pants</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>Shoes</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <label>Hats</label>
          </div>
        </div>
      </div>
      <div className="border-b border-black py-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold mb-2">Product Type</h3>
          <button className="mb-2">
            <MdOutlineKeyboardArrowDown size={20} />
          </button>
        </div>
        <div className="flex justify-center flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <p>T-shirts</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <p>T-shirts</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <p>T-shirts</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <p>T-shirts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
