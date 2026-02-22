import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { type Social, socials, type SocialId } from "@/lib/socials";

const iconMap: Record<SocialId, React.ComponentType<{ size?: number; color?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

type SocialLinkProps = {
  social: Social;
};

const SocialLink = ({ social }: SocialLinkProps) => {
  const Icon = iconMap[social.id];

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="group flex flex-col items-center gap-1.5 rounded-xl border bg-muted/40 px-4 py-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
      style={{ "--social-color": social.color } as React.CSSProperties}
    >
      <span
        className="transition-transform duration-300 ease-out group-hover:scale-110"
        style={{ color: social.color }}
      >
        <Icon size={22} />
      </span>
      <span className="text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        {social.label}
      </span>
    </a>
  );
};

export const SocialsCard = () => {
  return (
    <section className="w-full rounded-2xl border bg-background/90 p-4 sm:p-5 shadow-lg">
      <div className="flex flex-row items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-row gap-3 flex-wrap">
          <h2 className="text-sm font-medium text-muted-foreground self-center">Find me on</h2>
          {socials.map((social) => (
            <SocialLink key={social.id} social={social} />
          ))}
        </div>
        <a
          href="/placeholder-resume.pdf"
          download
          aria-label="Download resume"
          className="group flex items-center gap-2 rounded-xl border bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
        >
          <Download
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-y-0.5"
          />
          Download CV
        </a>
      </div>
    </section>
  );
};
