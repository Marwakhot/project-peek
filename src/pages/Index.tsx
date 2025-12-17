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
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: timelineScrollProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Timeline horizontal scroll - moves left as user scrolls down
  const timelineX = useTransform(timelineScrollProgress, [0.2, 0.8], ["5%", "-55%"]);

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

      {/* Projects Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          {/* Title */}
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground leading-tight">
              look into my{" "}
              <span className="text-funky-teal">projects</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full mx-auto" />
          </motion.div>

          {/* 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, rotate: (index - 2.5) * 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  color={project.color}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={timelineRef}
        className="min-h-[150vh] relative"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Section Title */}
          <div className="container mx-auto px-6 mb-16">
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

          {/* Horizontal Timeline with Line */}
          <div className="relative">
            {/* The actual timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-foreground/10 -translate-y-1/2" />
            
            <motion.div 
              className="flex items-center gap-0 px-6"
              style={{ x: timelineX }}
            >
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  {/* Timeline Item */}
                  <div className="flex flex-col items-center min-w-[320px] md:min-w-[380px]">
                    {/* Card above line for even, below for odd */}
                    <motion.div
                      className={`${item.color} rounded-2xl p-6 w-[280px] md:w-[320px] relative shadow-card ${
                        index % 2 === 0 ? 'mb-8' : 'mt-8 order-2'
                      }`}
                      initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Type badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-space font-bold mb-3 bg-foreground/10 text-foreground`}>
                        {item.type}
                      </span>
                      
                      {/* Year */}
                      <div className="text-4xl font-outfit font-bold text-foreground/20 mb-1">
                        {item.year}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-outfit font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      
                      {/* Place */}
                      <p className="text-foreground/70 font-space text-sm">
                        {item.place}
                      </p>

                      {/* Connector line to circle */}
                      <div className={`absolute left-1/2 w-0.5 h-8 bg-foreground/30 -translate-x-1/2 ${
                        index % 2 === 0 ? '-bottom-8' : '-top-8'
                      }`} />
                    </motion.div>

                    {/* Circle on the line */}
                    <motion.div 
                      className={`w-6 h-6 rounded-full ${item.color} border-4 border-background shadow-lg z-10 ${
                        index % 2 === 0 ? '' : 'order-1'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    />
                  </div>

                  {/* Connecting line between circles */}
                  {index < timeline.length - 1 && (
                    <div className="w-16 md:w-24 h-1 bg-foreground/20 -mx-8" />
                  )}
                </div>
              ))}
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
              keep scrolling to explore timeline
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
