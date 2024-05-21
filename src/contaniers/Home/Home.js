// import React from "react";
// import { Banner } from "./views/Banner";
// import { Cards } from "@/components/Cards";

// export const HomePage = () => {
//   return (
//     <div>
//       <Banner />
//       <div className=" h-auto mt-4">
//         <div className="max-w-[940px] w-full h-auto mx-auto text-center flex flex-col text-white gap-2 py-2 px-2 bg-blue300-30 rounded-xl ">
//           <h1 className="text-xl font-bold text-pink200">
//             Popular Mobile Apps & Games
//           </h1>
//           <div className="flex text-wrap flex-col justify-center items-center">
//             <div className="flex gap-4">
//               <Cards image="/assest/images/joyGame.webp" />
//               <Cards image="/assest/images/knight.webp" />
//               <Cards image="/assest/images/metin2.webp" />
//               <Cards image="/assest/images/leagueofLegends.webp" />
//               <Cards image="/assest/images/mobileLegends.webp" />
//             </div>
//             <div className="flex mt-1 gap-4">
//               <Cards image="/assest/images/BST.webp" />
//               <Cards image="/assest/images/pubgMobile.webp" />
//               <Cards image="/assest/images/razerGold.webp" />
//               <Cards image="/assest/images/steam.webp" />
//               <Cards image="/assest/images/blueMan.webp" />
//             </div>
//             <div className="flex mt-1 gap-4">
//               <Cards image="/assest/images/zula.webp" />
//               <Cards image="/assest/images/bombom.webp" />
//               <Cards image="/assest/images/giftCard.webp" />
//               <Cards image="/assest/images/netflix.webp" />
//               <Cards image="/assest/images/supErc.webp" />
//             </div>
//             <div className="flex mt-1 gap-4">
//               <Cards image="/assest/images/binance.webp" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Banner } from "./views/Banner";
import { Cards } from "@/components/Cards";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="h-auto mt-4">
        <div className="max-w-[940px] w-full h-auto mx-auto text-center text-white gap-2 py-2 px-2 bg-blue300-30 rounded-xl ">
          <h1 className="text-xl font-bold text-pink200 py-2">
            Popular Mobile Apps & Games
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <Cards image="/assest/images/joyGame.webp" />
            <Cards image="/assest/images/knight.webp" />
            <Cards image="/assest/images/metin2.webp" />
            <Cards image="/assest/images/leagueofLegends.webp" />
            <Cards image="/assest/images/mobileLegends.webp" />
            <Cards image="/assest/images/BST.webp" />
            <Cards image="/assest/images/pubgMobile.webp" />
            <Cards image="/assest/images/razerGold.webp" />
            <Cards image="/assest/images/steam.webp" />
            <Cards image="/assest/images/blueMan.webp" />
            <Cards image="/assest/images/zula.webp" />
            <Cards image="/assest/images/bombom.webp" />
            <Cards image="/assest/images/giftCard.webp" />
            <Cards image="/assest/images/netflix.webp" />
            <Cards image="/assest/images/supErc.webp" />
            <Cards image="/assest/images/binance.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};
