import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "Brand Identity", description: "Visual storytelling for modern brands", color: "bg-funky-pink/20" },
  { title: "Web Experience", description: "Interactive digital journeys", color: "bg-funky-teal/20" },
  { title: "Mobile App", description: "Intuitive user interfaces", color: "bg-funky-yellow/30" },
  { title: "Motion Design", description: "Bringing ideas to life", color: "bg-funky-orange/20" },
  { title: "Photography", description: "Capturing authentic moments", color: "bg-funky-purple/20" },
  { title: "Illustration", description: "Custom visual narratives", color: "bg-funky-green/20" },
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Welcome fades out from 0-15% scroll
  const welcomeOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const welcomeY = useTransform(scrollYProgress, [0, 0.15], [0, -150]);

  // Cards section appears from 10-20% and stays, spread happens 40-70%
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const spread = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-[400vh] bg-background">
      {/* Hero Section - Welcome */}
      <motion.section 
        className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 z-20 pointer-events-none"
        style={{ opacity: welcomeOpacity, y: welcomeY }}
      >
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-outfit font-bold text-foreground">
            hey{" "}
            <span className="text-funky-pink">welcome!</span>
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block ml-4"
            >
              👋
            </motion.span>
          </h1>
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
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="fixed top-0 left-0 right-0 h-screen flex items-center z-10"
        style={{ opacity: sectionOpacity }}
      >
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Title */}
          <motion.div 
            className="lg:w-1/3 flex-shrink-0"
            style={{ 
              opacity: useTransform(scrollYProgress, [0.15, 0.25], [0, 1]),
              x: useTransform(scrollYProgress, [0.15, 0.25], [-50, 0])
            }}
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground leading-tight">
              look into my{" "}
              <span className="text-funky-teal">projects</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full" />
          </motion.div>

          {/* Right side - Stacked Cards */}
          <div className="lg:w-2/3 relative h-[520px] w-full">
            {projects.map((project, index) => {
              const row = Math.floor(index / 2);
              const col = index % 2;
              const totalCards = projects.length;
              
              return (
                <motion.div
                  key={project.title}
                  className="absolute w-[280px] md:w-[320px]"
                  style={{
                    // Stacked position: cards offset slightly, then spread to grid
                    top: useTransform(
                      spread,
                      [0, 1],
                      [index * 6, row * 175]
                    ),
                    left: useTransform(
                      spread,
                      [0, 1],
                      [`calc(50% - 160px + ${index * 4}px)`, `${col * 340}px`]
                    ),
                    rotate: useTransform(
                      spread,
                      [0, 1],
                      [(index - 2.5) * 2.5, 0]
                    ),
                    zIndex: totalCards - index,
                    scale: useTransform(
                      spread,
                      [0, 1],
                      [1 - index * 0.015, 1]
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
      </motion.section>

      {/* Spacer for scroll */}
      <div className="h-screen" />
    </div>
  );
};

export default Index;
