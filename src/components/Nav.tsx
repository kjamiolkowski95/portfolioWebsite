import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { scrollToSection } from "@/lib/smooth-scroll";

const links = [
  { id: "", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const go = (e: React.MouseEvent, id?: string) => {
    e.preventDefault();
    setOpen(false);
    if (pathname !== "/") {
      navigate({ to: "/", ...(id ? { hash: id } : {}) }).then(() => {
        requestAnimationFrame(() => scrollToSection(id));
      });
      return;
    }
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
        <a href="/" onClick={(e) => go(e)} className="label min-w-0 truncate text-foreground">
          Kamil Jamiolkowski
        </a>

        <div className="flex shrink-0 items-center gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.id ? `/#${l.id}` : "/"}
                onClick={(e) => go(e, l.id || undefined)}
                className="label text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center border border-line text-foreground transition-colors duration-300 hover:border-foreground"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-8 w-8 items-center justify-center border border-line text-foreground md:hidden"
          >
            {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-background md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.id ? `/#${l.id}` : "/"}
              onClick={(e) => go(e, l.id || undefined)}
              className="label border-b border-line px-5 py-4 text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
