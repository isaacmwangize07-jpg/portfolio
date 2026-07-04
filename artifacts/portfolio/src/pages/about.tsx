import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Briefcase, Code, GraduationCap, MapPin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/back-to-top";

export default function About() {
  const milestones = [
    {
      year: "2026 - Present",
      title: "Senior Full Stack Developer",
      company: "TechNova Solutions",
      desc: "Architecting microservices using Django and React for enterprise clients."
    },
    {
      year: "2025 - 2026",
      title: "Backend Developer",
      company: "DataFlow Inc",
      desc: "Built high-performance data processing pipelines in Python and PostgreSQL."
    },
    {
      year: "2024 - 2025",
      title: "Junior Web Developer",
      company: "Creative Digital",
      desc: "Developed responsive web interfaces and integrated CMS platforms."
    },
    {
      year: "2023-2027",
      title: "BSc Computer Science",
      company: "Pwani University",
      desc: "Graduated with honors, specialized in Computer Science."
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="pt-32 pb-16 bg-card/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a Software Developer driven by logic, precision, and the relentless pursuit of robust architecture. I build backend systems that scale and frontend interfaces that delight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Photo */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border shadow-2xl relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none" />
                <img 
                  src="/avatar.png" 
                  alt="Isaac Mwangi" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-primary h-5 w-5" />
                  <span className="font-medium">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-accent h-5 w-5" />
                  <span className="font-medium">Available Worldwide</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">The Journey</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    My coding journey started with a simple Python script to automate a tedious task. That spark of making a machine do exactly what I wanted ignited a passion that turned into a career.
                  </p>
                  <p>
                    Over the years, I've specialized in the Python ecosystem—specifically Django—because of its pragmatic "batteries-included" philosophy. But an API is only as good as the interface that consumes it, which led me deep into JavaScript and React.
                  </p>
                  <p>
                    Today, I consider myself a full-stack craftsman. I don't just write code; I design systems. Whether it's optimizing a complex SQL query or crafting a buttery-smooth React component, I care deeply about the details.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
                <ul className="space-y-4">
                  {[
                    "Code should be read like prose.",
                    "Premature optimization is the root of all evil.",
                    "Great UX starts with a great API.",
                    "Always leave the codebase cleaner than you found it."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "6+", label: "Years Experience" },
              { value: "40+", label: "Projects Completed" },
              { value: "15+", label: "Technologies Mastered" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-black text-primary">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Timeline</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {i === milestones.length - 1 ? <GraduationCap size={18} /> : <Briefcase size={18} />}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-card border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent bg-accent/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      <Calendar size={14} />
                      {item.year}
                    </span>
                  </div>
                  <div className="text-primary font-medium mb-3">{item.company}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/contact">
                Let's discuss my next role
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
