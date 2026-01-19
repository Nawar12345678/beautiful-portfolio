import { Briefcase, Code, Building2 } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Front-End Developer ",
        company: "Freelancer",
        location: "Remote",
        period: "Present",
        icon: <Building2 className="h-6 w-6 text-primary" />,
        responsibilities: [
            "Developed interactive web pages using HTML, CSS, and JavaScript",
            "Built reusable components with React",
            "Integrated RESTful and GraphQL APIs for dynamic data handling",
            "Ensured compliance with company policies and internal standards",
            "Maintained clean, scalable, and maintainable codebases",
        ],
    },
    {
        id: 2,
        role: "Front-End Developer",
        company: "Osous Technology",
        location: "Remote",
        period: "June 2024 - October 2025",
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        responsibilities: [
            "Built responsive and interactive user interfaces",
            "Converted UI/UX designs into clean front-end code",
            "Optimized website performance and loading speed",
            "Collaborated closely with the development team",
            "Delivered high-quality solutions with strong technical and communication skills",
        ],
    },
    {
        id: 3,
        role: "Front-End Developer ",
        company: "Business Flow",
        location: "Remote",
        period: "March 2024 - June 2024",
        icon: <Building2 className="h-6 w-6 text-primary" />,
        responsibilities: [
            "Developed interactive web pages using HTML, CSS, and JavaScript",
            "Built reusable components with React",
            "Integrated RESTful and GraphQL APIs for dynamic data handling",
            "Ensured compliance with company policies and internal standards",
            "Maintained clean, scalable, and maintainable codebases",
        ],
    },
    {
        id: 4,
        role: "Full Stack Developer (Internship)",
        company: "Focal X Agency",
        location: "Remote",
        period: "February 2024 - July 2024",
        icon: <Code className="h-6 w-6 text-primary" />,
        responsibilities: [
            "Designed and developed modern, responsive web applications tailored to client requirements",
            "Built scalable and reusable front-end components using React and modern JavaScript frameworks",
            "Collaborated directly with clients to gather requirements, provide technical guidance, and deliver solutions",
            "Integrated RESTful and GraphQL APIs to handle dynamic data efficiently",
            "Optimized performance, accessibility, and SEO best practices across projects",
            "Maintained clean, well-documented, and maintainable codebases for long-term scalability",
        ],

    },




];

export const WorkExperienceSection = () => {
    return (
        <section
            id="experience"
            className="py-24 px-4 relative scroll-mt-24"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <div className="grid grid-cols-1 gap-8">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="gradient-border p-6 card-hover"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    {exp.icon}
                                </div>

                                <div className="text-left w-full">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                                        <h3 className="text-xl font-semibold">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm text-muted-foreground">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-primary font-medium mt-1">
                                        {exp.company} • {exp.location}
                                    </p>

                                    <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                                        {exp.responsibilities.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
