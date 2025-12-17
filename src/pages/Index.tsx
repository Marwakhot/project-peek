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

const timeline = [
  { year: "2024", title: "Senior Developer", place: "Tech Corp", type: "experience" },
  { year: "2023", title: "Full Stack Engineer", place: "StartupX", type: "experience" },
  { year: "2022", title: "M.S. Computer Science", place: "MIT", type: "education" },
  { year: "2021", title: "Frontend Developer", place: "Agency Inc", type: "experience" },
  { year: "2020", title: "B.S. Software Engineering", place: "Stanford", type: "education" },
  { year: "2019", title: "Intern", place: "Google", type: "experience" },
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
    offset: ["start end", "end start"],
  });

  // Card spread animation - only starts when section is at top
  const spread = useTransform(projectsScrollProgress, [0, 0.5], [0, 1]);

  // Timeline horizontal scroll
  const timelineX = useTransform(timelineScrollProgress, [0.2, 0.8], ["5%", "-50%"]);

  return (
    <div className="bg-background">
      {/* Hero Section - Welcome */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-outfit font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            hey{" "}
            <span className="text-funky-pink">welcome!</span>
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
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl text-muted-foreground font-space"
          >
            scroll down to explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-8 text-3xl"
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

      {/* Timeline Section - Simple text with line */}
      <section 
        ref={timelineRef}
        className="min-h-[120vh] relative mt-24"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Section Title */}
          <div className="container mx-auto px-6 mb-20">
            <motion.h2 
              className="text-4xl md:text-6xl font-outfit font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              my <span className="text-funky-purple">journey</span>
            </motion.h2>
            <p className="text-muted-foreground font-space mt-2">experience & education</p>
          </div>

          {/* Horizontal Timeline - Simple with line and circles */}
          <div className="relative">
            {/* The timeline line */}
            <div className="absolute top-[50%] left-0 w-[200%] h-0.5 bg-foreground/15" />
            
            <motion.div 
              className="flex items-center"
              style={{ x: timelineX }}
            >
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  {/* Timeline Item */}
                  <div className="flex flex-col items-center min-w-[280px] md:min-w-[320px] px-4">
                    {/* Content above or below line */}
                    <div className={`flex flex-col items-center ${index % 2 === 0 ? 'mb-10' : 'mt-10 order-2'}`}>
                      {/* Year */}
                      <motion.span 
                        className="text-5xl md:text-6xl font-outfit font-bold text-funky-pink/30"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {item.year}
                      </motion.span>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-outfit font-bold text-foreground mt-2 text-center">
                        {item.title}
                      </h3>
                      
                      {/* Place */}
                      <p className="text-muted-foreground font-space text-sm mt-1">
                        {item.place}
                      </p>
                      
                      {/* Type */}
                      <span className={`text-xs font-space mt-2 ${
                        item.type === 'experience' ? 'text-funky-teal' : 'text-funky-purple'
                      }`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Circle on the line */}
                    <motion.div 
                      className={`w-5 h-5 rounded-full border-4 border-background shadow-lg z-10 ${
                        item.type === 'experience' ? 'bg-funky-teal' : 'bg-funky-purple'
                      } ${index % 2 === 0 ? '' : 'order-1'}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, type: "spring" }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="container mx-auto px-6 mt-20">
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
