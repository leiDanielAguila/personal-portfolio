export type SocialId = "github" | "linkedin" | "instagram";

export type Social = {
  id: SocialId;
  label: string;
  url: string;
  color: string;
};

export const socials: Social[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/leiDanielAguila",
    color: "#181717",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/christlei-daniel-aguila-bb2215318/",
    color: "#0A66C2",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/placeholder",
    color: "#E4405F",
  },
];
