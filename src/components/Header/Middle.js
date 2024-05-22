import Icons from "@/icons";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Middle = ({ menuOpen }) => {
  const [isSearchOpen, setisSearchOpen] = useState(false);

  return (
    <div className="w-full bg-purple300 relative">
      <div className="w-full max-md:flex-col  mx-auto max-w-safe flex text-white h-auto py-4 xl:py-0 lg:py-0 md:py-0 xl:h-16 lg:h-16 md:h-16">
        <div className="flex max-md:justify-center max-md:mb-4 items-center max-md:w-full">
          <a href="/">
            <Icons.Nekgame className=" w-[86px] h-[48px]" />
          </a>
        </div>

        <div className=" flex flex-1 px-2 max-md:justify-center">
          <div
            className={`flex-1 px-8 max-md:z-40 max-md:absolute max-md:top-full max-md:w-full max-md:p-2 max-md:pointer-events-none transition-opacity ${
              isSearchOpen
                ? "max-md:opacity-100 max-md:pointer-events-auto"
                : "max-md:opacity-0"
            }`}
          >
            <div className="w-full h-full  xl:flex lg:flex md:flex items-center justify-center ">
              <div className="w-full h-full flex items-center justify-center relative ">
                <input
                  className="w-full h-10 py-2 px-2 pl-10 bg-purple300 brightness-125 text-sm text-defaultText rounded-xl outline-none"
                  placeholder="Search for Games"
                />
                <Icons.Search className="absolute top-0 bottom-0 left-2 m-auto w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="  h-full flex items-center justify-start">
            <div className="w-full h-full flex items-center justify-between gap-2">
              <div className="hidden max-md:block">
                <button
                  onClick={menuOpen}
                  className="bg-blue500  w-auto h-10 py-0 px-4 items-center justify-center gap-1 rounded-xl"
                >
                  <Icons.Menu />
                </button>
              </div>
              <div className="w-auto h-10 p-4 flex items-center justify-center bg-blue500 rounded-xl hover:bg-blue500/50 transition duration-300 ease-in-out">
                <button className="flex items-center justify-start max-md:w-full px-2 gap-2">
                  <span className="text-sm"></span>
                  <Image
                    src="/assest/images/flag.jpeg"
                    width={28}
                    height={16}
                    alt="flag"
                  />
                  <span className="text-sm font-semibold">USD</span>
                </button>
              </div>
              <div className="hidden max-md:block ">
                <button
                  onClick={() => setisSearchOpen(!isSearchOpen)}
                  className="bg-blue500 w-auto h-10 py-0 px-4 items-center justify-center gap-1 rounded-xl"
                >
                  <Icons.Search />
                </button>
              </div>
              <div className="w-auto h-10 p-4 flex items-center justify-center bg-blue500 rounded-xl hover:bg-blue500/50 transition duration-300 ease-in-out">
                <Link href="/login">
                  <Icons.Man />
                </Link>
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
                  <Icons.Carrinho />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
