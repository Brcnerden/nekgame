import Icons from "@/icons";
import Image from "next/image";
import React, { useState } from "react";

const Slide1 = () => (
  <video
    className="h-full w-full object-cover"
    src="/assest/videos/videoRed.mp4"
    autoPlay
  />
);

const Slide3 = () => (
  <div className="relative h-full">
    <Image
      className="object-cover"
      fill
      src="/assest/images/baskalasim_seti.jpeg"
      alt="set"
    />
    <div className="w-full h-full absolute top-0 left-0 bg-black-60">
      <div className="flex h-full flex-col items-center  justify-center">
        <span className="text-sm font-medium text-white text-center">
          Enjoy the Game with Valorant
        </span>
        <p className="font-bold text-6xl text-white text-center mt-2">
          Change the game with the Transfiguration set
        </p>
        <button
          className="max-w-[150px] w-full h-auto py-4 px-8 mt-8  bg-pink100-75  hover:bg-pink100
          rounded-xl transition-all duration-300 ease-in-out "
        >
          <span className="text-sm fomt-bold text-black500">Buy Now</span>
        </button>
      </div>
    </div>
  </div>
);

const Slide2 = () => (
  <video
    className="h-full w-full object-cover
    "
    src="/assest/videos/de531f6b-a718-4592-8808-d4fad11ebce1.mp4"
    autoPlay
  />
);
const Slide4 = () => (
  <div className="relative h-full">
    <Image
      className="object-cover"
      fill
      src="/assest/images/redMan.jpg"
      alt="set"
    />
    <div className="w-full h-full absolute top-0 left-0 bg-black500-60">
      <div className="flex h-full flex-col items-center  justify-center">
        <span className="text-sm font-medium text-white text-center">
          Enjoy the Game with Valorant
        </span>
        <p className="font-bold text-6xl text-white text-center mt-2">
          Enjoy the Game with Valorant
        </p>
        <button
          className="max-w-[150px] w-full h-auto py-4 px-8 mt-8  bg-pink100-75  hover:bg-pink100
          rounded-xl transition-all duration-300 ease-in-out "
        >
          <span className="text-sm fomt-bold text-black500">Buy Now</span>
        </button>
      </div>
    </div>
  </div>
);

export const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    if (activeSlide > 1) setActiveSlide(0);
    else setActiveSlide((prevState) => prevState + 1);
  };

  const handlePrv = () => {
    if (activeSlide < 1) setActiveSlide(2);
    else setActiveSlide((prevState) => prevState - 1);
  };

  return (
    <div>
      <div className="w-full h-[70vh]">
        <div className="relative h-full">
          {activeSlide === 0 && <Slide1 />}
          {activeSlide === 1 && <Slide2 />}
          {activeSlide === 2 && <Slide3 />}
          {activeSlide === 3 && <Slide4 />}

          <div className="w-full h-20 py-2 px-2 absolute bottom-0 text-white left-0">
            <div className="w-full h-full flex items-center z-10 justify-center gap-2">
              <button onClick={handlePrv}>
                <Icons.ArrowLeft />
              </button>

              <button
                onClick={() => setActiveSlide(0)}
                className="w-28 h-full rounded-xl relative overflow-hidden"
              >
                <Image
                  src="/assest/images/red.webp"
                  alt="red"
                  className="object-cover"
                  fill
                />
              </button>
              <button
                onClick={() => setActiveSlide(1)}
                className="w-28 h-full rounded-xl relative overflow-hidden"
              >
                <Image
                  className="object-cover"
                  fill
                  src="/assest/images/green.webp"
                  alt="green"
                />
              </button>
              <button
                onClick={() => setActiveSlide(2)}
                className="w-28 h-full rounded-xl relative overflow-hidden"
              >
                <Image
                  className="object-cover"
                  fill
                  src="/assest/images/baskalasim_seti.jpeg"
                  alt="green"
                />
              </button>
              <button
                onClick={() => setActiveSlide(3)}
                className="w-28 h-full rounded-xl relative overflow-hidden"
              >
                <Image
                  className="object-cover"
                  src="/assest/images/redMan.jpg"
                  fill
                  alt="green"
                />
              </button>
              <button onClick={handleNext}>
                <Icons.ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
