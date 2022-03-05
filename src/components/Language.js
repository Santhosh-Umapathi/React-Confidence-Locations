import { memo } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const LanguageComponent = (val) => (
    <span
      onClick={() => changeLanguage(val)}
      className={`${
        i18n.language === val ? "font-bold text-orange-600" : "font-normal"
      } hover:opacity-70 transition-opacity cursor-pointer`}
    >
      {val.toUpperCase()}
    </span>
  );

  return (
    <div className="flex space-x-1 md:space-x-2 text-bgLight select-none text-sm md:text-base">
      {LanguageComponent("en")}
      <span>|</span>
      {LanguageComponent("it")}
    </div>
  );
};

export default memo(Language);
