import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { AspectRatio } from "./ui/aspect-ratio";
import { Separator } from "./ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  CaretLeftIcon,
  CaretRightIcon,
  ChatCircleIcon,
  HeartIcon,
  LinkSimpleIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";

const projectTechStacksBySlug: Record<string, string[]> = {
  nutrixtract: [
    "React Native",
    "FastAPI",
    "YOLOv8",
    "Google OCR",
    "HuggingFace",
    "Zustand",
    "Tanstack Query",
  ],
  "recruiter-first": [
    "React",
    "FastAPI",
    "RAG",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "AWS",
  ],
  cafemo: ["React", "Node.js", "Supabase", "OpenAI/Gemini API", "Weather API"],
  "nutrixtract-website": ["React", "Vite", "MantineUI"],
};

const toProjectSlug = (projectName: string) =>
  projectName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export const ProjectsCard = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<
    "idle" | "shared" | "copied"
  >("idle");
  const imageElementRef = useRef<HTMLImageElement | null>(null);

  const handleImageLoaded = (projectName: string) => {
    setLoadedImages((previous) => ({ ...previous, [projectName]: true }));
  };

  const handleNextProject = () => {
    const totalProjects = projects.length;

    if (!totalProjects) {
      return;
    }

    setCurrentProjectIndex((previous) =>
      previous + 1 >= totalProjects ? 0 : previous + 1,
    );
  };

  const handlePreviousProject = () => {
    const totalProjects = projects.length;

    if (!totalProjects) {
      return;
    }

    setCurrentProjectIndex(
      (previous) => (previous - 1 + totalProjects) % totalProjects,
    );
  };

  const handleSelectProject = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex);
  };

  const buildProjectShareUrl = (projectName: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("project", toProjectSlug(projectName));
    return currentUrl.toString();
  };

  const handleShareProject = async () => {
    if (!currentProject) {
      return;
    }

    const shareUrl = buildProjectShareUrl(currentProject.name);

    if (navigator.share) {
      try {
        await navigator.share({
          title: currentProject.name,
          text: currentProject.description,
          url: shareUrl,
        });
        setShareFeedback("shared");
        return;
      } catch {
        return;
      }
    }

    await navigator.clipboard.writeText(shareUrl);
    setShareFeedback("copied");
  };

  const currentProject = projects[currentProjectIndex];
  const currentProjectTechStack = currentProject
    ? (projectTechStacksBySlug[toProjectSlug(currentProject.name)] ?? [])
    : [];

  useEffect(() => {
    if (!projects.length) {
      return;
    }

    if (currentProjectIndex > projects.length - 1) {
      setCurrentProjectIndex(0);
    }
  }, [currentProjectIndex]);

  useEffect(() => {
    if (!currentProject) {
      return;
    }

    if (imageElementRef.current?.complete) {
      handleImageLoaded(currentProject.name);
    }
  }, [currentProject]);

  useEffect(() => {
    if (!projects.length) {
      return;
    }

    const currentUrl = new URL(window.location.href);
    const projectFromQuery = currentUrl.searchParams.get("project");

    if (!projectFromQuery) {
      return;
    }

    const matchedProjectIndex = projects.findIndex(
      (project) => toProjectSlug(project.name) === projectFromQuery,
    );

    if (matchedProjectIndex >= 0) {
      setCurrentProjectIndex(matchedProjectIndex);
    }
  }, []);

  useEffect(() => {
    setIsTechStackOpen(false);
    setShareFeedback("idle");
  }, [currentProjectIndex]);

  if (!currentProject) {
    return null;
  }

  return (
    <section className="shadow-lg rounded-2xl border bg-background/90 w-full p-4 sm:p-5">
      <div className="animate-fade-in" style={{ animationDelay: "80ms" }}>
        <h1 className="mb-2 text-xl font-semibold sm:text-2xl">
          Personal & Group Projects
        </h1>
        <Separator
          className="animate-fade-in"
          style={{ animationDelay: "140ms" }}
        />
      </div>
      <div className="mt-4">
        <div
          key={currentProject.name}
          className="mx-auto w-full max-w-xl animate-fade-in overflow-hidden rounded-2xl border border-border bg-card"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {currentProject.name.slice(0, 1).toUpperCase()}
              </div>
              <div className="min-w-0 text-left">
                <h2 className="truncate text-sm font-semibold sm:text-base">
                  {currentProject.name}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {currentProject.contrib}
                </p>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Post</div>
          </div>

          <AspectRatio ratio={16 / 10} className="relative bg-muted/30">
            {!loadedImages[currentProject.name] ? (
              <Skeleton className="absolute inset-0 h-full w-full" />
            ) : null}
            <img
              ref={imageElementRef}
              src={currentProject.img}
              alt={currentProject.name}
              className={`absolute inset-0 h-full w-full object-contain p-2 transition-opacity duration-300 ${
                loadedImages[currentProject.name] ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => handleImageLoaded(currentProject.name)}
              onError={() => handleImageLoaded(currentProject.name)}
            />
          </AspectRatio>

          <div className="border-t border-border px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full"
                  aria-label="Like project"
                >
                  <HeartIcon className="size-7" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full"
                  onClick={() => setIsTechStackOpen((previous) => !previous)}
                  aria-label="Show project tech stack"
                >
                  <ChatCircleIcon className="size-7" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full"
                  onClick={handleShareProject}
                  aria-label="Share project"
                >
                  <PaperPlaneTiltIcon className="size-7" />
                </Button>
              </div>
              {shareFeedback === "copied" ? (
                <p className="text-xs text-muted-foreground">Link copied</p>
              ) : null}
              {shareFeedback === "shared" ? (
                <p className="text-xs text-muted-foreground">Shared</p>
              ) : null}
            </div>
          </div>

          <div className="border-t border-border px-4 py-3 text-left">
            <p className="text-sm leading-relaxed sm:text-base">
              <span className="mr-1 font-semibold">{currentProject.name}</span>
              <span className="text-muted-foreground">
                {currentProject.description}
              </span>
            </p>
            <a
              href={currentProject.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <LinkSimpleIcon size={16} />
              {currentProject.url}
            </a>
            {isTechStackOpen ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {currentProjectTechStack.length ? (
                  currentProjectTechStack.map((stack) => (
                    <span
                      key={`${currentProject.name}-${stack}`}
                      className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {stack}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                    Tech stack unavailable
                  </span>
                )}
              </div>
            ) : null}
            <div className="h-6" />
          </div>
        </div>

        <div
          className="mx-auto mt-4 flex w-full max-w-xl items-center justify-between gap-3 animate-fade-in"
          style={{ animationDelay: "260ms" }}
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handlePreviousProject}
          >
            <CaretLeftIcon size={18} />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => handleSelectProject(index)}
                aria-label={`Go to ${project.name}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentProjectIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleNextProject}
          >
            Next
            <CaretRightIcon size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};
