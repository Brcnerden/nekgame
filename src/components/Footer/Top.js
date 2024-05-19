import Icons from "@/icons";

export const Top = () => {
  return (
    <>
      <div className="w-full  bg-blue700 max-md:hidden">
        <div className="max-w-[976px] justify-between w-full mx-auto py-2 text-white">
          <div className="flex ">
            <div className="px-5">Visa</div>
            <div>Master</div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[976px] w-full mx-auto flex  text-white">
          <div className="flex py-5 flex-wrap ">
            <div className="px-5 ">
              <h6 className="text-sm font-bold leading-8">Nekgame</h6>
              <div className="flex flex-col">
                <span className="text-xs font-normal leading-8 ">About Us</span>
                <span className="text-xs font-normal">Contact</span>
              </div>
            </div>
            <div className="px-5">
              <h6 className="text-sm font-bold leading-8">Client</h6>
              <div className="flex flex-col">
                <span className="text-xs font-normal leading-8">
                  Privacy Agreement
                </span>
                <span className="text-xs font-normal  leading-8">
                  User Agreement
                </span>
                <span className="text-xs font-normal  leading-8 ">PDPA</span>
                <span className="text-xs font-normal  leading-8 ">Support</span>
              </div>
            </div>
            <div className="px-5">
              <h6 className="text-sm font-bold  leading-8 ">Policies</h6>
              <div className="flex flex-col ">
                <span className="text-xs font-normal  leading-8">
                  Terms And Conditions
                </span>
                <span className="text-xs font-normal leading-8 ">
                  Cookie Policy
                </span>
                <span className="text-xs font-normal  leading-8 ">
                  Aml/Kyc Draft
                </span>
              </div>
            </div>
            <div className="px-5">
              <h6 className="text-sm font-bold leading-8 ">Service</h6>
              <div className="flex flex-col">
                <span className="text-xs font-normal  leading-8 ">
                  100% Safety Guarantee
                </span>
                <span className="text-xs font-normal  leading-8 ">
                  7/24 Live Support
                </span>
                <span className="text-xs font-normal  leading-8 ">
                  Instant Delivery
                </span>
              </div>
            </div>
            <div className="px-5">
              <h6 className="text-sm font-bold  leading-8 ">
                Our Social Media Account
              </h6>
              <div className="flex flex-col">
                <div className="w-[32px] h-[32px] bg-blue500 rounded-lg flex justify-center text-center">
                  <a
                    className=" flex items-center justify-center purple100"
                    href="http://www.facebook.com"
                  >
                    <Icons.Facebook className="h-[24px] w-[24px]" />
                  </a>
                </div>
                <span className="text-sm font-normal  leading-8  mt-2">
                  Pasific Technology FZCO 35754
                </span>
                <span className="text-sm font-normal">
                  Dubai Silicon Oasis, DDP, Building A1,
                </span>
                <span className="text-sm font-normal">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//
//

<div>
  <h6 className="text-sm font-bold">Our Social Media Account</h6>
  <div className="flex flex-col">
    <span>
      <a>
        <Icons.Facebook />
      </a>
    </span>
    <span className="text-xs font-normal">Pasific Technology FZCO 35754</span>
    <span className="text-xs font-normal">
      Dubai Silicon Oasis, DDP, Building A1,
    </span>
    <span className="text-xs font-normal">Dubai, United Arab Emirates</span>
  </div>
</div>;
