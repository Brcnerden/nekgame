import Icons from "@/icons";
import Image from "next/image";

export const Middle = () => {
  return (
    <div className=" bg-purple300">
      <div className="w-full  mx-auto max-w-[976px] flex text-white h-auto py-4 xl:py-0 lg:py-0 md:py-0 xl:h-16 lg:h-16 md:h-16">
        <div className="flex  items-center max-md:w-full">
          <a href="/">
            <Icons.Nekgame className=" w-[86px] h-[48px]" />
          </a>
        </div>

        <div className=" flex flex-1 px-2">
          <div className=" flex-1 px-8 ">
            <div className="w-full h-full hidden xl:flex lg:flex md:flex items-center justify-center ">
              <div className="w-full h-full flex items-center justify-center relative">
                <input
                  className="w-full h-10 py-2 px-2 pl-10 bg-purple300 brightness-125 text-sm text-defaultText rounded-xl outline-none"
                  placeholder="Search for Games"
                />
                <Icons.search className="absolute top-0 bottom-0 left-2 m-auto w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="  h-full flex items-center justify-start">
            <div className="w-full h-full flex items-center justify-between gap-2">
              <div className="w-auto h-10 p-4 flex items-center justify-center bg-blue500 rounded-xl hover:bg-blue500/50 transition duration-300 ease-in-out">
                <button className="flex items-center justify-start gap-2">
                  <span className="text-sm"></span>
                  <Image
                    src="/images/flag.jpeg"
                    width={40}
                    height={40}
                    alt="flag"
                  />
                  <span>USD</span>
                </button>
              </div>
              <div className="w-auto h-10 p-4 flex items-center justify-center bg-blue500 rounded-xl hover:bg-blue500/50 transition duration-300 ease-in-out">
                <button>
                  <Icons.man />
                </button>
              </div>
              <div className="w-auto relative h-10 p-4 flex items-center justify-center bg-blue500 rounded-xl hover:bg-blue500/50 transition duration-300 ease-in-out">
                <a>
                  <div className="absolute -top-1 -right-1">
                    <div className="min-w-[20px] min-h-[20px] py-0 px-1 max-w-full max-h-full flex items-center justify-center bg-purple100 rounded-lg">
                      <span className="text-back text-[11px] font-extrabold">
                        0
                      </span>
                    </div>
                  </div>
                  <Icons.carrinho />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};