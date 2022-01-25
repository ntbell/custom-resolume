import React, { useState, useEffect } from "react";
import TempoControl from "../dashboard/TempoControl";
import Effects from "../dashboard/Effects";
import "./Navbar.css";

/**
 * Navbar-esque component that sticks to the top of the screen while scrolling,
 * and displays buttons that control the clips (effects, bpm, autopilot, etc.)
 * @param { tempocontroller, layer } param0 
 * @returns 
 */
function StickyNavbar({ tempocontroller, layer }) {
    const [show, setShow] = useState(false);
    const handleScroll = () => setShow(window.pageYOffset > 0);

    useEffect(() => window.addEventListener("scroll", handleScroll), []);

    return (
        <div className={`nav ${show && 'scrollNav'}`}>
            <h3>Effects</h3>
            {layer && <Effects layer={layer} />}
            {tempocontroller.tempo && <TempoControl tempocontroller={tempocontroller} />}
        </div>
    );
}

export default StickyNavbar;