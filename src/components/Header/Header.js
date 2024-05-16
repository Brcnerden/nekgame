import Icons from "@/icons";
import { Middle } from "./Middle";
import { Top } from "./Top";
import { Bottom } from "./Bottom";

export const Header = () => {
  return (
    <>
      <div>
        <Top />
        <Middle />
        <Bottom />
      </div>
    </>
  );
};
