import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home } from "lucide-react";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-background">
      <p className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
        {t("notFound.code")}
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-3">{t("notFound.title")}</h1>
      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        {t("notFound.subtitle")}
      </p>
      <Link to="/" className="cosmic-button">
        <Home size={18} />
        {t("notFound.backHome")}
      </Link>
    </div>
  );
};
