import { useRecoilState } from "recoil";
//Atoms
import * as atoms from "../atoms";

//------------------------------------------------------------------
//MARK: State Management - States & Actions Hook
//------------------------------------------------------------------

export const useAtoms = () => {
  const [darkMode, updateDarkMode] = useRecoilState(atoms.darkMode);
  const [articles, updateArticles] = useRecoilState(atoms.articles);
  const [article, updateArticle] = useRecoilState(atoms.article);

  const toggleTheme = (payload) => {
    const root = window.document.documentElement;
    const isDark = payload === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(payload);
    localStorage.setItem("color-theme", payload);
    updateDarkMode(payload === "dark");
  };

  const setArticles = (payload) => {
    updateArticles(payload);
  };

  const setArticle = (payload) => {
    updateArticle(payload);
  };

  //Atoms State
  const state = {
    darkMode,
    articles,
    article,
  };

  //Atoms Actions
  const actions = {
    toggleTheme,
    setArticles,
    setArticle,
  };

  return { state, actions };
};
