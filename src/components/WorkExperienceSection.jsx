import { Briefcase, Building2, Calendar, Code, MapPin, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const experienceKeys = [
  { id: "rzain", icon: Sparkles, highlight: true },
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

        <div className="grid grid-cols-1 gap-5 md:gap-6">
          {experienceKeys.map(({ id, icon: Icon, highlight }, index) => {
            const responsibilities = t(`experience.items.${id}.responsibilities`, {
              returnObjects: true,
            });
            const technologies = t(`experience.items.${id}.technologies`, {
              returnObjects: true,
            });

            return (
              <article
                key={id}
                className="group gradient-border p-5 sm:p-6 md:p-7 card-hover animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-3 sm:gap-4 text-start">
                  <div className="p-3 rounded-2xl bg-primary/10 ring-1 ring-primary/15 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:ring-primary/30">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>

                  <div className="w-full min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                          {t(`experience.items.${id}.role`)}
                        </h3>
                        {highlight && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/15 text-primary border border-primary/25">
                            <Sparkles className="h-3 w-3" />
                            {t("experience.latest")}
                          </span>
                        )}
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground bg-secondary/60 border border-border/60 rounded-full px-3 py-1 self-start md:self-auto">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="whitespace-nowrap">
                          {t(`experience.items.${id}.period`)}
                        </span>
                      </div>
                    </div>

                    <p className="text-primary font-medium mt-2 flex items-center gap-2 flex-wrap">
                      <span>{t(`experience.items.${id}.company`)}</span>
                      <span className="text-muted-foreground/60">•</span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground text-sm font-normal">
                        <MapPin className="h-3.5 w-3.5" />
                        {t("experience.locationRemote")}
                      </span>
                    </p>

                    {Array.isArray(responsibilities) && responsibilities.length > 0 && (
                      <ul className="text-muted-foreground mt-5 space-y-2 text-sm leading-relaxed">
                        {responsibilities.map((item) => (
                          <li key={item} className="relative ps-5">
                            <span className="absolute start-0 top-[0.55rem] h-1.5 w-1.5 rounded-full bg-primary/70" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {Array.isArray(technologies) && technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border/60">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary border border-primary/20 transition-colors duration-300 hover:bg-primary/10 hover:border-primary/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
