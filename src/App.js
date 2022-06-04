import React, { useState, useEffect } from "react";
import LandingPage from "./Component/Pages/LandingPage";
import ProjectPage from "./Component/Pages/ProjectPage";
import ContactPage from "./Component/Pages/ContactPage";
import FooterPage from "./Component/Pages/FooterPage";
function App() {
  return (
    <div className="font-Mukta">
      <LandingPage />

      <ProjectPage />

      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 text-white flex flex-col text-center`}
      >
        <i
          className="fa fa-angle-down fa-2x animate-pulse"
          aria-hidden="true"
        ></i>
        <i
          className="fa fa-angle-down fa-4x animate-pulse"
          aria-hidden="true"
        ></i>
        <i
          className="fa fa-angle-down fa-5x animate-pulse"
          aria-hidden="true"
        ></i>
      </div>
      <div className="relative z-[99]">
        <ContactPage />
        <FooterPage />
      </div>
    </div>
  );
}

export default App;
