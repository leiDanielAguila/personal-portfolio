import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { type Social, socials, type SocialId } from "@/lib/socials";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconMap: Record<
  SocialId,
  React.ComponentType<{ size?: number; color?: string }>
> = {
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
        <h2 className="text-sm font-medium text-muted-foreground self-center">
          Find me on
        </h2>
        <div className="flex flex-row gap-3 flex-wrap">
          {socials.map((social) => (
            <Tooltip>
              <TooltipTrigger>
                <SocialLink key={social.id} social={social} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              download
              href="https://github.com/leiDanielAguila/personal-portfolio/releases/download/0.0.1/CHRISTLEI.DANIEL.AGUILA.-.RESUME.pdf"
              aria-label="Download resume"
              className="group flex items-center gap-2 rounded-xl border bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              Download Resume
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>This feature is currently unavailable</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </section>
  );
};
