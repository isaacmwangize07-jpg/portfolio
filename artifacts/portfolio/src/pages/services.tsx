import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Server, Globe, Database, Cog, ShieldCheck, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/back-to-top";

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern frameworks. From database design to responsive UI implementation.",
      highlights: ["React & Django", "Single Page Applications", "Responsive Design", "Authentication Systems"]
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description: "Robust, scalable, and secure server-side logic using Python and Django. Built to handle complex business requirements.",
      highlights: ["Business Logic", "Payment Integrations", "Third-party APIs", "Microservices"]
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "REST API Development",
      description: "Clean, well-documented, and secure RESTful APIs designed for seamless consumption by mobile and web frontends.",
      highlights: ["Django REST Framework", "Swagger Documentation", "JWT Auth", "Rate Limiting"]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Design & Optimization",
      description: "Designing efficient database schemas and optimizing queries to ensure data integrity and high performance under load.",
      highlights: ["PostgreSQL & MySQL", "Query Optimization", "Data Migration", "Caching Strategies"]
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Django Development",
      description: "Specialized expertise in the Django ecosystem. I build everything from CMS platforms to complex enterprise applications.",
      highlights: ["Custom Admin Panels", "Django ORM", "Celery Task Queues", "Django Channels"]
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Website Maintenance & Support",
      description: "Keeping your applications secure, up-to-date, and running smoothly with ongoing monitoring and feature updates.",
      highlights: ["Security Patches", "Performance Monitoring", "Bug Fixes", "Legacy Code Refactoring"]
    }
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
              How I Can <span className="text-primary">Help</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I partner with businesses and teams to build high-quality software solutions. Whether you need a complete platform built from scratch or expert assistance on an existing codebase.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="mb-6 p-4 bg-background rounded-lg inline-block text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <Button asChild variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  <Link href="/contact" data-testid={`link-service-${i}`}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Looking for something specific?</h2>
            <p className="text-xl text-muted-foreground">
              If your project doesn't fit neatly into one of these boxes, let's talk. I'm always open to discussing unique technical challenges.
            </p>
            <Button asChild size="lg" className="h-14 px-10 text-lg">
              <Link href="/contact" data-testid="link-custom-request">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
