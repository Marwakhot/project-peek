import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string;
  color: string;
  github: string;
}

interface RetroComputerProps {
  projects: Project[];
}

const RetroComputer = ({ projects }: RetroComputerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Laptop */}
      <div className="relative">
        {/* Screen */}
        <div className="bg-card border-4 border-funky-purple rounded-t-2xl p-3 pb-0">
          {/* Screen bezel */}
          <div className="bg-background rounded-lg overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
            {/* Webcam dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground/30" />
            
            {/* Screen content */}
            <div className="absolute inset-0 pt-6 px-6 pb-4 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-full flex flex-col"
                >
                  {/* Project counter */}
                  <div className="text-xs font-space text-muted-foreground mb-3">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                  
                  {/* Color indicator */}
                  <div className={`w-10 h-1.5 ${currentProject.color} rounded-full mb-4`} />
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-outfit font-bold text-foreground mb-3 leading-tight">
                    {currentProject.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground font-space leading-relaxed flex-1">
                    {currentProject.description}
                  </p>
                  
                  {/* Tech Stack & GitHub */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-xs text-funky-teal font-space">
                      {currentProject.techStack}
                    </p>
                    <a
                      href={currentProject.github}
                      className="inline-flex items-center gap-1.5 text-sm text-funky-pink hover:underline font-space"
                    >
                      <Github size={14} />
                      View Code
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Screen glare */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* Laptop base/keyboard */}
        <div className="bg-card border-4 border-t-0 border-funky-purple rounded-b-xl h-4 relative">
          {/* Hinge line */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-muted rounded-full" />
          {/* Trackpad notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-muted-foreground/20 rounded-full" />
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevProject}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 p-2 md:p-3 bg-card border border-funky-purple rounded-full hover:bg-funky-purple/20 transition-colors group z-10"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-funky-purple group-hover:text-funky-pink transition-colors" />
      </button>
      
      <button
        onClick={nextProject}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 p-2 md:p-3 bg-card border border-funky-purple rounded-full hover:bg-funky-purple/20 transition-colors group z-10"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-funky-purple group-hover:text-funky-pink transition-colors" />
      </button>

      {/* Project dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-funky-pink w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RetroComputer;
