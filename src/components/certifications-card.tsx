import { Separator } from "./ui/separator";
import { certifications } from "@/lib/certifications";

export const CertCard = () => {
  const items = certifications.certifications;

  return (
    <section className="shadow-lg rounded-2xl border bg-background/90 w-full p-4 sm:p-5">
      <h1 className="text-xl sm:text-2xl font-semibold mb-2">
        Recent Certifications
      </h1>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-3">
        {items.map((cert) => (
          <article
            key={cert.id}
            className="flex-1 rounded-md border bg-muted/40 p-4 transition-transform duration-300 ease-out hover:-translate-y-2"
          >
            <h2 className="text-sm font-medium truncate">{cert.title}</h2>
            <p className="text-xs text-muted-foreground">
              Issuer: {cert.issuer}
            </p>
            <p className="text-xs text-muted-foreground">
              Date Issued: {cert.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
