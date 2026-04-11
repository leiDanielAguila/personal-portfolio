export type Project = {
  name: string;
  description: string;
  url: string;
  img: string;
  contrib: string
};

export const projects: Project[] = [
  {
    name: "NutriXtract",
    description: "Our Thesis project regarding Nutritions, presented in AAIML Japan 2026",
    url: "https://github.com/SeanArnisto/nutrivision-frontend-main",
    img: "../Group 1.webp",
    contrib: "Group Project"
  },
  {
    name: "NutriXtract - Website",
    description: "Web Version of our thesis project",
    url: "https://nutrixtract.vercel.app",
    img: "../nutrixtract-website.webp",
    contrib: "Solo Project"
  },
  {
    name: "CafeMo",
    description: "Intelligent Systems course final project requirement, an AI-powered cafe kiosk",
    url: "https://cafemo.vercel.app",
    img: "../cafemo.webp",
    contrib: "Group Project"
  },
  {
    name: "Recruiter-First",
    description: "User-centric tool aiding users in Job Applications, tracker and CL generator all in one.",
    url: "https://github.com",
    img: "../recruiter-first.webp",
    contrib: "Solo Project"
  },
];
