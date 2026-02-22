import { Separator } from "./ui/separator";
import { Awards } from "@/lib/awards";
export const AwardCard = () => {
  return (
    <section className="shadow-lg rounded-2xl border bg-background/90 w-full p-4 sm:p-5">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Awards
        </h1>
        <Separator />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-3 ">
        {Awards.map((award) => (
          <p
            key={award.name}
            className="border rounded-lg px-3 py-2 flex flex-col gap-0.5 bg-muted/40 w-full hover:bg-muted transition-colors cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-2"
          >
            <span className="text-sm font-medium truncate">{award.name}</span>
            <span className="text-xs text-muted-foreground">
              {award.ranking}
            </span>
            <span className="text-xs text-muted-foreground">{award.date}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
