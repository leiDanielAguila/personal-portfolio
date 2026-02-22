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
    url: "https://github.com/placeholder",
    color: "#181717",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/placeholder",
    color: "#0A66C2",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/placeholder",
    color: "#E4405F",
  },
];
