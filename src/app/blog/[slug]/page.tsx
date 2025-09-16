import React from "react";
import BlogPostLayout from "@/components/Layouts/BlogPostLayout";
import BlogPost from "@/components/Blogpost/Post";
import MoreContent from "@/components/Blogpost/MoreContent";
import Trends from "@/components/global/Trends";
import { Post } from "@/utils/types/index";
const getData = async (): Promise<Post[]> => {
  const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", {
    cache: "no-store",
    // next: { revalidate: 60 }, yenilemek için
  });
  if (!res.ok) {
    throw new Error("Veri Çekilemedi");
  }
  return res.json();
};
const Blogpost = async () => {
  const data = await getData();
  const contentData = data.slice(0, 4);

  return (
    <BlogPostLayout>
      <BlogPost />
      <MoreContent posts={contentData} />
      <Trends />
    </BlogPostLayout>
  );
};

export default Blogpost;
