import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
