"use client";
import React from "react";
import { Post } from "@/utils/types";
import { usePosts } from "@/context/PostContext";
import PostComponent from "./Post";
import clsx from "clsx";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/utils/hooks/useIsMobile";
const Trends = () => {
  const posts = usePosts();
  const params = useParams();
  const isMobile = useIsMobile();
  const displayedPosts = isMobile ? posts.slice(0, 4) : posts.slice(0, 9);

  const isSlugPage = !!params.slug;

  return (
    <div className="container mx-auto flex flex-col w-full items-center lg:items-start gap-10 py-10 px-4 md:px-0">
      <div className="flex items-center gap-2">
        <h1 className="font-bold font-saira-condensed text-[40px] md:text-6xl">
          TRENDLER
        </h1>
        <Image
          src="/icons/trends-arrow.svg"
          alt="Arrow"
          width={65}
          height={65}
        />
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-5",
          isSlugPage ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {displayedPosts.map((item: Post, index: number) => {
          return (
            <PostComponent
              key={item._id}
              index={index}
              description={item.attributes.content}
              authors={item.attributes.authors}
              slug={item.attributes.slug}
            />
          );
        })}
      </div>
      <Link
        href="/blog"
        style={{
          clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 93%)",
        }}
        className=" bg-white h-12 w-[186px] flex items-center self-center justify-center text-black text-sm font-bold hover:opacity-80 duration-300 z-10"
      >
        Tümünü Gör
      </Link>
    </div>
  );
};

export default Trends;
