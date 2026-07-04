import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Send, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { BackToTop } from "@/components/back-to-top";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default",
    });
    
    form.reset();
  }

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
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm currently available for freelance work and full-time opportunities. If you are looking for a developer to build robust, scalable applications, let's talk.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</h3>
                    <a href="mailto:hello@isaac.dev" className="text-lg font-medium hover:text-primary transition-colors">hello@isaac.dev</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-full text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-lg font-medium">Nairobi, Kenya</p>
                    <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Social Profiles</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-card border border-border p-4 rounded-full hover:border-primary hover:text-primary transition-all group" aria-label="GitHub" data-testid="link-social-github">
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-card border border-border p-4 rounded-full hover:border-primary hover:text-primary transition-all group" aria-label="LinkedIn" data-testid="link-social-linkedin">
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-card border border-border p-4 rounded-full hover:border-primary hover:text-primary transition-all group" aria-label="Twitter" data-testid="link-social-twitter">
                    <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Send a Message</h2>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background border-border" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-background border-border" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Inquiry" {...field} className="bg-background border-border" data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-[150px] bg-background border-border resize-y" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full h-12 text-base shadow-md" data-testid="button-submit">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
