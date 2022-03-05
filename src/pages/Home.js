import { useCallback, useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
//API
import { api } from "../api";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Constants
import { ERROR_IGNORE_LIST, FILTER_FIELDS } from "../constants";
//Helpers
import { ErrorToast } from "../helpers";
//Components
import { Skeleton } from "../components";
import ArticleCard from "../components/page/ArticleCard";

//Components - Lazy Loading
const ArticleCardSkeleton = lazy(() =>
  import("../components/page/ArticleCardSkeleton")
);
const Pagination = lazy(() => import("../components/page/Pagination"));
const Searchbar = lazy(() => import("../components/page/Searchbar"));
const SectionHeader = lazy(() => import("../components/page/SectionHeader"));

const Home = () => {
  const {
    state: { darkMode, articles, searchText },
    actions,
  } = useAtoms();
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  //Updating Page Value
  let page =
    +searchParams.get("page") <= 0 || isNaN(+searchParams.get("page"))
      ? 0
      : +searchParams.get("page");
  //Updating Query Value
  let query =
    searchText !== ""
      ? searchText
      : searchParams.get("query")
      ? searchParams.get("query")
      : "trending";

  //Updating URL Queries
  useEffect(() => {
    //Query Validation
    if (!searchParams.get("query"))
      setSearchParams({ query: "trending", page: 0 });

    //Page Validation
    if (
      !searchParams.get("page") ||
      isNaN(+searchParams.get("page")) ||
      +searchParams.get("page") < 0
    )
      setSearchParams({ query, page: 0 });
  }, []);

  //Network request to get articles
  const getArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await api({
        query,
        page,
        fields: FILTER_FIELDS,
      });

      actions.setArticles(results.response.docs);
    } catch (error) {
      !ERROR_IGNORE_LIST.includes(error.message) &&
        ErrorToast({ message: t("error"), darkMode });
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [page]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div className="flex flex-col items-center w-full h-full space-y-10 md:space-y-10 mx-2 md:mx-0">
      <Suspense fallback={<Skeleton css="w-full md:w-1/2 h-12 flex" />}>
        <Searchbar setIsLoading={setIsLoading} page={page} />
      </Suspense>

      <div className="flex flex-col w-full md:px-20 space-y-5 md:space-y-3 ">
        <Suspense fallback={<Skeleton css="flex w-1/3 h-10" />}>
          <SectionHeader isSearching={searchText.length > 0} />
        </Suspense>
        <PerfectScrollbar
          className={`rounded-md shadow-md ${
            darkMode ? "bg-primary" : "bg-white"
          }`}
        >
          <div className={`flex flex-col w-full h-96 space-y-3`}>
            {isLoading ? (
              <div
                className={`h-[500px] flex flex-col ${
                  darkMode ? "bg-primary" : "bg-white"
                }`}
              >
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
              </div>
            ) : !articles.length > 0 ? (
              <span
                className={`p-5 text-xl ${
                  darkMode ? "text-bgLight" : "text-grey"
                }`}
              >
                {t("notFound")}
              </span>
            ) : (
              articles.map((item) => <ArticleCard item={item} key={item._id} />)
            )}
          </div>
        </PerfectScrollbar>

        {articles.length > 0 && (
          <Suspense
            fallback={
              <div className="flex w-full justify-end">
                <Skeleton css="flex w-1/5 h-6 justify-end" />
              </div>
            }
          >
            <Pagination page={page} query={query} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Home;
