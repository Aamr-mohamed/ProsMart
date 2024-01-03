import React from "react";
import Header from "../../components/header";
import Aside from "../../components/aside";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <Header />
        <div className="flex ">
          <Aside />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
