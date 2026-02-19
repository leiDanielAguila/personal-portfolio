import { ModeToggle } from "@/components/mode-toggle";
import { ProfilePicture } from "@/components/profile-picture";
import { profile } from "@/lib/profile";
import { MapPin } from "lucide-react";

// Simple centered header card composing profile picture and dark mode toggle
export const HeaderCard = () => {
  return (
    <section className="w-full rounded-2xl border bg-background/90 p-4 sm:p-6 shadow-lg flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3 w-full">
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <ProfilePicture />
            <div className="text-left min-w-0">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight break-words">
                {profile.name}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">
                {profile.title}
              </p>
              <div className="flex flex-row gap-1.5 sm:gap-2 items-center">
                <MapPin size={14} />
                <p className="text-xs sm:text-sm">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
        <ModeToggle />
      </div>
      <div className="flex flex-col m-4 gap-3 sm:gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold">About</h2>
        {profile.about.map((paragraph, i) => (
          <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
