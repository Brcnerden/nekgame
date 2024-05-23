import Image from "next/image";

export const Cards = ({ image }) => {
  return (
    <div className="relative  h-full max-h-[500px] rounded-xl overflow-hidden group">
      <div className="relative w-full h-full">
        <a className="text-sm font-bold">
          <Image
            src={image}
            width={178}
            height={228}
            className="object-cover"
            alt="games"
          />
        </a>

        <div className="absolute inset-0 max-w-[178px] w-full bg-blue600-80 bg-opacity-0 hover:bg-opacity-80 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="text-sm xl:text-xl lg:text-xl font-bold text-white">
            View Products
          </span>
        </div>
      </div>
    </div>
  );
};
