import React from "react";
import ErrorAlert from "./ErrorAlert";

/**
 * Displays a screen with instructions for how to use the app,
 * along with input fields for the webserver connection
 * @param { connection, setConnection, onSubmit, children }  
 */
function Defaults({ connection, setConnection, onSubmit, children }) {

    function changeHandler({ target: { name, value } }) {
        setConnection((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        onSubmit();
    }

    //ToDo: Explain steps more clearly. 
    //What address to type into browser on mobile?
    return (
        <main className="p-2">
            <ErrorAlert error={connection.message} />
            <p>1. Go to Resolume Arena on your computer</p>
            <p>2. Click "Arena" -> "Preferences" -> "Webserver"</p>
            <p>3. Enter IP Address and Listen Port</p>
            <p>4. Submit</p>
            <p>5. Drag clips into layer 1</p>
            <form onSubmit={submitHandler} className="text-center">
                <div className="form-group">
                    <label htmlFor="host">IP Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="host"
                        name="host"
                        required={true}
                        value={connection.host}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="port">Listen Port:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="port"
                        name="port"
                        required={true}
                        value={connection.port}
                        onChange={changeHandler}
                    />
                </div>
                <div className="text-left mb-2">{children}</div>
            </form>
        </main>
    );
}

export default Defaults;