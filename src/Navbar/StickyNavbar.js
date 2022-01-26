import React, { useState, useEffect } from "react";
import Effects from "../dashboard/Effects";
import "./Navbar.css";

/**
 * Navbar-esque component that sticks to the top of the screen while scrolling,
 * and displays buttons that control the clips (effects, bpm, autopilot, etc.)
 * @param { tempocontroller, layer } param0 
 * @returns 
 */
function StickyNavbar({ tempocontroller, layers }) {
    const [show, setShow] = useState(false);
    const handleScroll = () => setShow(window.pageYOffset > 0);

    useEffect(() => window.addEventListener("scroll", handleScroll), []);

    //Reduce layers to only layer1 for first version
    return (
        <div className={`nav ${show && 'scrollNav'}`}>
            {layers[0] && <Effects layer={layers[0]} />}
        </div>
    );
}

export default StickyNavbar;