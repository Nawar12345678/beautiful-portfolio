/* eslint-disable react/prop-types */
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n";

export const LanguageToggle = ({ className }) => {
  const { t } = useTranslation();
  const { language, toggleLanguage, meta } = useLanguage();
  const nextCode = language === "en" ? "AR" : "EN";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("common.switchLanguage")}
      title={`${t("common.switchLanguage")} (${meta.nativeLabel})`}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-border/60",
        "bg-card/70 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold",
        "text-foreground/80 shadow-sm transition-all duration-300",
        "hover:border-primary/40 hover:bg-card hover:text-primary hover:shadow-md",
        "hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        className
      )}
    >
      <Languages className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:rotate-12" />
      <span className="tracking-wider">{nextCode}</span>
    </button>
  );
};
