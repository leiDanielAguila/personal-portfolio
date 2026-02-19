import { ModeToggle } from "@/components/mode-toggle";
import { ProfilePicture } from "@/components/profile-picture";
import { profile } from "@/lib/profile";
import { MapPin } from "lucide-react";

// Simple centered header card composing profile picture and dark mode toggle
export const HeaderCard = () => {
  return (
    <section className="w-fit rounded-2xl border bg-background/90 p-6 m-12  sm:p-10 shadow-lg flex flex-col gap-6">
      <div className="flex flex-row gap-4 items-start w-full">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-row items-center gap-4">
            <ProfilePicture />
            <div className="text-left ">
              <h1 className="text-3xl font-semibold tracking-tight">
                {profile.name}
              </h1>
              <p className="text-muted-foreground">{profile.title}</p>
              <div className="flex flex-row gap-2 items-center">
                <MapPin size={16} />
                <p className="text-sm">{profile.location}</p>
              </div>
            </div>
          </div>
          
        </div>
        <ModeToggle />
      </div>
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="flex flex-cols-2 m-2">
        {profile.about.map((paragraph, i) => (
          <p key={i} className="text-base text-muted-foreground p-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
