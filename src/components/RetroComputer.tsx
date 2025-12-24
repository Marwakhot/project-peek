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
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Computer SVG */}
      <svg viewBox="0 0 600 500" className="w-full h-auto">
        {/* Monitor back/side */}
        <path
          d="M480 60 L560 100 L560 320 L480 360 L480 60"
          fill="hsl(var(--muted))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="2"
        />
        
        {/* Monitor body */}
        <rect
          x="80"
          y="40"
          width="400"
          height="320"
          rx="12"
          fill="hsl(var(--card))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="3"
        />
        
        {/* Monitor bezel */}
        <rect
          x="100"
          y="60"
          width="360"
          height="240"
          rx="8"
          fill="hsl(var(--funky-purple))"
          opacity="0.3"
        />
        
        {/* Screen */}
        <rect
          x="110"
          y="70"
          width="340"
          height="220"
          rx="4"
          fill="hsl(var(--background))"
          className="drop-shadow-inner"
        />
        
        {/* Screen glare */}
        <ellipse
          cx="150"
          cy="100"
          rx="25"
          ry="15"
          fill="white"
          opacity="0.1"
        />
        
        {/* Monitor stand connector */}
        <rect
          x="240"
          y="360"
          width="80"
          height="20"
          fill="hsl(var(--muted))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="2"
        />
        
        {/* CPU/Tower */}
        <rect
          x="80"
          y="385"
          width="400"
          height="80"
          rx="8"
          fill="hsl(var(--card))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="3"
        />
        
        {/* Floppy drive */}
        <rect
          x="100"
          y="405"
          width="120"
          height="15"
          rx="2"
          fill="hsl(var(--muted))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="1"
        />
        <line
          x1="105"
          y1="412"
          x2="215"
          y2="412"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="1"
        />
        
        {/* Power button */}
        <circle
          cx="440"
          cy="425"
          r="10"
          fill="hsl(var(--funky-teal))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="1"
        />
        
        {/* Keyboard */}
        <path
          d="M60 480 L100 440 L460 440 L500 480 L60 480"
          fill="hsl(var(--card))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="2"
        />
        
        {/* Keyboard keys suggestion */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={120 + i * 35}
            y="450"
            width="25"
            height="8"
            rx="1"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--funky-purple))"
            strokeWidth="0.5"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i + 8}
            x={130 + i * 35}
            y="462"
            width="25"
            height="8"
            rx="1"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--funky-purple))"
            strokeWidth="0.5"
          />
        ))}
        
        {/* Mouse */}
        <ellipse
          cx="540"
          cy="465"
          rx="25"
          ry="35"
          fill="hsl(var(--card))"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="2"
        />
        <line
          x1="540"
          y1="445"
          x2="540"
          y2="455"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="1"
        />
        {/* Mouse cable */}
        <path
          d="M520 465 Q 490 450 470 465"
          fill="none"
          stroke="hsl(var(--funky-purple))"
          strokeWidth="2"
        />
      </svg>

      {/* Project content inside screen - positioned absolutely */}
      <div className="absolute top-[14%] left-[18.5%] w-[56.5%] h-[44%] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 p-4 flex flex-col"
          >
            {/* Project counter */}
            <div className="text-xs font-space text-muted-foreground mb-2">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </div>
            
            {/* Color indicator */}
            <div className={`w-8 h-1 ${currentProject.color} rounded-full mb-3`} />
            
            {/* Title */}
            <h3 className="text-lg md:text-xl font-outfit font-bold text-foreground mb-2 leading-tight">
              {currentProject.title}
            </h3>
            
            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground font-space leading-relaxed flex-1 overflow-hidden">
              {currentProject.description}
            </p>
            
            {/* Tech Stack */}
            <div className="mt-2">
              <p className="text-xs text-funky-teal font-space">
                {currentProject.techStack}
              </p>
            </div>
            
            {/* GitHub link */}
            <a
              href={currentProject.github}
              className="mt-2 inline-flex items-center gap-1 text-xs text-funky-pink hover:underline font-space"
            >
              <Github size={12} />
              View Code
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevProject}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-3 bg-card border border-funky-purple rounded-full hover:bg-funky-purple/20 transition-colors group"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6 text-funky-purple group-hover:text-funky-pink transition-colors" />
      </button>
      
      <button
        onClick={nextProject}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-3 bg-card border border-funky-purple rounded-full hover:bg-funky-purple/20 transition-colors group"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6 text-funky-purple group-hover:text-funky-pink transition-colors" />
      </button>

      {/* Project dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
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
