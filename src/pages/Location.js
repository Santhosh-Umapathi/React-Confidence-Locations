import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//API
import { api } from "../api";

//Helpers
import { ErrorToast } from "../helpers";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Components
import { Skeleton } from "../components";
import ArticleDetailCard from "../components/page/ArticleDetailCard";

//Components - Lazy Loading
const ArticleDetailSkeleton = lazy(() =>
  import("../components/page/ArticleDetailSkeleton")
);

const Location = () => {
  const {
    state: { articles },
    actions,
  } = useAtoms();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  //Local State
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState();

  //ID from query
  const id = searchParams.get("id");

  //Find the location
  const findLocation = useCallback(() => {
    setIsLoading(true);
    const item = articles.find((i) => String(i.id) === id);
    //Id was altered or not found
    if (!item) navigate(-1);

    setLocation(item);
  }, [id]);

  useEffect(() => {
    //Query Validation
    if (!id || id === "") return navigate("/home");

    findLocation();

    return () => actions.setArticles([]);
  }, [findLocation]);

  useEffect(() => {
    location && setTimeout(() => setIsLoading(false), 1000);
  }, [location]);

  return (
    <div className={`flex w-full`}>
      {isLoading ? (
        <Suspense fallback={<Skeleton css="flex w-full h-screen" />}>
          <ArticleDetailSkeleton />
        </Suspense>
      ) : (
        <ArticleDetailCard item={location} />
      )}
    </div>
  );
};

export default Location;
