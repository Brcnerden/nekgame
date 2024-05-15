import React from "react";
import { Banner } from "./views/Banner";
import Icons from "@/icons";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <Icons.Shield />
      <Icons.man />
      <Icons.instant />
      <Icons.time />
      <Icons.carrinho />
    </div>
  );
};
