import React from "react";
import Clip from "./Clip";

function Clips({ clips }) {
    const output = clips.map((clip) =>
        <Clip
            id={clip.id}
            key={clip.id}
            name={clip.name}
            last_update={clip.thumbnail.last_update}
            selected={clip.selected}
            connected={clip.connected}
        />
    );

    return (
        <>
            <div className="clips">
                {output}
            </div>
            {clips.length === 0 && <h2>Add clips and they will be shown here.</h2>}
        </>
    );
}

export default Clips;
