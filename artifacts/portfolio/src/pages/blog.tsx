import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/back-to-top";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Django's ORM: Queries that Scale",
    date: "October 15, 2023",
    readTime: "8 min read",
    tags: ["Django", "Database", "Performance"],
    category: "Backend",
    excerpt: "Deep dive into how Django translates Python code into SQL, and how to optimize your queries using select_related and prefetch_related to solve the N+1 problem."
  },
  {
    id: 2,
    title: "Building Real-time Features with React and WebSockets",
    date: "September 02, 2023",
    readTime: "6 min read",
    tags: ["React", "WebSockets", "JavaScript"],
    category: "Frontend",
    excerpt: "A practical guide to implementing bi-directional communication in your React applications for features like live chat, notifications, and collaborative editing."
  },
  {
    id: 3,
    title: "Dockerizing a Django + React Application",
    date: "August 18, 2023",
    readTime: "10 min read",
    tags: ["Docker", "DevOps", "Django"],
    category: "DevOps",
    excerpt: "Step-by-step tutorial on writing Dockerfiles and docker-compose configurations for a full-stack application to ensure environment consistency from dev to production."
  },
  {
    id: 4,
    title: "Why I Chose Tailwind CSS for My Component Library",
    date: "July 05, 2023",
    readTime: "5 min read",
    tags: ["CSS", "Tailwind", "Design"],
    category: "Frontend",
    excerpt: "Exploring the utility-first CSS methodology, overcoming initial skepticism, and how it drastically improved my frontend development velocity."
  }
];

const categories = ["All", "Backend", "Frontend", "DevOps"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

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
              Code & <span className="text-primary">Thoughts</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Writing about software architecture, clean code practices, and my experiences building products across the stack.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-border/50 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-muted-foreground font-medium mr-2">Filter:</span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card text-muted-foreground hover:bg-secondary/10 hover:text-foreground border border-border"
                }`}
                data-testid={`filter-blog-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors flex flex-col h-full group"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`#`} className="hover:underline decoration-primary underline-offset-4">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-accent" />
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-accent">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="group-hover:bg-primary/10 group-hover:text-primary transition-colors -ml-4 sm:ml-0" asChild>
                    <Link href={`#`} data-testid={`link-read-${post.id}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No articles found for this category.
            </div>
          )}
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
