import { useCallback, useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import PerfectScrollbar from "react-perfect-scrollbar";
//API
import { api } from "../api";
//Recoil
import { useAtoms } from "../recoil/hooks";

//Helpers
import { ErrorToast } from "../helpers";
//Components
import { Skeleton } from "../components";
import ArticleCard from "../components/page/ArticleCard";

//Components - Lazy Loading
const ArticleCardSkeleton = lazy(() =>
  import("../components/page/ArticleCardSkeleton")
);

const Home = () => {
  const {
    state: { darkMode, articles },
    actions,
  } = useAtoms();

  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(3);

  //Network request to get articles
  const getArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await api({ start, limit });

      actions.setArticles(results.locations);
    } catch (error) {
      ErrorToast({ message: t("error"), darkMode });
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [start, limit]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div className="flex flex-col items-center w-full h-full space-y-10 md:space-y-10 mx-2 md:mx-0">
      <div className="flex flex-col w-full md:px-20 space-y-5 md:space-y-3 ">
        {isLoading && !articles.length > 0 ? (
          <>
            {Array(3)
              .fill("")
              .map((_, ind) => (
                <Suspense
                  fallback={<Skeleton css="flex w-full h-12" />}
                  key={ind.toString()}
                >
                  <ArticleCardSkeleton />
                </Suspense>
              ))}
          </>
        ) : !isLoading && !articles.length > 0 ? (
          <span
            className={`p-5 text-xl ${darkMode ? "text-bgLight" : "text-grey"}`}
          >
            {t("notFound")}
          </span>
        ) : (
          articles.map((item) => <ArticleCard item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
