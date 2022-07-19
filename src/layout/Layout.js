import React, { useState } from "react";
import Composition from "../dashboard/Composition";
import ResolumeProvider from "../utils/resolume_provider";
import Defaults from "./Defaults";
import "./Layout.css";

// Defines the main layout of the application
function Layout() {
    const [connection, setConnection] = useState({
        host: window.location.hostname,
        port: "8080",
        confirm: false,
    });

    function submitHandler() {
        setConnection((prev) => ({ ...prev, confirm: true }));
    }

    return (
        <div>
            {connection.confirm ? (
                <ResolumeProvider connection={connection}>
                    <Composition connection={connection} />
                </ResolumeProvider>
            ) : (
                <Defaults
                    connection={connection}
                    setConnection={setConnection}
                    onSubmit={submitHandler}
                >
                    <button
                        type="submit"
                        className="btn btn-sm btn-primary rounded"
                    >
                        <span className="oi oi-check" /> Submit
                    </button>
                </Defaults>
            )}
        </div>
    );
}

export default Layout;
