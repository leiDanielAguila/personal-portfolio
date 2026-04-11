import { useState, useEffect } from "react";
import me from "@/assets/me.webp";
import meDarkMode from "@/assets/dark-mode-me.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "@/components/theme-provider";

const getSystemIsDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export function ProfilePicture() {
  const { theme } = useTheme();
  const [systemIsDark, setSystemIsDark] = useState(getSystemIsDark);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (theme !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [theme]);

  const isLight = theme === "light" || (theme === "system" && !systemIsDark);
  const src = isLight ? me : meDarkMode;

  useEffect(() => {
    let isMounted = true;
    const preloadedImage = new Image();

    setIsImageLoaded(false);
    preloadedImage.src = src;

    if (preloadedImage.complete) {
      setIsImageLoaded(true);
      return;
    }

    const handleFinishedLoading = () => {
      if (isMounted) {
        setIsImageLoaded(true);
      }
    };

    preloadedImage.onload = handleFinishedLoading;
    preloadedImage.onerror = handleFinishedLoading;

    return () => {
      isMounted = false;
      preloadedImage.onload = null;
      preloadedImage.onerror = null;
    };
  }, [src]);

  return (
    <div className="w-24 sm:w-32 md:w-40 shrink-0">
      <AspectRatio
        ratio={1 / 1}
        className="relative bg-muted rounded-lg overflow-hidden"
      >
        {!isImageLoaded ? (
          <Skeleton className="absolute inset-0 h-full w-full rounded-lg" />
        ) : null}
        <img
          src={src}
          alt="My profile picture"
          className={`rounded-lg h-full w-full object-cover transition-opacity duration-300 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </AspectRatio>
    </div>
  );
}
