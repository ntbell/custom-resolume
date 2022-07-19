import React from "react";
import Clip from "./Clip";

// Component for rendering all clips
function Clips({ clips }) {
    const output = clips.map((clip) => (
        <Clip
            id={clip.id}
            key={clip.id}
            name={clip.name}
            last_update={clip.thumbnail.last_update}
            connected={clip.connected}
            transporttype={clip.transporttype}
        />
    ));

    return (
        <>
            {clips.length === 0 ? (
                <h2>Add clips and they will be shown here.</h2>
            ) : (
                <div className="clips">{output}</div>
            )}
        </>
    );
}

export default Clips;
