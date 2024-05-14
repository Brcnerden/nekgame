import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="font-inter">
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};
