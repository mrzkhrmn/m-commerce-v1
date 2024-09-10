export const AltCards = ({ image, title }) => {
  return (
    <div className="md:w-[50%] w-[100%] h-[34rem] relative md:p-0 p-6">
      <img
        src={image}
        alt="productImage"
        className="h-full w-full object-cover"
      />
      <div className=" absolute  left-10 top-8 z-[999] pointer-events-none">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="absolute top-0 w-full h-full z-[99] cursor-pointer  transition duration-300 hover:bg-black/15 bg-transparent hidden md:block"></div>
    </div>
  );
};
