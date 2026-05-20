import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-4 bg-card relative border-t border-border/60 mt-8">
      <div className="container flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6">
        <div className="text-center sm:text-start space-y-1">
          <p className="text-sm text-muted-foreground">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <p className="text-xs text-muted-foreground/70">{t("footer.builtWith")}</p>
        </div>

        <button
          type="button"
          onClick={scrollToHero}
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          aria-label={t("common.scrollToTop")}
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};
