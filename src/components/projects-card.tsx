import { Separator } from "./ui/separator";
export const ProjectsCard = () => {
  return (
    <section className="shadow-lg rounded-2xl border bg-background/90 w-full max-w-xl p-4 m-4">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Recent Projects</h1>
        <Separator />
      </div>
    </section>
  );
};
