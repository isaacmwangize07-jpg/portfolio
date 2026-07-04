import { motion } from "framer-motion";
import { BackToTop } from "@/components/back-to-top";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      description: "Building robust, scalable server-side logic and APIs.",
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "Django REST Framework", level: 92 },
        { name: "Node.js", level: 75 },
        { name: "FastAPI", level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      description: "Crafting responsive and interactive user interfaces.",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Databases & Cache",
      description: "Designing schemas and managing data persistence.",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "SQLite", level: 95 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 70 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "DevOps & Deployment",
      description: "Automating workflows and managing infrastructure.",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git / GitHub", level: 90 },
        { name: "Linux / Bash", level: 80 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "AWS / DigitalOcean", level: 75 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Postman", "Figma", "Jira", "Slack", "Webpack", "Vite", "PyCharm", "Celery", "Nginx", "Gunicorn"
  ];

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
              Technical <span className="text-primary">Arsenal</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive overview of my technical capabilities. I believe in choosing the right tool for the job while maintaining deep expertise in my core stack.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground mb-8 text-sm">{category.description}</p>
                
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-card border border-border rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Tools & Workflows</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
