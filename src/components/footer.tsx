import { Copyright } from "lucide-react";
import { Separator } from "./ui/separator";
import { footer } from "@/lib/footer";

export const FooterCard = () => {
  return (
    <footer>
      <Separator />
      <div className="flex flex-row gap-1 m-6 items-center justify-center">
        <Copyright size={14} />
        <h4>{footer.year}</h4>
        <h1 className="font-bold">{footer.developerName}</h1>
        <p>{footer.description}</p>
        <a
          href={footer.inspirationLink}
          target="_blank"
          className="font-semibold"
        >
          {footer.inspiration}
        </a>
      </div>
    </footer>
  );
}
