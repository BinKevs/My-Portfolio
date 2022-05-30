import LandingPage from "../Pages/LandingPage";
import ProjectPage from "../Pages/ProjectPage";
import ContactPage from "../Pages/ContactPage";

import { Route, Routes } from "react-router-dom";
function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/projects" element={<ProjectPage />} />
        <Route exact path="/Contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default Routers;
