import React from "react";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="font-inter">
      <Header />
      {children}
      <footer>footer</footer>
    </div>
  );
};
