import Icons from "@/icons";
import { useEffect, useRef, useState } from "react";
const menuItems = [
  "Binance",
  "Tinder",
  "Path of Exile",
  "Spotify",
  "Yalla",
  "NCSOFT",
  "Supercell",
  "Best Buy",
  "World War 3",
  "Viber",
  "UniPin",
  "Teamfight Tactics",
  "Openbucks",
  "Netflix",
  "Multi Game Card",
  "League of Legends Wild Rift",
  "GoCash Game Card",
  "Geforce Now",
  "Gamestop",
  "Fortnite",
  "Escape From Tarkov",
  "Conquer Online",
  "CGV MoviePass",
  "Call Of Duty Mobile",
  "Arena of Valor",
  "Xbox",
  "Twitch",
  "Tango Live",
  "Webzen",
  "Roblox",
  "Popmundo",
  "Playstation",
  "PaysafeCard",
  "Nintendo",
  "PUBG New State",
  "Legend Online Reborn",
  "Legend Online",
  "Bombom",
  "Zula",
  "Valorant",
  "Tumile",
  "Steam",
  "Silkroad Online TR",
  "Silkroad Online JC Planet",
  "Silkroad Online Global",
  "Razer Gold",
  "PUBG Mobile Lite",
  "PUBG Mobile",
  "Point Blank",
  "Nimo TV",
  "Nexon",
  "Mobile Legends",
  "MixU",
  "Mint",
  "Metin2",
  "League Of Legends",
  "LivU",
  "Likee",
  "Legends of Runeterra",
  "Knight Online",
  "JoyGame",
  "Jawaker",
  "iTunes",
  "Gpay Epin",
  "Google Play",
  "GameForge",
  "Free Fire",
  "Exitlag",
  "eBay",
  "CrossFire",
  "Black Desert Online",
  "Bigpoint",
  "Bigo Live",
  "Apex Legends",
  "Amazon Gift Cards",
];
export const Bottom = ({ isMenuOpen, menuClose }) => {
  const [isGamesOpen, setisGameOpen] = useState(false);

  const menuRef = useRef();

  const menuParentRef = useRef();

  useEffect(() => {
    if (menuParentRef.current) {
      menuParentRef.current.style.maxHeight = isGamesOpen
        ? `${menuRef.current?.offsetHeight}px`
        : "0px";
    }
  }, [isGamesOpen]);

  return (
    <div
      className={`max-md:fixed relative  max-md:z-50 max-md:top-0 max-md:left-0 max-md:w-full max-md:h-full  transition-[transform,opacity] duration-300 ease-in-out transform  ${
        isMenuOpen
          ? " max-md:translate-x-0 max-md:opacity-100  "
          : " max-md:opacity-0 max-md:-translate-x-full"
      } `}
    >
      <div className="w-full bg-blue400 max-md:bg-blue500-90 h-[48px] max-md:h-full max-md:relative  flex items-center ">
        <button
          onClick={menuClose}
          className="absolute w-[35px] h-[35px] rounded-full border border-blue300 top-4 right-4 text-white text-center md:hidden"
        >
          <Icons.Close className="mx-auto" />
        </button>
        <div className="flex max-md:flex-col max-md:h-full max-md:pt-12   items-center max-md:justify-start max-md:overflow-auto max-w-safe w-full mx-auto text-white text-center">
          <div className="group  max-md:w-full">
            <button
              onClick={() => setisGameOpen(!isGamesOpen)}
              className="  py-3 "
            >
              <span className="text-sm font-medium ">Games</span>
              <Icons.Arrow className="inline-block" />
            </button>
            <div
              ref={menuParentRef}
              className="w-full max-md:max-h-0  md:!max-h-none max-md:overflow-hidden transition-[max-height] bg-blue500 md:right-0 md:absolute md:left-0 md:top-full z-100 md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto"
            >
              <div
                className=" max-w-safe mx-auto flex max-md:flex-col flex-wrap py-4"
                ref={menuRef}
              >
                {menuItems.map((item) => (
                  <a
                    className="md:w-[16.6%] max-md:text-center text-left block px-2 "
                    key={item}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
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
