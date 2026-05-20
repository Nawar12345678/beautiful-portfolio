import { Briefcase, Code, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const experienceKeys = [
  { id: "freelancer", icon: Building2 },
  { id: "osous", icon: Briefcase },
  { id: "businessFlow", icon: Building2 },
  { id: "focalX", icon: Code },
];

export const WorkExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title mb-12">
          {t("experience.titlePrefix")}{" "}
          <span className="text-primary">{t("experience.titleHighlight")}</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {experienceKeys.map(({ id, icon: Icon }, index) => {
            const responsibilities = t(`experience.items.${id}.responsibilities`, {
              returnObjects: true,
            });

            return (
              <div
                key={id}
                className="gradient-border p-6 md:p-8 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start gap-4 text-start">
                  <div className="p-3 rounded-2xl bg-primary/10 shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="w-full min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-semibold">
                        {t(`experience.items.${id}.role`)}
                      </h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {t(`experience.items.${id}.period`)}
                      </span>
                    </div>

                    <p className="text-primary font-medium mt-1">
                      {t(`experience.items.${id}.company`)} • {t("experience.locationRemote")}
                    </p>

                    <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2 text-sm leading-relaxed">
                      {Array.isArray(responsibilities) &&
                        responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
