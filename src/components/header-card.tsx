import { ModeToggle } from "@/components/mode-toggle";
import { ProfilePicture } from "@/components/profile-picture";
import { MapPin } from "lucide-react";

// Simple centered header card composing profile picture and dark mode toggle
export const HeaderCard = () => {
  return (
    <section className="w-full max-w-3xl rounded-2xl border bg-background/90 p-6 sm:p-10 shadow-lg flex flex-col gap-6">
      <div className="flex flex-row gap-4 items-start w-full">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-row items-center gap-5">
            <ProfilePicture />
            <div className="text-left ">
              <h1 className="text-2xl font-semibold tracking-tight">
                Christlei Daniel Aguila
              </h1>
              <p className="text-muted-foreground">
                Aspiring Fullstack Engineer \ DevOps
              </p>
              <div className="flex flex-row gap-2 items-center">
                <MapPin size={16} />
                <p>Metro Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
        <ModeToggle />
      </div>
      <h2 className="text-xl font-semibold">About</h2>
      <p className="text-base text-muted-foreground">
        An aspiring full-stack engineer from the University of the East, I
        specialize in overall development from Mobile Applications to Modern Web
        development using Python, JavaScript/TypeScript, and Postgress.
      </p>
      <p className="text-base text-muted-foreground pt-2">
        I led the development of a mobile app prototype for our thesis, building the
        UI, integrating microservices and BaaS, and fine-tuning a YOLOv8 model.
        Over 70 users tested it with positive feedback and professional
        validation.
      </p>
      <p className="text-base text-muted-foreground pt-2">
        I'm currently diving deep into DevOps and AI-powered solutions, focusing
        on mastering cloud infrastructure, CI/CD automation, and the deployment
        of intelligent, scalable systems. I am dedicated to bridging the gap
        between AI and robust operations to build high-performance, automated
        applications.
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
        <span className="rounded-full border px-3 py-1">React</span>
        <span className="rounded-full border px-3 py-1">TypeScript</span>
        <span className="rounded-full border px-3 py-1">Design Systems</span>
      </div>
    </section>
  );
};
