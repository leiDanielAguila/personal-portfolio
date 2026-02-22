export type Award = {
  name: string;
  ranking: string;
  date?: number;
};

export const Awards: Award[] = [
  {
    name: "AAIML Internation Conference ",
    ranking: "Accepted Thesis Paper for Chuo University Japan",
    date: 2026,
  },
  {
    name: "CodeSprint Hackathon",
    ranking: "Champion",
    date: 2025,
  },
  {
    name: "Philippine Startup Challenge 10",
    ranking: "NCR top 10 Qualifier",
    date: 2025,
  },
  {
    name: "OTIS AppCon",
    ranking: "Stage 2 qualifier - Application & Thesis Paper",
    date: 2025,
  },
];
