import React from "react";
import { Post } from "@/utils/types/index";

const getData = async (): Promise<Post[]> => {
  const res = await fetch("https://dummyjson.com/c/a7c4-016a-47aa-8241", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Veri Çekilemedi");
  }
  return res.json();
};
const Trends = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item: Post) => {
        return <div key={item._id}>{item.lang}</div>;
      })}
    </div>
  );
};

export default Trends;
