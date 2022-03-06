import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
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
  } = useAtoms();
  const [searchParams] = useSearchParams();
  //Local State
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState();
  console.log("🚀 --- Location --- location", location);
  //ID from query
  const id = searchParams.get("id");

  //Find the location
  const findLocation = useCallback(() => {
    setIsLoading(true);
    const item = articles.find((i) => String(i.id) === id);
    setLocation(item);
  }, [id]);

  useEffect(() => {
    findLocation();
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
