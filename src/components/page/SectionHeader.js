import { memo } from "react";
import { useTranslation } from "react-i18next";
//Recoil
import { useAtoms } from "../../recoil/hooks";

const SectionHeader = ({ isSearching = false }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  const { t } = useTranslation();

  return (
    <div className="sticky top-32 md:top-20 z-20 w-fit">
      <span
        className={`text-2xl select-none  ${
          darkMode ? "text-bgLight" : "text-grey"
        }`}
      >
        {isSearching ? t("results") : t("latest")}
      </span>
      <hr
        className={`w-8 border-2 rounded-sm ${
          darkMode ? "border-bgLight" : "border-grey"
        }`}
      />
    </div>
  );
};

export default memo(SectionHeader);
