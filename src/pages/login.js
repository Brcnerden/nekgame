import Icons from "@/icons";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="w-full h-auto mx-auto max-md:mb-[30vh] my-[12vw] px-4">
        <div className="bg-blue300 max-w-[400px] w-full h-full py-2 px-2 text-white rounded-xl mx-auto">
          <div className="w-full  h-auto py-5 px-2 bg-blue600-50 rounded-xl">
            <div className="flex ">
              <div className="w-12 h-12 flex justify-center items-center bg-blue300-50 rounded-xl">
                <Icons.User className="w-[32px] h-[32px]" />
              </div>
              <div>
                <div className="text-lg font-bold px-2">Log in </div>
                <p className="text-sm font-medium px-2">
                  Don't have an account?
                  <a className="ml-1 text-sm text-purple100 font-semibold">
                    Sing up now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue600-50 w-full h-auto rounded-xl px-2 py-2 mt-2">
            <label className="text-sm font-medium">Email</label>
            <input
              placeholder="Enter your email..."
              className="w-full h-10 py-2 px-2 text-sm text-white font-medium rounded-xl bg-blue600-50  "
            />
            <div>
              <div className="flex justify-between mt-2">
                <label className="text-sm font-medium">Password</label>
                <a className="text-xs text-purple100 hover:underline">
                  Forgot Password
                </a>
              </div>
              <input
                placeholder="Enter your password..."
                className="w-full h-10 py-2 px-2 text-sm text-white font-medium rounded-xl bg-blue600-50  "
              />
            </div>
            <button className="w-full h-10 py-2 px-2 text-black bg-purple100 rounded-xl mt-2">
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
