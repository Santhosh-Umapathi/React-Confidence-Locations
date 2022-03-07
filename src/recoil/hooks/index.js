import { useRecoilState } from "recoil";
//Atoms
import * as atoms from "../atoms";

//------------------------------------------------------------------
//MARK: State Management - States & Actions Hook
//------------------------------------------------------------------

export const useAtoms = () => {
  const [darkMode, updateDarkMode] = useRecoilState(atoms.darkMode);
  const [locations, updateLocations] = useRecoilState(atoms.locations);

  const toggleTheme = (payload) => {
    const root = window.document.documentElement;
    const isDark = payload === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(payload);
    localStorage.setItem("color-theme", payload);
    updateDarkMode(payload === "dark");
  };

  const setArticles = (payload) => {
    updateLocations(payload);
  };

  //Atoms State
  const state = {
    darkMode,
    locations,
  };

  //Atoms Actions
  const actions = {
    toggleTheme,
    setArticles,
  };

  return { state, actions };
};
