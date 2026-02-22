import "./App.css";
import { HeaderCard } from "./components/header-card";
import { TechStackCard } from "./components/techstack-card";
// import { ProjectsCard } from "./components/projects-card";
import { CertCard } from "./components/certifications-card";
import { FooterCard } from "./components/footer";
// import { AwardCard } from "./components/awards-card";
import { IslandNavigation } from "./components/island-navigation";
import { SocialsCard } from "./components/socials-card";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch gap-4">
        <div className="w-full md:flex-1 flex flex-col md:flex-row items-start gap-4 animate-fade-in">
          <IslandNavigation />
          <div className="w-full flex flex-col gap-4">
            <HeaderCard />
            <SocialsCard />
          </div>
        </div>
        <div className="w-full md:w-[22rem] md:shrink-0 flex flex-col gap-4 animate-fade-in [animation-delay:150ms]">
          <TechStackCard />
          <CertCard />
        </div>
      </div>

      {/* <div className="w-full max-w-3xl ">
        <ProjectsCard />
      </div>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AwardCard />
      </div> */}
      <div className="w-full max-w-3xl animate-fade-in [animation-delay:300ms]">
        <FooterCard />
      </div>
    </main>
  );
}

export default App;
