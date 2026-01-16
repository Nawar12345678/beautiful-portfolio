import { ArrowRight, ExternalLink, Github } from "lucide-react";
import saasImg from "../assets/saas.PNG";
import resumeImg from "../assets/resume.PNG";
import villaImg from "../assets/villa.PNG";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page (React Launch)",
    description: "A beautiful landing page app using React and Tailwind.",
    image: saasImg,
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://github.com/Nawar12345678/React-Launch",
    githubUrl: "https://github.com/Nawar12345678/React-Launch",
  },
  {
    id: 2,
    title: "Resume Builder",
    description:
      "Web application built with React and Tailwind CSS that helps users create professional resumes through a clean and responsive interface.",
    image: resumeImg,
    tags: ["React", "Tailwind CSS", "Lucide React"],
    demoUrl: "https://github.com/Nawar12345678/Resume-Builder",
    githubUrl: "https://github.com/Nawar12345678/Resume-Builder",
  },
  {
    id: 3,
    title: "Villa View",
    description:
      "Web application built with React that displays villas with images, price, and location.",
    image: villaImg,
    tags: ["React", "React Router", "Bootstrap"],
    demoUrl: "https://nawar12345678.github.io/villa-task/",
    githubUrl: "https://github.com/Nawar12345678/villa-task",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative scroll-mt-24"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, carefully crafted with attention
          to performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Nawar12345678"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
