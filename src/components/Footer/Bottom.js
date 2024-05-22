import Icons from "@/icons";

export const Bottom = () => {
  return (
    <div className="w-full h-auto">
      <div className="max-w-safe  w-full text-white mx-auto">
        <div className="border-t-[1px] border-white200"></div>
        <div className="flex  items-center py-[16px] gap-4">
          <Icons.Nekgame className="w-[86px] h-[48px] max-md:hidden" />
          <div className=" flex flex-row max-md:flex-col max-md:px-5 ">
            <div className="w-auto h-auto pr-5 max-md:pb-[16px]">
              <h6 className="text-xs font-normal max-md:pb-[16px]">
                For your questions about payment and products
              </h6>
              <p className="text-xs font-bold">support@nekgame.com</p>
            </div>
            <div className="w-auto h-auto pr-5  max-md:pb-[16px]">
              <h6 className="text-xs font-normal">
                For wholesale and other questions
              </h6>
              <p className="text-xs font-bold">wholesale@nekgame.com</p>
            </div>
            <div className="w-auto h-auto">
              <h6 className="text-xs font-normal">
                For wholesale and other questions
              </h6>
              <p className="text-xs font-bold">partnership@nekgame.com</p>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-white200"></div>
        <p className="text-xs font-medium py-2 max-md:px-5 ">
          Using this website means you accept the Terms and Conditions and
          Privacy policy. All copyrights, trademarks, service marks are property
          of their respective owners
        </p>
      </div>
    </div>
  );
};
