import { atom } from "recoil";
//Helpers
import { getInitialTheme } from "../../helpers";

//------------------------------------------------------------------
//MARK: State Management - Default Initial values
//------------------------------------------------------------------
export const darkMode = atom({
  key: "darkMode",
  default: getInitialTheme,
});

export const locations = atom({
  key: "locations",
  default: [],
});
