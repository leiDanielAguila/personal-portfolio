import { useState, useEffect } from "react";
import me from "@/assets/me.png";
import meDarkMode from "@/assets/dark-mode-me.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTheme } from "@/components/theme-provider";

const getSystemIsDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export function ProfilePicture() {
  const { theme } = useTheme();
  const [systemIsDark, setSystemIsDark] = useState(getSystemIsDark);

  useEffect(() => {
    if (theme !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [theme]);

  const isLight = theme === "light" || (theme === "system" && !systemIsDark);
  const src = isLight ? me : meDarkMode;

  return (
    <div className="w-24 sm:w-32 md:w-40 shrink-0">
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
        <img src={src} alt="My profile picture" className="rounded-lg" />
      </AspectRatio>
    </div>
  );
}
