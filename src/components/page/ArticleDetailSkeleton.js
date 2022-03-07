import { memo } from "react";
//Components
import { Skeleton } from "..";

const ArticleDetailSkeleton = () => (
  <div className="flex flex-col px-2 md:px-5 space-y-2 md:space-y-5 w-full">
    <Skeleton
      css="flex w-7 h-7"
      circle
      baseColor="#24292F"
      highlightColor="#0D1116"
    />

    <div className="flex flex-col space-y-3 p-5 w-full">
      <Skeleton
        css="flex w-2/3 h-12"
        baseColor="#24292F"
        highlightColor="#0D1116"
      />

      <div className="flex flex-col space-y-3">
        <Skeleton
          css="flex w-60 h-6"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
        <Skeleton
          css="flex w-60 h-6"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
        <Skeleton
          css="flex w-60 h-6"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
        <Skeleton
          css="flex w-60 h-6"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
        <Skeleton
          css="flex w-60 h-6"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />

        <Skeleton
          css="flex w-60 h-6"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
      </div>
      <Skeleton
        css="flex w-72 h-36"
        baseColor="#24292F"
        highlightColor="#0D1116"
      />
    </div>
  </div>
);

export default memo(ArticleDetailSkeleton);
