import Image from "next/image";
import React from "react";

export const Banner = () => {
  const slide1 = () => (
    <Image
      src="/images/baskalasım_seti.jpeg"
      width={1920}
      height={1080}
      alt="set"
    />
  );

  return (
    <div>
      <div className="w-full h-auto">
        <div className="h-[70vh]"></div>
      </div>
    </div>
  );
};
