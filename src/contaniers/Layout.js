import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="font-inter">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
