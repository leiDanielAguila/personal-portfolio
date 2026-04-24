import { IslandNavigation } from "../components/island-navigation";
import { Chatbot } from "@/components/chatbot-ui";
import { ProjectsCard } from "@/components/projects-card";
function ProjectsClientPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-4 px-4 py-6 pb-24 sm:pb-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch gap-4">
        <div className="w-full md:flex-1 flex flex-col md:flex-row items-start gap-4">
          <IslandNavigation />
        </div>
        <div className="w-full flex flex-row p-6">
          <ProjectsCard />
        </div>
        <Chatbot />
      </div>
    </main>
  );
}

export default ProjectsClientPage;
