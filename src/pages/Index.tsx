import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import HangingIDCard from "@/components/HangingIDCard";

const projects = [
  { title: "AI Dashboard", description: "Real-time ML analytics & visualization platform", color: "bg-funky-pink", github: "#" },
  { title: "Web3 Exchange", description: "Decentralized crypto trading interface", color: "bg-funky-teal", github: "#" },
  { title: "Mobile Fintech", description: "Next-gen payment & banking app", color: "bg-funky-yellow", github: "#" },
  { title: "SaaS Platform", description: "Cloud-native productivity suite", color: "bg-funky-orange", github: "#" },
  { title: "IoT Controller", description: "Smart home automation system", color: "bg-funky-purple", github: "#" },
  { title: "Dev Tools", description: "Code collaboration & CI/CD pipeline", color: "bg-funky-green", github: "#" },
  { title: "Data Pipeline", description: "ETL processing & data warehousing", color: "bg-funky-pink", github: "#" },
  { title: "Chat Application", description: "Real-time messaging with AI features", color: "bg-funky-teal", github: "#" },
];

const currentActivities = [
  { 
    title: "Data Science Intern", 
    period: "Oct 2025 - April 2026", 
    place: "Alamar", 
    color: "text-funky-orange",
    details: "Working on machine learning models for predictive analytics, data visualization dashboards, and automated reporting systems. Collaborating with cross-functional teams to derive actionable insights from large datasets."
  },
  { 
    title: "Studying Bachelor of Computer Science", 
    period: "Major: AI and Big Data", 
    place: "University of Wollongong Dubai", 
    color: "text-funky-teal",
    details: "Pursuing a comprehensive curriculum covering artificial intelligence, machine learning, data mining, and big data technologies. Engaged in research projects and hands-on labs to build practical skills."
  },
];

const pastActivities = [
  { 
    title: "Gitex Representative", 
    period: "Oct 2025", 
    place: "dreamloop.ai",
    details: "Represented dreamloop.ai at GITEX Global, one of the world's largest tech exhibitions. Demonstrated AI products to potential clients and partners, engaging with industry leaders."
  },
  { 
    title: "High School Diploma", 
    period: "2022-2024", 
    place: "NIMS, Dubai",
    details: "Completed high school with distinction, focusing on science and mathematics. Participated in various extracurricular activities and academic competitions."
  },
  { 
    title: "School Headgirl", 
    period: "2023-2024", 
    place: "NIMS",
    details: "Led student body initiatives, organized school events, and served as the primary liaison between students and administration. Developed leadership and public speaking skills."
  },
  { 
    title: "Director General NIMSMUN", 
    period: "2023-2024", 
    place: "NIMS",
    details: "Directed the Model United Nations conference, overseeing committee formations, delegate training, and event logistics. Managed a team of executive board members and chairs."
  },
];

const Index = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Track when projects section hits the top of viewport
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  // Card spread animation - only starts when section is at top
  const spread = useTransform(projectsScrollProgress, [0, 0.5], [0, 1]);

  return (
    <div className="bg-background">
      {/* About Me Section */}
      <section className="min-h-screen flex items-center px-6 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between">
          {/* Text content - left aligned */}
          <div className="max-w-2xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-outfit font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi I'm <span className="text-funky-pink">Marwa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl md:text-2xl text-muted-foreground font-space leading-relaxed"
            >
              I could write a long "About Me," but honestly the projects below say it better. Go take a look.
            </motion.p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-12 text-3xl text-funky-teal"
            >
              ↓
            </motion.div>
          </div>

          {/* Hanging ID Card - moved more to center */}
          <div className="hidden md:block pt-32 -ml-64">
            <HangingIDCard />
          </div>
        </div>
      </section>

      {/* Projects Section - Sticky with cards spreading */}
      <section ref={projectsRef} className="min-h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="container mx-auto px-6 flex flex-row items-center gap-12">
            {/* Left side - Title */}
            <motion.div 
              className="w-1/3 flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground leading-tight">
                look into my{" "}
                <span className="text-funky-teal">projects</span>
              </h2>
              <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full" />
            </motion.div>

            {/* Right side - Stacked Cards that spread to 2-column grid */}
            <div className="w-2/3 relative h-[650px]">
              {projects.map((project, index) => {
                const row = Math.floor(index / 2);
                const col = index % 2;
                const totalCards = projects.length;
                
                return (
                  <motion.div
                    key={project.title}
                    className="absolute w-[300px] md:w-[360px]"
                    style={{
                      top: useTransform(
                        spread,
                        [0, 1],
                        [index * 12, row * 210]
                      ),
                      left: useTransform(
                        spread,
                        [0, 1],
                        [`calc(50% - 150px + ${index * 8}px)`, col === 0 ? '5%' : '55%']
                      ),
                      rotate: useTransform(
                        spread,
                        [0, 1],
                        [(index - 2.5) * 5, 0]
                      ),
                      zIndex: totalCards - index,
                      scale: useTransform(
                        spread,
                        [0, 1],
                        [1 - index * 0.03, 1]
                      ),
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      color={project.color}
                      index={index}
                      github={project.github}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="min-h-screen py-24 mt-24">
        <div className="container mx-auto px-6">
          {/* Currently I'm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground mb-8">
              Currently I'm
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-funky-pink" />
              <div className="space-y-8">
                {currentActivities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-6 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-funky-pink border-4 border-background shadow-lg z-10 flex-shrink-0" />
                    <div className="-mt-1 cursor-pointer">
                      <h4 className={`text-xl font-outfit font-bold ${item.color} group-hover:underline`}>{item.title}</h4>
                      <p className="text-muted-foreground font-space text-sm">{item.period}</p>
                      <p className="text-foreground font-space">{item.place}</p>
                    </div>
                    {/* Hover tooltip */}
                    <div className="absolute left-64 top-0 w-80 p-4 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="absolute -left-2 top-4 w-4 h-4 bg-card border-l border-t border-border rotate-[-45deg]" />
                      <h5 className={`font-outfit font-bold ${item.color} mb-2`}>{item.title}</h5>
                      <p className="text-muted-foreground font-space text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* I've been */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground mb-8">
              I've been
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-funky-orange" />
              <div className="space-y-8">
                {pastActivities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-6 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-funky-orange border-4 border-background shadow-lg z-10 flex-shrink-0" />
                    <div className="-mt-1 cursor-pointer">
                      <h4 className="text-lg font-outfit font-bold text-foreground group-hover:underline">{item.title}</h4>
                      <p className="text-funky-teal font-space text-sm">{item.period}</p>
                      <p className="text-muted-foreground font-space text-sm">{item.place}</p>
                    </div>
                    {/* Hover tooltip */}
                    <div className="absolute left-64 top-0 w-80 p-4 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="absolute -left-2 top-4 w-4 h-4 bg-card border-l border-t border-border rotate-[-45deg]" />
                      <h5 className="font-outfit font-bold text-funky-orange mb-2">{item.title}</h5>
                      <p className="text-muted-foreground font-space text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-32" />
    </div>
  );
};

export default Index;
