import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="font-inter">
      <Header />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  );
};
