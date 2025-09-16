import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateTR } from "@/utils/helpers/index";

interface PostProps {
  image: string;
  description: string;
  authors: string[];
  slug: string;
  createdAt: string;
}
const Post = ({ image, description, authors, slug, createdAt }: PostProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-5 min-w-[300px]">
        <Image src={image} alt="Thumbnail" width={300} height={197} />
        <span className="text-[#3B3B3B]">{formatDateTR(createdAt)}</span>
      </div>

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
        <p className="font-saira-condensed text-xl md:text-[25px] font-bold line-clamp-4 pt-2">
          {description}
        </p>
        <div className="border-b border-[#3B3B3B] my-5"></div>
        <Link href={`/blog/${slug}`} className="text-sm md:text-base">
          Daha Fazla Oku
        </Link>
      </div>
    </div>
  );
};

export default Post;
