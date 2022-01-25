import React, { useState } from "react";
import Composition from "../dashboard/Composition";
import ResolumeProvider from "../utils/resolume_provider";
import Defaults from "./Defaults";
import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  const { REACT_APP_HOST, REACT_APP_PORT } = process.env;
  const [connection, setConnection] = useState({
    host: REACT_APP_HOST || "127.0.0.1",
    port: REACT_APP_PORT || "8080",
    confirm: false
  });

  function submitHandler() {
    setConnection((prev) => ({...prev, confirm: true}));
  }

  return (
    <div>
      {connection.confirm ?
        <ResolumeProvider connection={connection} >
          <Composition connection={connection} />
        </ResolumeProvider>
        :
        <Defaults connection={connection} setConnection={setConnection} onSubmit={submitHandler}>
          <button type="submit" className="btn btn-sm btn-primary rounded">
            <span className="oi oi-check" /> Submit
          </button>
        </Defaults>}
    </div>
  );
}

export default Layout;
