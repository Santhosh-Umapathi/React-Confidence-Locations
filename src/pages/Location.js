import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    state: { locations },
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
    const item = locations.find((i) => String(i.id) === id);
    //Id was altered or not found
    if (!item) navigate(-1);

    setLocation(item);
  }, [id]);

  useEffect(() => {
    //Query Validation
    if (!id || id === "") return navigate("/home");

    findLocation();
    //Clearing Data
    actions.setArticles([]);
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
