"use client";
import clsx from "clsx";
import React from "react";
import { usePosts } from "@/context/PostContext";
import { useFilter } from "@/context/FilterContext";
interface FilterProps {
  className?: string;
}
const Filter = ({ className }: FilterProps) => {
  const posts = usePosts();
  const { selectedTags, toggleTag } = useFilter();
  const tags = [...new Set(posts.flatMap((post) => post.attributes.tags))];

  return (
    <div className={clsx(className ?? "")}>
      <h2 className="font-bold font-saira-condensed text-[30px] md:text-[40px]">
        NE GÖRMEK İSTERSİN?
      </h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={clsx(
                " h-10 px-4 cursor-pointer hover:opacity-80 duration-300",
                isSelected
                  ? " border border-black text-black bg-[#F0E74D]"
                  : "border border-white bg-black"
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
