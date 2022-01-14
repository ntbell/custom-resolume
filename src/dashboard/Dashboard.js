import React, { useEffect, useState } from "react";
import ClipChange from "./ClipChange";
import ColorBar from "./ColorBar";
import MainButtonsDisplay from "./MainButtonsDisplay";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ bpm }) {
  
  return (
    <main>
      <h1 className="text-center">Custom Resolume</h1>
      <ClipChange />
      <MainButtonsDisplay />
      <ColorBar />
    </main>
  );
}

export default Dashboard;
