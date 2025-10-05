import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
