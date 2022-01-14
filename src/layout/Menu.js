import React from "react";
import { Link } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <nav className="navbar navbar-dark align-items-start p-0">
      <div className="container-fluid d-flex flex-column p-0 py-1">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
          to="/"
        >
          <div className="sidebar-brand-text mx-3">
            <span>Custom Resolume</span>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <ul className="nav navbar-nav" id="accordionSidebar">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/tables/new">
              <span className="oi oi-layers text-white" />
              &nbsp;New Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
