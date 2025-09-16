"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Post } from "@/utils/types";
import { usePosts } from "@/context/PostContext";
import clsx from "clsx";
import PostComponent from "./Post";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useFilter } from "@/context/FilterContext";
import Filter from "./Filter";
const Explore = () => {
  const posts = usePosts();
  const { selectedTags } = useFilter();

  const [isList, setIsList] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const postsPerPage = 4;

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    return selectedTags.length > 0
      ? posts.filter((post) =>
          post.attributes.tags.some((tag) => selectedTags.includes(tag))
        )
      : posts;
  }, [posts, selectedTags]);

  useEffect(() => {
    setPage(1);
    setVisiblePosts(filteredPosts.slice(0, postsPerPage));
  }, [filteredPosts]);

  useEffect(() => {
    const newPosts = filteredPosts.slice(0, page * postsPerPage);
    setVisiblePosts(newPosts);
  }, [page, filteredPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (
        scrollTop + clientHeight >= scrollHeight - 50 &&
        !loading &&
        visiblePosts.length < posts.length
      ) {
        setLoading(true);
        setTimeout(() => {
          setPage((prev) => prev + 1);
          setLoading(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, visiblePosts, posts]);

  return (
    <div
      className=" flex flex-col w-full lg:w-3/4 gap-10 px-4 md:px-0"
      ref={containerRef}
    >
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold font-saira-condensed text-[40px] md:text-6xl">
            KEŞFET
          </h1>
          <Image
            src="/icons/explore-compass.svg"
            alt="Arrow"
            width={65}
            height={65}
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="hover:opacity-80 p-1 cursor-pointer">
            <Image
              src="/icons/magnifier.svg"
              width={23}
              height={22}
              alt="Search"
            />
          </button>
          <button
            onClick={() => setIsList(true)}
            className="hover:opacity-80 p-1 cursor-pointer hidden lg:block"
          >
            <Image src="/icons/list.svg" width={23} height={19} alt="List" />
          </button>
          <button
            onClick={() => setIsList(false)}
            className="hover:opacity-80 p-1 cursor-pointer hidden lg:block"
          >
            <Image src="/icons/grid.svg" width={23} height={19} alt="Grid" />
          </button>
        </div>
      </div>
      <Filter className="block lg:hidden" />
      <div
        className={clsx(
          " grid w-full gap-10 py-10 px-4 md:px-0",
          isList ? "grid-cols-1" : "grid-cols-2"
        )}
      >
        {visiblePosts.map((item: Post) => (
          <PostComponent
            key={item._id}
            description={item.attributes.content}
            authors={item.attributes.authors}
            image={item.attributes.img}
            slug={item.attributes.slug}
            createdAt={item.createdAt}
          />
        ))}
      </div>

      {loading && (
        <div className="flex w-full justify-center py-5">
          <AiOutlineLoading3Quarters className="animate-spin text-3xl text-gray-700" />
        </div>
      )}
    </div>
  );
};

export default Explore;
