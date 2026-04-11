export type TechStackCategory = "frontend" | "backend" | "devops";

export type TechStackData = Record<TechStackCategory, string[]>;

export const TechStack: TechStackData = {
  frontend: ["JavaScript", "TypeScript", "React", "HTML", "TailwindCSS", "Vite", "NextJS"],
  backend: ["Python","Rust", "FastAPI", "PHP", "NodeJS", "JWT", "OAuth", "REST", "GraphQL", "Java"],
  devops: ["Github Actions", "Docker", "Terraform", "Kubernetes"]
};