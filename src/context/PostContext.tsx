"use client";
import React, { createContext, useContext } from "react";
import { Post } from "@/utils/types";

export const PostsContext = createContext<Post[] | null>(null);

export function usePosts() {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error("No Context");
  return ctx;
}

export function PostsProvider({
  posts,
  children,
}: {
  posts: Post[];
  children: React.ReactNode;
}) {
  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
}
