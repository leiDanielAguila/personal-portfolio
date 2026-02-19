import { projects } from "@/lib/projects";
import { Separator } from "./ui/separator";

export const ProjectsCard = () => {
  return (
    <section className="shadow-lg rounded-2xl border bg-background/90 w-full p-4 sm:p-5">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Recent Projects
        </h1>
        <Separator />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 ">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg px-3 py-2 flex flex-col gap-0.5 bg-muted/40 w-full hover:bg-muted transition-colors cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-2"
          >
            <span className="text-sm font-medium truncate">{project.name}</span>
            <span className="text-xs text-muted-foreground line-clamp-1">
              {project.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
