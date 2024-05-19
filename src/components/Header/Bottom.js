import Icons from "@/icons";

export const Bottom = ({ isMenuOpen, menuClose }) => {
  return (
    <div
      className={`"${
        isMenuOpen
          ? " max-md:fixed max-md:top-0 0 max-md:w-full max-md:h-full  max-md:opacity-100"
          : " "
      } "`}
    >
      <div className="w-full bg-blue400 max-md:bg-blue500-90 h-[48px] max-md:h-full max-md:relative  flex items-center ">
        <button
          onClick={menuClose}
          className="absolute w-[35px] h-[35px] rounded-full border border-blue300 top-4 right-4 text-white text-center"
        >
          <Icons.Close className="mx-auto" />
        </button>
        <div className="flex max-md:flex-col max-md:justify-center max-md:items-center max-w-[976px] w-full mx-auto text-white text-center">
          <button className=" flex items-center  py-3 ">
            <span className="text-sm font-medium ">Games</span>
            <Icons.Arrow />
          </button>
          <a className="py-3 px-3">
            <span className="text-sm font-medium ">Metin 2</span>
          </a>
          <a className="py-3 px-2">
            <span className="text-sm font-medium">League Of Legends </span>
          </a>
          <a className="py-3 px-2">
            <span className="text-sm font-medium">Valorant</span>
          </a>
          <a className="py-3 px-2">
            <span className="text-sm font-medium">Metin 2</span>
          </a>
          <a className="py-3 px-2">
            <span className="text-sm font-medium">Pubg Mobile </span>
          </a>
        </div>
      </div>
    </div>
  );
};
