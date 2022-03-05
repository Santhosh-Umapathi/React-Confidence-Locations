import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//Components
import { Logo, Language, ThemeBulb } from "../components";
//Constants
import { BASE_ROUTE } from "../constants";
import { useAtoms } from "../recoil/hooks";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    state: { darkMode, articles },
    actions,
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
        css="w-8 h-12 z-50"
        cssText="text-xl"
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
