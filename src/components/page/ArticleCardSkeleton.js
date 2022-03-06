import { memo } from "react";
//Components
import { Skeleton } from "..";
//Recoil
import { useAtoms } from "../../recoil/hooks";

const ArticleCardSkeleton = () => {
  const {
    state: { darkMode },
  } = useAtoms();
  return (
    <div
      className={`flex flex-col md:flex-row border-b p-2 md:p-5 md:space-x-5 hover:opacity-60 transition-opacity cursor-pointer relative rounded-md shadow-md ${
        darkMode
          ? "bg-primary border-bgDark text-bgLight"
          : "bg-white text-grey"
      }`}
    >
      <div className="flex flex-col space-y-1 md:space-y-2 w-full">
        <Skeleton css="flex w-2/3 h-12" />

        <div className="flex space-x-5 md:space-x-10 text-sm md:text-md font-thin">
          <Skeleton css="flex w-20 md:w-28 h-3" />
          <Skeleton css="flex w-20 md:w-28 h-3" />
          <Skeleton css="flex w-20 md:w-28 h-3" />
        </div>
        <div className="flex flex-col text-md">
          <Skeleton css="flex w-52 md:w-96 h-20" />
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCardSkeleton);
