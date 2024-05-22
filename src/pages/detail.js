import Icons from "@/icons";
import Image from "next/image";
import { useState } from "react";

export default function DetailPage() {
  const [count, setCount] = useState(0);

  const increase_click = () => setCount(count + 1);

  const decrease_click = () => {
    if (count === 0) {
      count === 0;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="max-w-[940px] w-full h-auto flex max-md:flex-col max-md:items-center mx-auto ">
      <div className=" bg-blue300-50  text-white w-full h-full mt-4 mx-2 p-2 rounded-xl">
        {/* //başlangıc */}
        <div className="w-full h-auto flex justify-between p-2 rounded-xl bg-blue600-50">
          <div className="text-sm font-medium text-white">
            Products in My Cart
          </div>
          <div className="flex items-center">
            <div className="text-xs font-medium mr-2">Remove All</div>
            <Icons.Garbage />
          </div>
        </div>
        {/* bıtıs */}
        {/* 2 satır */}
        <div className="flex  max-md:flex-col-reverse items-center">
          <div className=" bg-blue600-50 flex items-center max-md:w-full justify-center mt-5  mr-2 rounded-xl w-10 h-10">
            <Icons.Garbage />
          </div>
          {/* Garbage bitis */}
          <div className="mt-5 bg-blue600-50   flex items-center rounded-xl h-auto w-full">
            <div className="w-full h-auto max-md:flex-col   py-2 px-2 flex items-center">
              <Image
                src="/assest/images/BronzePremium.webp"
                width={80}
                height={80}
                className="rounded-xl"
              />

              <div className=" flex-1 max-md:w-full max-md:mb-2 h-full  max-md:px-2 py-6 px-2 flex    justify-center bg-blue600 rounded-xl items-center">
                <div className="text-sm   xl:text-lg lg:text-lg overflow-hidden font-medium">
                  Knight Online Bronze
                </div>
              </div>
              <div className="flex  max-md:w-full max-md:mb-2 h-full items-center py-5 px-2 mr-2 bg-blue600 rounded-xl ">
                <button
                  className="w-8 h-8  text-center shrink-0 bg-blue300-50 rounded-xl"
                  onClick={increase_click}
                >
                  +
                </button>
                <div className="bg-blue300-50 flex justify-center px-3  rounded-xl w-full h-8  text-center">
                  {count}
                </div>
                <button
                  className="w-8 h-8 text-center shrink-0 bg-blue300-50 rounded-xl"
                  onClick={decrease_click}
                >
                  -
                </button>
              </div>
              <div className=" h-full max-md:w-full max-md:px-2 py-6 px-2 flex items-center justify-center bg-blue600 rounded-xl">
                <p className="text-xl font-medium text-white">$ 8.76</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:w-full ">
        <div className="sticky top-2   lg:w-[350px] w-full h-auto py-2 px-2  mt-4  bg-blue300-50 rounded-xl">
          <div className="w-full h-auto py-2 px-2 mt-2 bg-blue600-50 rounded-xl">
            <h1 className="text-sm font-medium text-white">
              Total Basket Amount
            </h1>
          </div>
          <div className="w-full h-auto py-2 px-2 mt-2 bg-blue600-50 rounded-xl">
            <h1 className="text-sm font-medium text-white">
              Subtotal: $ 17.52
            </h1>
          </div>
          <div className="w-full h-auto py-2 px-2 mt-2 bg-blue600-50 rounded-xl">
            <h1 className="text-sm font-medium text-white">Discount: $ 0.00</h1>
          </div>
          <div className="w-full h-auto py-2 px-2 mt-2 bg-blue600-50 rounded-xl">
            <h1 className="text-sm font-medium text-white">Total: $ 17.52</h1>
          </div>
          <div>
            <label className="w-full h-auto flex gap-2 mt-2">
              <div className="w-4 h-4 flex items-center justify-center relative">
                <input
                  type="checkbox"
                  className="w-full h-full appearance-none py-2 px-2 text-sm text-white font-medium bg-blue600-50 rounded outline-none peer cursor-pointer"
                />
                <div className="hidden peer-checked:block w-2 h-2 bg-white rounded-sm absolute top-1 left-1 transition-all ease-inout duration-200"></div>
              </div>
              <span className="text-xs font-medium text-white">
                I have read and agree to the Privacy Policy
              </span>
            </label>
          </div>
          <div>
            <label className="w-full h-auto flex gap-2 mt-2">
              <div className="w-4 h-4 flex items-center justify-center relative">
                <input
                  type="checkbox"
                  className="w-full h-full appearance-none py-2 px-2 text-sm text-white font-medium bg-blue600-50 rounded outline-none peer cursor-pointer"
                />
                <div className="hidden peer-checked:block w-2 h-2 bg-white rounded-sm absolute top-1 left-1 transition-all ease-inout duration-200"></div>
              </div>
              <span className="text-xs font-medium text-white">
                I have read and agree to the Refund and Cancellation Policy
              </span>
            </label>
          </div>
          <div>
            <label className="w-full h-auto flex gap-2 mt-2">
              <div className="w-4 h-4 flex items-center justify-center relative">
                <input
                  type="checkbox"
                  className="w-full h-full appearance-none py-2 px-2 text-sm text-white font-medium bg-blue600-50 rounded outline-none peer cursor-pointer"
                />
                <div className="hidden peer-checked:block w-2 h-2 bg-white rounded-sm absolute top-1 left-1 transition-all ease-inout duration-200"></div>
              </div>
              <span className="text-xs font-medium text-white underline cursor-pointer">
                I have read and accept the terms and conditions
              </span>
            </label>
          </div>
          <button className="w-full h-auto py-3 px-2 flex items-center justify-center bg-purple100 rounded-xl mt-2">
            <span className="text-sm font-bold text-black">Go to Payment</span>
          </button>
          <button className="w-full h-auto py-3 px-2 flex items-center justify-center bg-blue300-80 rounded-xl mt-2">
            <span className="text-sm font-bold text-white">
              Continue Shopping
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
