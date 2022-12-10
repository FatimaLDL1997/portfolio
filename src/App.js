import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Resume } from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import ProjectItem from "./pages/ProjectItem";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Purchase from "./pages/Purchase";
import SharedShopLayout from "./pages/SharedShopLayout";
import Checkout from "./pages/Checkout";
import { useGlobalContext } from "./context";
import PrivateRoute from "./pages/PrivateRoute";
import Login from "./pages/Login";

function App() {
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

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
