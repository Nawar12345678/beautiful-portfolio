import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { key: "home", id: "hero" },
  { key: "about", id: "about" },
  { key: "experience", id: "experience" },
  { key: "skills", id: "skills" },
  { key: "projects", id: "projects" },
  { key: "contact", id: "contact" },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/75 backdrop-blur-xl shadow-sm border-b border-border/40"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleScrollTo("hero")}
          className="text-xl font-bold text-primary flex items-center gap-1 transition-opacity hover:opacity-90 shrink-0"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">{t("nav.brandPrefix")}</span>{" "}
            {t("nav.brandSuffix")}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleScrollTo(item.id)}
              className="relative text-sm font-medium text-foreground/75 hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:start-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 z-50">
          <div className="hidden md:flex items-center gap-2 ps-3 border-s border-border/60">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2.5 rounded-xl text-foreground hover:bg-secondary/80 transition-colors"
              aria-label={isMenuOpen ? t("common.closeMenu") : t("common.openMenu")}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-8 text-xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleScrollTo(item.id)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
