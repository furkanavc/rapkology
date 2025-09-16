import React from "react";
import BlogPostLayout from "@/components/Layouts/BlogPostLayout";
import BlogPost from "@/components/Blogpost/Post";
import MoreContent from "@/components/Blogpost/MoreContent";
import Trends from "@/components/global/Trends";
import { Post } from "@/utils/types/index";
import type { Metadata } from "next";

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
interface BlogPostPageProps {
  params: { slug: string };
}
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const data = await getData();
  const { slug } = await params;
  const currentPost = data.find((post) => post.attributes.slug === slug);

  if (!currentPost) {
    return {
      title: "Blog Post",
      description: "Blog içeriği bulunamadı.",
    };
  }

  return {
    title: currentPost.attributes.title,
    description: currentPost.attributes.desc,
    openGraph: {
      title: currentPost.attributes.title,
      description: currentPost.attributes.desc,
      images: [
        {
          url: currentPost.attributes.img,
        },
      ],
    },
  };
}

const Blogpost = async ({ params }: BlogPostPageProps) => {
  const data = await getData();
  const { slug } = await params;

  const currentPost = data.find((post: Post) => post.attributes.slug === slug);

  const otherPosts = data
    .filter((post: Post) => post.attributes.slug !== slug)
    .slice(0, 4);

  return (
    <BlogPostLayout>
      {currentPost && <BlogPost post={currentPost} />}
      <MoreContent posts={otherPosts} />
      <Trends />
    </BlogPostLayout>
  );
};

export default Blogpost;
