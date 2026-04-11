import { useState } from "react";
import { projects } from "@/lib/projects";
import { AspectRatio } from "./ui/aspect-ratio";
import { Separator } from "./ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProjectsCard = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoaded = (projectName: string) => {
    setLoadedImages((previous) => ({ ...previous, [projectName]: true }));
  };

  return (
    <section className="shadow-lg rounded-2xl border bg-background/90 w-full p-4 sm:p-5">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Personal & Group Projects
        </h1>
        <Separator />
      </div>
      <div className="mt-3 grid grid-flow-col grid-rows-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="group flex flex-row gap-3 animate-fade-in"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <Card className="relative mx-auto w-full max-w-sm pt-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
              <AspectRatio
                ratio={16 / 9}
                className="relative m-4 overflow-hidden rounded-xl border border-black"
              >
                {!loadedImages[project.name] ? (
                  <Skeleton className="absolute inset-0 h-full w-full rounded-xl" />
                ) : null}
                <img
                  src={project.img}
                  loading="lazy"
                  alt={project.name}
                  onLoad={() => handleImageLoaded(project.name)}
                  onError={() => handleImageLoaded(project.name)}
                  className={`h-full w-full rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                    loadedImages[project.name] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </AspectRatio>
              <CardHeader>            
                <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                  {project.name}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardDescription>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 transition-colors duration-300 hover:text-primary"
                  >
                    {project.url}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
