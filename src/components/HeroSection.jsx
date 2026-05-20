import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 scroll-mt-24"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block sm:inline">
              {t("hero.greeting")}
            </span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {t("hero.firstName")}
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {t("hero.lastName")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            {t("hero.tagline")}
          </p>

          <div className="pt-2 opacity-0 animate-fade-in-delay-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="cosmic-button"
            >
              {t("hero.viewWork")}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label={t("hero.scroll")}
      >
        <span className="text-sm">{t("hero.scroll")}</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </button>
    </section>
  );
};
