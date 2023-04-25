import React from "react";
import TrendingCard from "./TrendingCard";
import { Post } from "@prisma/client";

type TrendingPropsType = {
  trendingPosts: Array<Post>;
};

const Trending: React.FC<TrendingPropsType> = ({ trendingPosts }) => {
  return (
    <section className="pt-3 pb-10">
      <hr className="border-1" />
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold ">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam iusto
          ratione id perferendis reprehenderit nemo!
        </p>
      </div>

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[3]}
        />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        dicta doloremque porro aspernatur deleniti, at ipsum! Cumque quas
        doloremque asperiores!
      </p>
    </section>
  );
};

export default Trending;
