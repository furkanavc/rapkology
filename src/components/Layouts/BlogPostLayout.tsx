import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const BlogPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <div className="flex flex-col lg:flex-row lg:gap-16 container mx-auto">
        <div className="w-full lg:w-3/4">{children}</div>
        <div className="w-full lg:w-1/4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default BlogPostLayout;
