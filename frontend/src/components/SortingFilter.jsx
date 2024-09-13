export const SortingFilter = () => {
  return (
    <div className="w-full">
      <div className="pt-8 pb-4 border-b border-black flex items-center justify-between">
        <p className=" text-gray-400">Selected Filter (0)</p>
        <div>
          <select name="sort" id="sort" className="rounded-md">
            <option value="">Sort By</option>
            <option value="">Newest</option>
            <option value="">Price:Low to High</option>
            <option value="">Price:High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};
