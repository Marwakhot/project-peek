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

  const spread = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-background">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-outfit font-bold text-foreground">
            hey{" "}
            <span className="text-funky-pink">welcome</span>
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
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="min-h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left side - Title */}
            <motion.div 
              className="lg:w-1/3 flex-shrink-0"
              style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]) }}
            >
              <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground leading-tight">
                look into my{" "}
                <span className="text-funky-teal">projects</span>
              </h2>
              <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full" />
            </motion.div>

            {/* Right side - Cards */}
            <div className="lg:w-2/3 relative h-[500px] w-full">
              {projects.map((project, index) => {
                const row = Math.floor(index / 2);
                const col = index % 2;
                
                return (
                  <motion.div
                    key={project.title}
                    className="absolute w-[calc(50%-12px)]"
                    style={{
                      top: useTransform(
                        spread,
                        [0, 1],
                        [index * 8, row * 180]
                      ),
                      left: useTransform(
                        spread,
                        [0, 1],
                        [index * 4, col * 52 + "%"]
                      ),
                      rotate: useTransform(
                        spread,
                        [0, 1],
                        [(index - 2) * 3, 0]
                      ),
                      zIndex: projects.length - index,
                      scale: useTransform(
                        spread,
                        [0, 1],
                        [1 - index * 0.02, 1]
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
    </div>
  );
};

export default Index;
