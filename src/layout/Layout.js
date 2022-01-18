import React from "react";
import Composition from "../dashboard/Composition";
import ResolumeProvider from "../utils/resolume_provider";
import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {

  function get_option(production, development, fallback) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
      return production;
    } else if (development) {
      return development;
    } else {
      return fallback;
    }
  }

  const host = get_option(window.location.hostname, process.env.REACT_APP_HOST, '127.0.0.1');
  const port = parseInt(get_option(window.location.port, process.env.REACT_APP_PORT, 8080), 10);

  return (
    <div>
      <ResolumeProvider host={host} port={port}>
        <Composition host={host} port={port} />
      </ResolumeProvider>
    </div>
  );
}

export default Layout;
