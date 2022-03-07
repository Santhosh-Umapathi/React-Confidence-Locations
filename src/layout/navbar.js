import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//Components
import { Logo, Language, ThemeBulb } from "../components";
//Constants

import { useAtoms } from "../recoil/hooks";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    state: { darkMode },
  } = useAtoms();

  return (
    <div
      className={`${
        pathname === "/" ? "hidden" : "flex"
      } w-full h-16 sticky top-0
      items-center justify-between bg-primary px-2 md:px-10 z-20 mb-5`}
    >
      <Logo
        darkMode={darkMode}
        css="w-6 h-8 sm:w-8 sm:h-12 z-50"
        cssText="text-lg sm:text-xl w-52 sm:w-full"
        cssTextTwo="text-white"
        cssContainer="cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => navigate("/home")}
      />

      <div className="flex items-center justify-center space-x-3 md:space-x-10">
        <ThemeBulb />
        <Language />
      </div>
    </div>
  );
};

export default memo(Navbar);
