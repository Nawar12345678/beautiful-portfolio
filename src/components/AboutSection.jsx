import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import resumePdf from "../assets/resume.pdf";

const aboutCards = [
  { key: "webDevelopment", icon: Code },
  { key: "uiux", icon: User },
  { key: "projectManagement", icon: Briefcase },
];

export const AboutSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">
          {t("about.titlePrefix")}{" "}
          <span className="text-primary">{t("about.titleHighlight")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-start">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {t("about.subtitle")}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.paragraph1")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.paragraph2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="cosmic-button"
              >
                {t("about.getInTouch")}
              </button>

              <a href={resumePdf} download="Nawar-Alissa-CV.pdf" className="outline-button">
                {t("about.downloadCV")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {aboutCards.map(({ key, icon: Icon }) => (
              <div key={key} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4 text-start">
                  <div className="p-3 rounded-2xl bg-primary/10 shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      {t(`about.cards.${key}.title`)}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`about.cards.${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
