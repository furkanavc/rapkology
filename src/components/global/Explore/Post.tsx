import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateTR } from "@/utils/helpers/index";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/utils/hooks/useIsMobile";
interface PostProps {
  image: string;
  description: string;
  authors: string[];
  slug: string;
  createdAt: string;
}
const Post = ({ image, description, authors, slug, createdAt }: PostProps) => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  return (
    <div
      className={clsx(
        "gap-4",
        pathname === "/blog"
          ? "flex flex-col gap-4"
          : "flex flex-col lg:flex-row gap-4"
      )}
    >
      <div
        className={
          (clsx(""),
          pathname === "/blog" && !isMobile
            ? "flex gap-2 items-center"
            : "hidden")
        }
      >
        <Image
          src="/images/avatar.png"
          alt="Author"
          width={32}
          height={32}
          className="rounded-[10px]"
        />
        <span className="font-bold text-sm md:text-base">{authors[0]}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Image
          src={image}
          alt="Thumbnail"
          width={300}
          height={197}
          className="object-cover h-full w-full min-w-[150px] lg:min-w-[300px] lg:max-w-[300px]"
        />
        <span className="text-[#3B3B3B]">{formatDateTR(createdAt)}</span>
      </div>

      <div className="flex flex-col">
        <div
          className={
            (clsx(" gap-2 items-center"),
            pathname === "/blog" && !isMobile
              ? "hidden"
              : "flex gap-2 items-center")
          }
        >
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
