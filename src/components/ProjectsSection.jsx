import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import saasImg from "../assets/saas.PNG";
import resumeImg from "../assets/resume.PNG";
import villaImg from "../assets/villa.PNG";

const projectKeys = [
  {
    id: "saas",
    image: saasImg,
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://github.com/Nawar12345678/React-Launch",
    githubUrl: "https://github.com/Nawar12345678/React-Launch",
  },
  {
    id: "resume",
    image: resumeImg,
    tags: ["React", "Tailwind CSS", "Lucide React"],
    demoUrl: "https://github.com/Nawar12345678/Resume-Builder",
    githubUrl: "https://github.com/Nawar12345678/Resume-Builder",
  },
  {
    id: "villa",
    image: villaImg,
    tags: ["React", "React Router", "Bootstrap"],
    demoUrl: "https://nawar12345678.github.io/villa-task/",
    githubUrl: "https://github.com/Nawar12345678/villa-task",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">
          {t("projects.titlePrefix")}{" "}
          <span className="text-primary">{t("projects.titleHighlight")}</span>
        </h2>

        <p className="section-subtitle">{t("projects.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectKeys.map((project, index) => (
            <article
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm card-hover flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={t(`projects.items.${project.id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-1 text-start">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {t(`projects.items.${project.id}.title`)}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                  {t(`projects.items.${project.id}.description`)}
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("projects.viewDemo")}
                    className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("projects.viewCode")}
                    className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/Nawar12345678"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit mx-auto"
          >
            {t("projects.checkGithub")}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
};
