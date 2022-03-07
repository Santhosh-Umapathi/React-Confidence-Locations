import { useCallback, useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

//API
import { api } from "../api";
//Recoil
import { useAtoms } from "../recoil/hooks";

//Helpers
import { ErrorToast } from "../helpers";
//Components
import { Skeleton, Spinner } from "../components";
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
  const [total, setTotal] = useState();
  const [lastElement, setLastElement] = useState(null);
  const [isReady, setIsReady] = useState(false);

  //Network request to get articles
  const getArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await api({ start, limit });
      setTotal(results.numberOfLocations);

      actions.setArticles([...articles, ...results.locations]);
    } catch (error) {
      ErrorToast({ message: t("error"), darkMode });
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [start]);

  useEffect(() => {
    isReady && getArticles();
  }, [getArticles, isReady]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        !isLoading && total >= articles.length && setStart((no) => no + limit);
      }
    });

    const currentObserver = observer;
    lastElement && currentObserver.observe(lastElement);

    return () => lastElement && currentObserver.unobserve(lastElement);
  }, [lastElement, isLoading]);

  //Resetting scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsReady(true);
  }, [isReady]);

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
          articles.map((item) => {
            const isLastElement = total === articles.length;

            return !isLastElement ? (
              <>
                <ArticleCard item={item} key={item.id} />
                <div ref={setLastElement} className="mt-20" />
              </>
            ) : (
              <ArticleCard item={item} key={item.id} />
            );
          })
        )}
      </div>

      {total === articles.length && (
        <span className="text-xl">End Of Locations</span>
      )}

      <Spinner isLoading={isLoading} />
    </div>
  );
};

export default Home;
