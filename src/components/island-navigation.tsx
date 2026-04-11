import { useNavigate, useLocation } from "react-router-dom";
import { Briefcase, Folder, House } from "lucide-react";

const islandItems = [
  { id: "home", label: "Home", Icon: House, URL: "/" },
  { id: "projects", label: "Projects", Icon: Folder, URL: "/projects" },
  {
    id: "awards",
    label: "Awards and Experience",
    Icon: Briefcase,
    URL: "/info",
  },
] as const;

type IslandItemId = (typeof islandItems)[number]["id"];

export const IslandNavigation = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const activeIslandItem =
    islandItems.find((item) => item.URL === pathname)?.id ?? "home";
  const activeIslandIndex = islandItems.findIndex(
    (item) => item.id === activeIslandItem,
  );

  const handleClick = (id: IslandItemId) => {
    const selectedItem = islandItems.find((item) => item.id === id);
    if (selectedItem) {
      nav(selectedItem.URL);
    }
  };

  return (
    <nav
      aria-label="Section switcher"
      className="relative w-full md:w-auto shrink-0 flex flex-row md:flex-col items-center gap-2 rounded-3xl border bg-background/90 p-2 shadow-lg backdrop-blur-md"
    >
      {/* Mobile/tablet: bubble moves horizontally */}
      <span
        aria-hidden
        className="md:hidden pointer-events-none absolute top-2 left-2 h-10 w-10 rounded-xl bg-primary/15 ring-1 ring-primary/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        style={{ transform: `translateX(${activeIslandIndex * 3}rem)` }}
      />
      {/* Desktop: bubble moves vertically */}
      <span
        aria-hidden
        className="hidden md:block pointer-events-none absolute top-2 left-2 h-10 w-10 rounded-xl bg-primary/15 ring-1 ring-primary/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        style={{ transform: `translateY(${activeIslandIndex * 3}rem)` }}
      />
      {islandItems.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          onClick={() => handleClick(id)}
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            activeIslandItem === id
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon size={18} />
        </button>
      ))}
    </nav>
  );
};
