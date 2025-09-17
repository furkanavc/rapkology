"use client";
import React from "react";
import { Post as PostType } from "@/utils/types";
import { FiEye } from "react-icons/fi";
import Breadcrumb from "../Layouts/Breadcrumb";
import Image from "next/image";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(14);
  return (
    <div className="flex flex-col gap-4 py-12 px-5 lg:px-0">
      <Breadcrumb className="mb-6 text-white" />
      <div className="flex items-center gap-2">
        <FiEye />
        <span className="">{(12904).toLocaleString()}</span>
      </div>
      <h1 className="text-[40px] lg:text-6xl font-bold font-saira-condensed">
        {post.attributes.title}
      </h1>
      <h2 className="text-[25px] font-bold font-saira-condensed">
        {post.attributes.desc}
      </h2>
      <Image
        src={post.attributes.img}
        alt={post.attributes.desc}
        width={740}
        height={320}
        className="w-full h-full max-h-[700px] object-cover"
      />
      <p className="mt-4">{post.attributes.content}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {(post.attributes.tags || []).map((tag) => {
          return (
            <span
              key={tag}
              className="bg-[#323232] h-10 px-3 flex items-center justify-center"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex items-center gap-5">
        <div
          onClick={() => {
            setLiked(!liked);
            setLikeCount(liked ? likeCount - 1 : likeCount + 1);
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          <span>
            <strong>{likeCount} Kişi</strong> Beğendi
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegComment />
          <span className="font-bold">3</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
