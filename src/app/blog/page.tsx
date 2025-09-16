import React from "react";
import BlogLayout from "@/components/Layouts/BlogLayout";
import Hero from "@/components/Blog/Hero";
import Explore from "@/components/global/Explore";
import { FilterProvider } from "@/context/FilterContext";

const Blog = () => {
  return (
    <BlogLayout>
      <Hero />
      <FilterProvider>
        <div className="container mx-auto">
          <Explore />
        </div>
      </FilterProvider>
    </BlogLayout>
  );
};

export default Blog;
