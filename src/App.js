import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "./pages/Home";
import { Resume } from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import ProjectItem from "./pages/ProjectItem";

import SharedLayout from "./pages/SharedLayout";
import gif from "../src/preloader2.gif";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => setLoading(false));

    return window.removeEventListener("load", () => setLoading(false));
  }, []);
  if (loading) {
    return (
      <div>
        <img className='preloader' src={gif} alt='' />;
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='resume' element={<Resume />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:projectId' element={<ProjectItem />} />
          <Route path='hobbies' element={<Hobbies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
