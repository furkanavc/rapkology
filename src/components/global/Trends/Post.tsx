import React from "react";
import Image from "next/image";
import Link from "next/link";
interface PostProps {
  index: number;
  description: string;
  authors: string[];
  slug: string;
}
const Post = ({ index, description, authors, slug }: PostProps) => {
  return (
    <div className="flex gap-10 ">
      <h2 className="font-saira-condensed text-[#2A2A2A] text-6xl font-bold min-w-16">
        {index < 9 ? `0${index + 1}` : index + 1}
      </h2>
      <div className="flex flex-col">
        <div className="flex w-full gap-2 items-center">
          <Image
            src="/images/avatar.png"
            alt="Author"
            width={32}
            height={32}
            className="rounded-[10px]"
          />
          <span className="font-bold text-sm md:text-base">{authors[0]}</span>
        </div>
        <p className="font-saira-condensed text-xl md:text-[25px] font-bold line-clamp-3 pt-2">
          {description}
        </p>
        <div className="border-b border-[#3B3B3B] my-5"></div>
        <Link
          href={`/blog/${slug}`}
          className="text-sm md:text-base hover:bg-white/10 max-w-fit p-2 duration-300"
        >
          Daha Fazla Oku
        </Link>
      </div>
    </div>
  );
};

export default Post;
