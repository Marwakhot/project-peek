import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "AI Dashboard", description: "Real-time ML analytics & visualization platform", color: "bg-funky-pink" },
  { title: "Web3 Exchange", description: "Decentralized crypto trading interface", color: "bg-funky-teal" },
  { title: "Mobile Fintech", description: "Next-gen payment & banking app", color: "bg-funky-yellow" },
  { title: "SaaS Platform", description: "Cloud-native productivity suite", color: "bg-funky-orange" },
  { title: "IoT Controller", description: "Smart home automation system", color: "bg-funky-purple" },
  { title: "Dev Tools", description: "Code collaboration & CI/CD pipeline", color: "bg-funky-green" },
];

const education = [
  { year: "2024-2027", title: "Bachelor of Computer Science", subtitle: "Major: AI and Big Data", place: "University of Wollongong Dubai" },
  { year: "2022-2024", title: "High School Diploma", subtitle: "", place: "NIMS, Dubai" },
];

const experience = [
  { year: "2025-2026", title: "Data Science Intern", subtitle: "Oct 2025 - April 2026", place: "Alamar" },
  { year: "2025", title: "Gitex Representative", subtitle: "Oct 2025", place: "dreamloop.ai" },
  { year: "2023-2024", title: "School Headgirl", subtitle: "", place: "NIMS" },
  { year: "2023-2024", title: "Director General NIMSMUN", subtitle: "", place: "NIMS" },
];

const Index = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track when projects section hits the top of viewport
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: timelineScrollProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  // Card spread animation - only starts when section is at top
  const spread = useTransform(projectsScrollProgress, [0, 0.5], [0, 1]);

  // Timeline horizontal scroll
  const timelineX = useTransform(timelineScrollProgress, [0, 0.7], ["5%", "-55%"]);

  return (
    <div className="bg-background">
      {/* About Me Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-outfit font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi I'm <span className="text-funky-pink">Marwa</span>
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block ml-4"
            >
              👋
            </motion.span>
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
                    className="absolute w-[260px] md:w-[300px]"
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
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Dual timeline */}
      <section 
        ref={timelineRef}
        className="min-h-[150vh] relative mt-24"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Section Title */}
          <div className="container mx-auto px-6 mb-12">
            <motion.h2 
              className="text-4xl md:text-6xl font-outfit font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              my <span className="text-funky-purple">journey</span>
            </motion.h2>
            <div className="flex gap-8 mt-4">
              <span className="text-funky-purple font-space text-sm flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-funky-purple" /> education
              </span>
              <span className="text-funky-teal font-space text-sm flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-funky-teal" /> experience
              </span>
            </div>
          </div>

          {/* Horizontal Dual Timeline */}
          <div className="relative">
            {/* The timeline line - centered */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[300%] h-1 bg-foreground/20" />
            
            <motion.div 
              className="flex items-center"
              style={{ x: timelineX }}
            >
              {/* Interleave education and experience */}
              {[...education, ...experience].sort((a, b) => {
                const yearA = parseInt(a.year.split('-')[0]);
                const yearB = parseInt(b.year.split('-')[0]);
                return yearB - yearA;
              }).map((item, index) => {
                const isEducation = education.includes(item);
                
                return (
                  <div key={index} className="flex flex-col items-center min-w-[280px] md:min-w-[350px] px-6 relative">
                    {/* Education - Above the line */}
                    {isEducation && (
                      <div className="flex flex-col items-center mb-8">
                        <motion.span 
                          className="text-3xl md:text-4xl font-outfit font-bold text-funky-purple/40"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          {item.year}
                        </motion.span>
                        <h3 className="text-lg md:text-xl font-outfit font-bold text-foreground mt-2 text-center">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-funky-purple font-space text-xs mt-1">{item.subtitle}</p>
                        )}
                        <p className="text-muted-foreground font-space text-sm mt-1 text-center">
                          {item.place}
                        </p>
                      </div>
                    )}

                    {/* Circle on the line */}
                    <motion.div 
                      className={`w-5 h-5 rounded-full border-4 border-background shadow-lg z-10 ${
                        isEducation ? 'bg-funky-purple' : 'bg-funky-teal'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, type: "spring" }}
                    />

                    {/* Experience - Below the line */}
                    {!isEducation && (
                      <div className="flex flex-col items-center mt-8">
                        <motion.span 
                          className="text-3xl md:text-4xl font-outfit font-bold text-funky-teal/40"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          {item.year}
                        </motion.span>
                        <h3 className="text-lg md:text-xl font-outfit font-bold text-foreground mt-2 text-center">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-funky-teal font-space text-xs mt-1">{item.subtitle}</p>
                        )}
                        <p className="text-muted-foreground font-space text-sm mt-1 text-center">
                          {item.place}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="container mx-auto px-6 mt-16">
            <p className="text-muted-foreground font-space text-sm flex items-center gap-2">
              <motion.span
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              keep scrolling
            </p>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-32" />
    </div>
  );
};

export default Index;
