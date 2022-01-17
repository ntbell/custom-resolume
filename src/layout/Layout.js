import React from "react";
import Menu from "./Menu";
import Router from "./Router";
import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
 function Layout() {
  return (
    <div className="container-fluid">
      <div>
        <div>
          <Menu />
        </div>
        <div className="bg-light">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default Layout;
