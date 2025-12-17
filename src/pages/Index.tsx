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
  { year: "2024", title: "Senior Developer", place: "Tech Corp", type: "experience", color: "bg-funky-pink" },
  { year: "2023", title: "Full Stack Engineer", place: "StartupX", type: "experience", color: "bg-funky-teal" },
  { year: "2022", title: "M.S. Computer Science", place: "MIT", type: "education", color: "bg-funky-purple" },
  { year: "2021", title: "Frontend Developer", place: "Agency Inc", type: "experience", color: "bg-funky-orange" },
  { year: "2020", title: "B.S. Software Engineering", place: "Stanford", type: "education", color: "bg-funky-yellow" },
  { year: "2019", title: "Intern", place: "Google", type: "experience", color: "bg-funky-green" },
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: timelineScrollProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Welcome fades out from 0-10% scroll
  const welcomeOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const welcomeY = useTransform(scrollYProgress, [0, 0.1], [0, -150]);

  // Cards section appears from 8-15% and stays until 50%
  const sectionOpacity = useTransform(scrollYProgress, [0.08, 0.15, 0.5, 0.55], [0, 1, 1, 0]);
  const spread = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  // Timeline horizontal scroll
  const timelineX = useTransform(timelineScrollProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={containerRef} className="min-h-[600vh] bg-background">
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
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Title */}
          <motion.div 
            className="lg:w-1/4 flex-shrink-0"
            style={{ 
              opacity: useTransform(scrollYProgress, [0.12, 0.2], [0, 1]),
              x: useTransform(scrollYProgress, [0.12, 0.2], [-50, 0])
            }}
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-foreground leading-tight">
              look into my{" "}
              <span className="text-funky-teal">projects</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full" />
          </motion.div>

          {/* Right side - 2 Column Grid */}
          <div className="lg:w-3/4 relative h-[650px] w-full">
            {projects.map((project, index) => {
              const row = Math.floor(index / 2);
              const col = index % 2;
              const totalCards = projects.length;
              
              return (
                <motion.div
                  key={project.title}
                  className="absolute w-[280px] md:w-[320px]"
                  style={{
                    top: useTransform(
                      spread,
                      [0, 1],
                      [index * 10, row * 210]
                    ),
                    left: useTransform(
                      spread,
                      [0, 1],
                      [`calc(50% - 160px + ${index * 8}px)`, `${col * 350}px`]
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
                      [1 - index * 0.025, 1]
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

      {/* Spacer for projects animation */}
      <div className="h-[300vh]" />

      {/* Timeline Section */}
      <section 
        ref={timelineRef}
        className="min-h-[200vh] relative overflow-hidden"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Section Title */}
          <div className="container mx-auto px-6 mb-12">
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground">
              my <span className="text-funky-purple">journey</span>
            </h2>
            <p className="text-muted-foreground font-space mt-2">experience & education</p>
          </div>

          {/* Horizontal Timeline */}
          <motion.div 
            className="flex gap-8 px-6"
            style={{ x: timelineX }}
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.color} min-w-[350px] md:min-w-[400px] rounded-3xl p-8 relative overflow-hidden flex-shrink-0`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-foreground/5 rounded-full" />
                
                {/* Type badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-space font-bold mb-4 ${
                  item.type === 'experience' ? 'bg-foreground/10 text-foreground' : 'bg-foreground/20 text-foreground'
                }`}>
                  {item.type}
                </span>
                
                {/* Year */}
                <div className="text-5xl font-outfit font-bold text-foreground/20 mb-2">
                  {item.year}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-outfit font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                
                {/* Place */}
                <p className="text-foreground/70 font-space">
                  {item.place}
                </p>

                {/* Connection line */}
                {index < timeline.length - 1 && (
                  <div className="absolute right-0 top-1/2 w-8 h-1 bg-foreground/20 translate-x-full" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <div className="container mx-auto px-6 mt-8">
            <p className="text-muted-foreground font-space text-sm flex items-center gap-2">
              <motion.span
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              keep scrolling to explore
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
