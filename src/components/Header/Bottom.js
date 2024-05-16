import Icons from "@/icons";

export const Bottom = () => {
  return (
    <div>
      <div className="w-full bg-blue400 h-[48px] max-md:hidden flex items-center ">
        <div className="flex max-w-[976px] w-full mx-auto text-white text-center">
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
