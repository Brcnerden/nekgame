import { Middle } from "./Middle";
import { Top } from "./Top";
import { Bottom } from "./Bottom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handle_Click = () => {
    setIsMenuOpen(true);
  };

  const handle_Click_Close = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="relative z-20 ">
        <Top />
        <Middle menuOpen={handle_Click} />
        <Bottom menuClose={handle_Click_Close} isMenuOpen={isMenuOpen} />
      </header>
    </>
  );
};
