import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const levelConfig = {
  intermediate: {
    className: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  advanced: {
    className: "bg-primary/10 text-primary border-primary/20",
  },
};

const skills = [
  // Frontend
  { id: "html-css", name: "HTML5 / CSS3", level: "advanced", category: "frontend" },
  { id: "javascript", name: "JavaScript", level: "advanced", category: "frontend" },
  { id: "react", name: "React", level: "advanced", category: "frontend" },
  { id: "typescript", name: "TypeScript", level: "intermediate", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", level: "advanced", category: "frontend" },
  { id: "nextjs", name: "Next.js", level: "intermediate", category: "frontend" },
  { id: "vue", name: "Vue.js", level: "intermediate", category: "frontend" },

  // Backend
  { id: "laravel", name: "Laravel", level: "intermediate", category: "backend" },
  { id: "php", name: "PHP", level: "intermediate", category: "backend" },
  { id: "sql", name: "SQL", level: "intermediate", category: "backend" },
  { id: "postgresql", name: "PostgreSQL", level: "intermediate", category: "backend" },
  { id: "graphql", name: "GraphQL", level: "intermediate", category: "backend" },
  { id: "rest-api", name: "REST API", level: "intermediate", category: "backend" },

  // Tools
  { id: "git", name: "Git / GitHub", level: "advanced", category: "tools" },
  { id: "postman", name: "Postman", level: "intermediate", category: "tools" },
  { id: "figma", name: "Figma", level: "advanced", category: "tools" },
  { id: "chatgpt", name: "ChatGPT", level: "advanced", category: "tools" },
  { id: "trello", name: "Trello", level: "intermediate", category: "tools" },
  { id: "cursor-ai", name: "Cursor AI", level: "advanced", category: "tools" },

  // UI Frameworks
  { id: "mui", name: "Material UI", level: "intermediate", category: "uiFrameworks" },
  { id: "bootstrap", name: "Bootstrap", level: "intermediate", category: "uiFrameworks" },
  { id: "css-modules", name: "CSS Modules", level: "advanced", category: "uiFrameworks" },
  { id: "responsive", name: "Responsive Design", level: "advanced", category: "uiFrameworks" },

  ];

const categories = ["all", "frontend", "backend", "tools", "uiFrameworks"];

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const renderName = (skill) =>
    skill.labelKey ? t(`skills.names.${skill.labelKey}`) : skill.name;

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title mb-12">
          {t("skills.titlePrefix")}{" "}
          <span className="text-primary">{t("skills.titleHighlight")}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                  : "bg-card text-foreground/80 border border-border/60 hover:bg-secondary hover:border-primary/30"
              )}
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        {filteredSkills.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">{t("skills.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredSkills.map((skill, index) => {
              const level = levelConfig[skill.level];
              return (
                <div
                  key={skill.id}
                  className="bg-card p-5 sm:p-6 rounded-2xl border border-border/60 shadow-sm card-hover animate-scale-in"
                  style={{ animationDelay: `${(index % 9) * 0.04}s` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-base text-start truncate">
                      {renderName(skill)}
                    </h3>
                    <span
                      className={cn(
                        "px-3 py-1 text-xs rounded-full border font-medium shrink-0",
                        level.className
                      )}
                    >
                      {t(`skills.levels.${skill.level}`)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
