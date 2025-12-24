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
      <svg viewBox="0 0 500 340" className="w-full h-auto" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}>
        {/* Screen bezel - dark navy */}
        <path
          d="M50 10 L450 10 Q465 10 465 25 L465 230 Q465 235 460 235 L40 235 Q35 235 35 230 L35 25 Q35 10 50 10"
          fill="#1e2433"
          stroke="#2d3548"
          strokeWidth="1"
        />
        
        {/* Screen inner - where content goes */}
        <rect
          x="55"
          y="25"
          width="390"
          height="200"
          rx="3"
          fill="#0f1219"
        />
        
        {/* Webcam */}
        <circle cx="250" cy="17" r="3" fill="#3d4555" />
        <circle cx="250" cy="17" r="1.5" fill="#1a1f2e" />
        
        {/* Laptop base - slate blue/purple */}
        <path
          d="M20 238 L480 238 L500 320 Q500 325 495 325 L5 325 Q0 325 0 320 L20 238"
          fill="#5c6378"
          stroke="#4a5568"
          strokeWidth="1"
        />
        
        {/* Keyboard area */}
        <rect
          x="45"
          y="248"
          width="410"
          height="55"
          rx="3"
          fill="#2d3548"
        />
        
        {/* Keyboard rows */}
        {/* Row 1 - Function keys */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={`row1-${i}`}
            x={55 + i * 28}
            y={253}
            width={24}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Row 2 */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={`row2-${i}`}
            x={55 + i * 28}
            y={264}
            width={24}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Row 3 */}
        {Array.from({ length: 13 }).map((_, i) => (
          <rect
            key={`row3-${i}`}
            x={62 + i * 28}
            y={275}
            width={24}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Row 4 */}
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={`row4-${i}`}
            x={70 + i * 28}
            y={286}
            width={24}
            height={8}
            rx={1}
            fill="#1e2433"
          />
        ))}
        
        {/* Spacebar row */}
        <rect x={55} y={297} width={35} height={8} rx={1} fill="#1e2433" />
        <rect x={95} y={297} width={25} height={8} rx={1} fill="#1e2433" />
        <rect x={125} y={297} width={25} height={8} rx={1} fill="#1e2433" />
        {/* Spacebar */}
        <rect x={155} y={297} width={140} height={8} rx={1} fill="#1e2433" />
        <rect x={300} y={297} width={25} height={8} rx={1} fill="#1e2433" />
        <rect x={330} y={297} width={25} height={8} rx={1} fill="#1e2433" />
        <rect x={360} y={297} width={25} height={8} rx={1} fill="#1e2433" />
        {/* Arrow keys */}
        <rect x={400} y={293} width={18} height={6} rx={1} fill="#1e2433" />
        <rect x={390} y={300} width={18} height={6} rx={1} fill="#1e2433" />
        <rect x={410} y={300} width={18} height={6} rx={1} fill="#1e2433" />
        <rect x={430} y={300} width={18} height={6} rx={1} fill="#1e2433" />
        
        {/* Trackpad */}
        <rect
          x="190"
          y="310"
          width="120"
          height="8"
          rx="2"
          fill="#4a5568"
        />
        
        {/* Hinge highlight */}
        <line x1="35" y1="236" x2="465" y2="236" stroke="#3d4555" strokeWidth="2" />
      </svg>

      {/* Project content overlay - positioned on the screen */}
      <div 
        className="absolute overflow-hidden"
        style={{
          top: '7.5%',
          left: '11%',
          width: '78%',
          height: '59%',
        }}
      >
        <div className="w-full h-full bg-background rounded-sm overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full flex flex-col p-4 md:p-6"
            >
              {/* Project counter */}
              <div className="text-xs font-space text-muted-foreground mb-2">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>
              
              {/* Color indicator */}
              <div className={`w-8 h-1 ${currentProject.color} rounded-full mb-3`} />
              
              {/* Title */}
              <h3 className="text-lg md:text-2xl font-outfit font-bold text-foreground mb-2 leading-tight">
                {currentProject.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-muted-foreground font-space leading-relaxed flex-1 line-clamp-3 md:line-clamp-none">
                {currentProject.description}
              </p>
              
              {/* Tech Stack & GitHub */}
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
