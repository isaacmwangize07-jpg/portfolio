import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Server, Terminal, Laptop, Globe } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { useState, useEffect } from "react";

const TypewriterText = () => {
  const text = "print('Hello, World!')";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="font-mono text-sm md:text-base text-accent bg-card border border-border p-3 rounded-md shadow-sm w-fit mx-auto mt-6">
      <span className="text-muted-foreground mr-2">&gt;</span>
      {displayText}
      <span className="animate-pulse">_</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Isaac Mwangi</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-muted-foreground max-w-[800px]"
          >
            Software Developer specializing in <span className="text-foreground font-semibold">Python</span>, <span className="text-foreground font-semibold">Django</span>, and <span className="text-foreground font-semibold">React</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-[600px] leading-relaxed"
          >
            I build scalable web applications and REST APIs. Welcome to my digital workshop where precision meets performance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypewriterText />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button asChild size="lg" className="h-12 px-8 text-base font-medium shadow-lg hover:shadow-primary/25 transition-all">
              <Link href="/projects" data-testid="link-view-projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-medium border-border hover:bg-card">
              <Link href="/contact" data-testid="link-contact-me">
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24 bg-card/30 border-y border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Build</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-10 h-10 text-primary" />,
                title: "Scalable Backends",
                description: "Robust architectures using Django and Python, designed to handle complex data and high traffic."
              },
              {
                icon: <Globe className="w-10 h-10 text-accent" />,
                title: "RESTful APIs",
                description: "Clean, well-documented, and secure endpoints that connect frontends with powerful database systems."
              },
              {
                icon: <Laptop className="w-10 h-10 text-primary" />,
                title: "Modern Frontends",
                description: "Responsive, accessible, and interactive user interfaces built with React and modern CSS."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="bg-card w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Powered by modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Python", "Django", "JavaScript", "React", "TypeScript", "PostgreSQL", "Docker", "REST API", "Git"].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="font-mono text-sm font-semibold px-4 py-2 rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "EduConnect",
                desc: "Django REST + React learning management system",
                tags: ["Django", "React", "PostgreSQL"]
              },
              {
                title: "ShopWave",
                desc: "E-commerce platform with robust inventory tracking",
                tags: ["Python", "Django", "Stripe"]
              },
              {
                title: "DevMetrics",
                desc: "Developer analytics dashboard with real-time charts",
                tags: ["JavaScript", "React", "Chart.js"]
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-background border border-border rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{project.desc}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-secondary/10 text-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to build something great?</h2>
            <p className="text-xl text-muted-foreground">
              Let's turn your ideas into functional, scalable realities.
            </p>
            <Button asChild size="lg" className="h-14 px-10 text-lg">
              <Link href="/contact" data-testid="link-cta-contact">
                Let's Work Together
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
