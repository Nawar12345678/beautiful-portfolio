import { useState } from "react";
import { cn } from "@/lib/utils";

const levelConfig = {
  intermediate: {
    label: "Intermediate",
    className:
      "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  advanced: {
    label: "Advanced",
    className:
      "bg-primary/10 text-primary border-primary/20",
  },
};



const skills = [
  { name: "HTML5 / CSS3", level: "advanced", category: "frontend" },
  { name: "JavaScript", level: "advanced", category: "frontend" },
  { name: "React", level: "advanced", category: "frontend" },
  { name: "TypeScript", level: "intermediate", category: "frontend" },
  { name: "Tailwind CSS", level: "advanced", category: "frontend" },
  { name: "Next.js", level: "intermediate", category: "frontend" },

  { name: "Laravel", level: "intermediate", category: "backend" },
  { name: "PHP", level: "intermediate", category: "backend" },
  { name: "SQL", level: "intermediate", category: "backend" },
  { name: "PostgreSQL", level: "intermediate", category: "backend" },
  { name: "GraphQL", level: "intermediate", category: "backend" },
  { name: "REST API", level: "intermediate", category: "backend" },

  { name: "Git / GitHub", level: "advanced", category: "tools" },
  { name: "Postman", level: "intermediate", category: "tools" },
  { name: "Figma", level: "advanced", category: "tools" },
  { name: "ChatGPT", level: "advanced", category: "tools" },

  { name: "Material UI", level: "intermediate", category: "uiFrameworks" },
  { name: "Bootstrap", level: "intermediate", category: "uiFrameworks" },
  { name: "CSS Modules", level: "advanced", category: "uiFrameworks" },
  { name: "Responsive Design", level: "advanced", category: "uiFrameworks" },
];

const categories = ["all", "frontend", "backend", "tools", "uiFrameworks"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-secondary/30 scroll-mt-24"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const level = levelConfig[skill.level];

            return (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-lg border border-border shadow-xs card-hover"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>

                  <span
                    className={cn(
                      "px-3 py-1 text-xs rounded-full border font-medium",
                      level.className
                    )}
                  >
                    {level.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
