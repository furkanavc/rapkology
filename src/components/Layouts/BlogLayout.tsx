import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer className="flex-row w-full justify-between container mx-auto" />
    </main>
  );
};

export default BlogLayout;
