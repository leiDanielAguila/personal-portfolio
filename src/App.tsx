import "./App.css";
import { HeaderCard } from "./components/header-card";
import { TechStackCard } from "./components/techstack-card";
import { ProjectsCard } from "./components/projects-card";
import { CertCard } from "./components/certifications-card";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-4">
      <div className="w-full max-w-3xl">
        <HeaderCard />
      </div>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TechStackCard />
        <CertCard />
      </div>
      <div className="w-full max-w-3xl ">
        <ProjectsCard />
      </div>
    </main>
  );
}

export default App;
