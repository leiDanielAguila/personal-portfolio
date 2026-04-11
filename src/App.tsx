import { Routes, Route } from "react-router-dom";
import AppClientPage from "./pages/AppClientPage";
import ProjectsClientPage from "./pages/ProjectsClientPage";
import InformationClientPage from "./pages/InformationClientPage";
function App() {
  return (
    <Routes >
      <Route path="/" element={<AppClientPage />} />
      <Route path="/projects" element={<ProjectsClientPage/>}/>
      <Route path="/info" element={<InformationClientPage/>}/>
    </Routes>
  );
}

export default App;
