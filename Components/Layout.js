import Header from "./Header";
import React from "react";

// const Layout = ({ children }) => {
//   return <section className="navigation">{children}</section>;
// };

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
