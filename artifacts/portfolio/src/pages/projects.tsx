import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/back-to-top";

const allProjects = [
  {
    id: 1,
    title: "EduConnect",
    description: "A comprehensive learning management system for schools. Features include student portals, grade tracking, assignment submissions, and a real-time chat between teachers and students.",
    tech: ["Django REST", "React", "PostgreSQL", "Redis", "Celery"],
    category: ["Django", "React", "Python"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "ShopWave",
    description: "Modern E-commerce platform with a robust admin dashboard for inventory tracking, order management, and secure Stripe payment integration.",
    tech: ["Django", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    category: ["Django", "Python"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "DevMetrics",
    description: "Developer analytics dashboard that aggregates data from GitHub, GitLab, and Jira to visualize team velocity, code churn, and sprint progress.",
    tech: ["React", "JavaScript", "Chart.js", "Django REST"],
    category: ["React", "JavaScript", "Django"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "TaskFlow",
    description: "Real-time project management application inspired by Trello. Uses WebSockets for live updates across clients when tasks are moved or updated.",
    tech: ["Django Channels", "React", "Redux", "PostgreSQL"],
    category: ["Django", "React"],
    github: "#",
    live: "#"
  },
  {
    id: 5,
    title: "RestaurantBook",
    description: "Table reservation system for local restaurants. Features include visual table layouts, automated SMS notifications via Twilio, and waitlist management.",
    tech: ["Python", "Django", "Twilio API", "Bootstrap"],
    category: ["Django", "Python"],
    github: "#",
    live: "#"
  },
  {
    id: 6,
    title: "WeatherPulse",
    description: "Location-based weather application that aggregates data from multiple meteorological APIs to provide hyper-accurate local forecasts and severe weather alerts.",
    tech: ["React", "JavaScript", "Express", "Weather API"],
    category: ["React", "JavaScript"],
    github: "#",
    live: "#"
  }
];

const filters = ["All", "Python", "Django", "React", "JavaScript"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category.includes(activeFilter));

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="pt-32 pb-16 bg-card/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Featured <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A selection of projects that showcase my approach to problem-solving, architecture design, and clean code implementation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-border/50 bg-background sticky top-16 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                    : "bg-card text-muted-foreground hover:bg-secondary/10 hover:text-foreground border border-border"
                }`}
                data-testid={`filter-${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-primary transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2"
                >
                  <div className="p-8 flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-background p-3 rounded-lg border border-border group-hover:bg-primary/10 transition-colors">
                        <Code2 className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex gap-3">
                        <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository" data-testid={`link-github-${project.id}`}>
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={project.live} className="text-muted-foreground hover:text-accent transition-colors" aria-label="Live Demo" data-testid={`link-live-${project.id}`}>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-8 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 bg-background border border-border text-muted-foreground rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
