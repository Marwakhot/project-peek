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
      {/* Laptop SVG Illustration */}
      <svg viewBox="0 0 500 360" className="w-full h-auto" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}>
        {/* Screen bezel - dark navy - connects to base */}
        <path
          d="M40 10 L460 10 Q475 10 475 25 L475 250 L25 250 L25 25 Q25 10 40 10"
          fill="#1e2433"
          stroke="#2d3548"
          strokeWidth="1"
        />
        
        {/* Webcam */}
        <circle cx="250" cy="20" r="3" fill="#3d4555" />
        <circle cx="250" cy="20" r="1.5" fill="#1a1f2e" />
        
        {/* Laptop base - slate blue/purple - connected to screen */}
        <path
          d="M25 250 L475 250 L495 340 Q495 345 490 345 L10 345 Q5 345 5 340 L25 250"
          fill="#5c6378"
          stroke="#4a5568"
          strokeWidth="1"
        />
        
        {/* Keyboard area */}
        <rect
          x="50"
          y="260"
          width="400"
          height="55"
          rx="3"
          fill="#2d3548"
        />
        
        {/* Keyboard rows */}
        {/* Row 1 - Function keys */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={`row1-${i}`}
            x={60 + i * 27}
            y={265}
            width={23}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Row 2 */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={`row2-${i}`}
            x={60 + i * 27}
            y={276}
            width={23}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Row 3 */}
        {Array.from({ length: 13 }).map((_, i) => (
          <rect
            key={`row3-${i}`}
            x={67 + i * 27}
            y={287}
            width={23}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Row 4 */}
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={`row4-${i}`}
            x={75 + i * 27}
            y={298}
            width={23}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Spacebar row */}
        <rect x={60} y={309} width={32} height={8} rx={1} fill="#1e2433" />
        <rect x={96} y={309} width={23} height={8} rx={1} fill="#1e2433" />
        <rect x={123} y={309} width={23} height={8} rx={1} fill="#1e2433" />
        {/* Spacebar */}
        <rect x={150} y={309} width={130} height={8} rx={1} fill="#1e2433" />
        <rect x={284} y={309} width={23} height={8} rx={1} fill="#1e2433" />
        <rect x={311} y={309} width={23} height={8} rx={1} fill="#1e2433" />
        <rect x={338} y={309} width={23} height={8} rx={1} fill="#1e2433" />
        {/* Arrow keys */}
        <rect x={380} y={305} width={16} height={6} rx={1} fill="#1e2433" />
        <rect x={370} y={312} width={16} height={6} rx={1} fill="#1e2433" />
        <rect x={388} y={312} width={16} height={6} rx={1} fill="#1e2433" />
        <rect x={406} y={312} width={16} height={6} rx={1} fill="#1e2433" />
        
        {/* Trackpad */}
        <rect
          x="185"
          y="325"
          width="130"
          height="10"
          rx="2"
          fill="#4a5568"
        />
      </svg>

      {/* Project content overlay - positioned on the screen with dark bezel showing */}
      <div 
        className="absolute bg-[#1e2433] rounded-sm overflow-hidden"
        style={{
          top: '5.5%',
          left: '5%',
          width: '90%',
          height: '64%',
          padding: '12px',
        }}
      >
        {/* Webcam placeholder in overlay */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3d4555]" />
        
        {/* Screen content area - inset from bezel */}
        <div 
          className="w-full h-full bg-background rounded-sm overflow-hidden"
          style={{ marginTop: '8px' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full flex flex-col p-4 md:p-5"
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
              <p className="text-xs md:text-sm text-muted-foreground font-space leading-relaxed flex-1 line-clamp-3">
                {currentProject.description}
              </p>
              
              {/* Tech Stack & GitHub */}
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-[10px] md:text-xs text-funky-teal font-space line-clamp-1">
                  {currentProject.techStack}
                </p>
                <a
                  href={currentProject.github}
                  className="inline-flex items-center gap-1 text-xs text-funky-pink hover:underline font-space"
                >
                  <Github size={12} />
                  View Code
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevProject}
        className="absolute left-0 top-[30%] -translate-y-1/2 -translate-x-2 md:-translate-x-6 p-2 md:p-3 bg-[#2d3548] border border-[#3d4555] rounded-full hover:bg-[#3d4555] transition-colors group z-10 shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#8b95a8] group-hover:text-white transition-colors" />
      </button>
      
      <button
        onClick={nextProject}
        className="absolute right-0 top-[30%] -translate-y-1/2 translate-x-2 md:translate-x-6 p-2 md:p-3 bg-[#2d3548] border border-[#3d4555] rounded-full hover:bg-[#3d4555] transition-colors group z-10 shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#8b95a8] group-hover:text-white transition-colors" />
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
                : "bg-[#5c6378] hover:bg-[#8b95a8]"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RetroComputer;
