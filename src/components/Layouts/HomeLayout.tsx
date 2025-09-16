import React from "react";
import Header from "./Header";
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default HomeLayout;
