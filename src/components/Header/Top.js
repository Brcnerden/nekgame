import Icons from "@/icons";

export const Top = () => {
  return (
    <div className="w-full h-full  flex items-center max-lg:hidden">
      <div className="w-full h-10  bg-blue400 bg-gradient-to-r from-blue300 to-transparent  ">
        <div className="w-10/12 h-full mx-auto max-w-safe bg-blue200">
          <div className="text-white text-center w-full h-full flex items-center gap-4">
            <div className=" flex gap-1 font-semibold">
              <Icons.Shield />
              <span className="text-xs ">100% Safety Guarantee</span>
              <span className="text-xs">|</span>
            </div>
            <div className="flex gap-1 font-semibold">
              <Icons.Time />
              <span className="text-xs ">7/24 Live Support </span>
              <span className="text-xs">|</span>
            </div>
            <div className="flex gap-1 font-semibold">
              <Icons.Instant />
              <span className="text-xs ">Instant Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
