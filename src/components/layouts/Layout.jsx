import React from "react";
import Header from "../main/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-auto min-h-screen w-[100vw] flex-col items-start justify-start gap-[72px] overflow-x-hidden scroll-smooth bg-dark px-[36px] xl:px-[72px]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
