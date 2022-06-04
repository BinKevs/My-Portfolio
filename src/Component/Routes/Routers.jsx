import LandingPage from "../Pages/LandingPage";
import ProjectPage from "../Pages/ProjectPage";
import ContactPage from "../Pages/ContactPage";

import { Route, Routes } from "react-router-dom";
function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/My-Portfolio/projects" element={<ProjectPage />} />
        <Route exact path="/My-Portfolio/Contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default Routers;
