import "../App.css";
import { Chatbot } from "@/components/chatbot-ui";
import { IslandNavigation } from "../components/island-navigation";

function InformationClientPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch gap-4">
        <div className="w-full md:flex-1 flex flex-col md:flex-row items-start gap-4 ">
          <IslandNavigation />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Chatbot />
      </div>
    </main>
  );
}

export default InformationClientPage;
