import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Logo
import { Logo } from "../components";
//Recoil
import { useAtoms } from "../recoil/hooks";

const Splash = () => {
  const navigate = useNavigate();

  const {
    state: { darkMode },
  } = useAtoms();

  // Show Splash Screen - On Initial load
  useEffect(() => {
    setTimeout(() => navigate("/home"), 2000);
  }, []);

  return (
    <div
      className={`flex justify-center items-center w-full h-screen ${
        darkMode ? "bg-bgDark" : "bg-bgLight"
      } `}
    >
      <Logo
        cssContainer="animate-pulse"
        darkMode={darkMode}
        cssText="text-2xl sm:text-4xl"
        cssTextTwo={darkMode ? "text-white" : "text-black"}
        css="w-10 h-20 sm:w-14 sm:h-24"
      />
    </div>
  );
};

export default Splash;
