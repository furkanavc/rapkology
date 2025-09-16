import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/utils/types";

interface MoreContentProps {
  posts: Post[];
}

const MoreContent = ({ posts }: MoreContentProps) => {
  if (!posts || posts.length === 0) return null;
  return (
    <div className="flex flex-col gap-5 px-5 lg:px-0">
      <h1 className="font-bold font-saira-condensed text-[40px] md:text-6xl">
        DAHA FAZLA İÇERİK
      </h1>
      {posts.map((item) => (
        <Link
          href={`/blog/${item.attributes.slug}`}
          key={item._id}
          className="flex gap-2 items-center"
        >
          <Image
            src={item.attributes.img}
            alt={item.attributes.title}
            width={170}
            height={100}
            className="object-cover h-full w-full min-w-[170px] max-w-[170px]"
          />
          <p className="text-[20px] lg:text-[25px] font-saira-condensed font-bold uppercase line-clamp-3">
            {item.attributes.desc}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default MoreContent;
