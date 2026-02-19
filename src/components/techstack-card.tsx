import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { TechStack, type TechStackCategory } from "@/lib/techstack";

const categoryLabel: Record<TechStackCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
};

export const TechStackCard = () => {
  return (
    <div className="shadow-lg rounded-2xl border bg-background/90 w-full max-w-xl p-4 m-4">
      <h1 className="text-2xl font-semibold mb-2">Tech Stack</h1>
      <Separator />
      <div className="flex flex-col gap-4 mt-4">
        {(Object.keys(TechStack) as TechStackCategory[]).map((category) => (
          <div key={category}>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {categoryLabel[category]}
            </p>
            <div className="flex flex-wrap gap-2">
              {TechStack[category].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

