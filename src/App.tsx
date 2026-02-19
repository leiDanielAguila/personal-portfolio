import "./App.css";
import { HeaderCard } from "./components/header-card";
import { TechStackCard } from "./components/techstack-card";
import { ProjectsCard } from "./components/projects-card";

function App() {
  return (
    <main className="min-h-screen">
      <div className="w-full">
        <HeaderCard />
      </div>
      <div className="flex flex-auto justify-center ">
        <TechStackCard />
        <ProjectsCard />
      </div>
    </main>
  );
}

export default App;
