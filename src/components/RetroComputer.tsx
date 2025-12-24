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

  // Generate keyboard keys
  const keyboardRows = [
    Array(14).fill(null), // Top row - function keys
    Array(14).fill(null), // Number row
    Array(13).fill(null), // QWERTY row
    Array(12).fill(null), // ASDF row
    Array(10).fill(null), // ZXCV row
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Laptop */}
      <div className="relative">
        {/* Screen lid */}
        <div 
          className="rounded-t-2xl p-2 pb-0 relative"
          style={{ 
            background: 'linear-gradient(145deg, #6b7280, #4b5563)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 -2px 10px rgba(0,0,0,0.2)'
          }}
        >
          {/* Inner bezel */}
          <div 
            className="rounded-t-xl p-1.5 pb-0"
            style={{ background: 'linear-gradient(145deg, #374151, #1f2937)' }}
          >
            {/* Screen bezel */}
            <div className="bg-[#111827] rounded-lg overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
              {/* Webcam dot */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-700 ring-1 ring-gray-600" />
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-800" />
              
              {/* Screen content */}
              <div className="absolute inset-0 pt-5 px-5 pb-4 overflow-hidden bg-background">
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
              <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Laptop base with keyboard */}
        <div 
          className="rounded-b-2xl pt-1 pb-3 px-3 relative"
          style={{ 
            background: 'linear-gradient(180deg, #4b5563, #6b7280)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          {/* Hinge */}
          <div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-2 rounded-b-md"
            style={{ background: 'linear-gradient(180deg, #374151, #4b5563)' }}
          />
          
          {/* Keyboard area */}
          <div 
            className="rounded-lg p-2 mt-1"
            style={{ background: 'linear-gradient(180deg, #374151, #1f2937)' }}
          >
            {/* Keyboard rows */}
            <div className="space-y-1">
              {keyboardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-0.5">
                  {row.map((_, keyIndex) => {
                    // Vary key widths for realism
                    let width = 'w-4 md:w-5';
                    if (rowIndex === 0 && keyIndex === 0) width = 'w-3 md:w-4'; // Esc
                    if (rowIndex === 1 && keyIndex === 13) width = 'w-6 md:w-8'; // Backspace
                    if (rowIndex === 2 && keyIndex === 0) width = 'w-5 md:w-7'; // Tab
                    if (rowIndex === 3 && keyIndex === 0) width = 'w-6 md:w-8'; // Caps
                    if (rowIndex === 3 && keyIndex === 11) width = 'w-7 md:w-10'; // Enter
                    if (rowIndex === 4 && keyIndex === 0) width = 'w-8 md:w-10'; // Shift
                    if (rowIndex === 4 && keyIndex === 9) width = 'w-8 md:w-10'; // Shift
                    
                    return (
                      <div
                        key={keyIndex}
                        className={`${width} h-3 md:h-4 rounded-sm`}
                        style={{ 
                          background: 'linear-gradient(180deg, #4b5563, #374151)',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                        }}
                      />
                    );
                  })}
                </div>
              ))}
              
              {/* Bottom row with spacebar */}
              <div className="flex justify-center gap-0.5">
                <div className="w-4 md:w-5 h-3 md:h-4 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                <div className="w-4 md:w-5 h-3 md:h-4 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                <div className="w-4 md:w-5 h-3 md:h-4 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                {/* Spacebar */}
                <div className="w-28 md:w-40 h-3 md:h-4 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)' }} />
                <div className="w-4 md:w-5 h-3 md:h-4 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                <div className="w-4 md:w-5 h-3 md:h-4 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                <div className="w-4 md:w-5 h-3 md:h-4 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                {/* Arrow keys cluster */}
                <div className="flex flex-col gap-0.5 ml-1">
                  <div className="w-4 md:w-5 h-1.5 md:h-2 rounded-sm mx-auto" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                  <div className="flex gap-0.5">
                    <div className="w-4 md:w-5 h-1.5 md:h-2 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                    <div className="w-4 md:w-5 h-1.5 md:h-2 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                    <div className="w-4 md:w-5 h-1.5 md:h-2 rounded-sm" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trackpad */}
            <div className="mt-2 mx-auto w-24 md:w-32 h-16 md:h-20 rounded-lg" style={{ background: 'linear-gradient(180deg, #4b5563, #374151)', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05)' }} />
          </div>
        </div>
        
        {/* Laptop shadow */}
        <div className="absolute -bottom-2 left-4 right-4 h-4 bg-black/20 blur-md rounded-full" />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevProject}
        className="absolute left-0 top-[35%] -translate-y-1/2 -translate-x-2 md:-translate-x-6 p-2 md:p-3 bg-gray-700 border border-gray-600 rounded-full hover:bg-gray-600 transition-colors group z-10 shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
      </button>
      
      <button
        onClick={nextProject}
        className="absolute right-0 top-[35%] -translate-y-1/2 translate-x-2 md:translate-x-6 p-2 md:p-3 bg-gray-700 border border-gray-600 rounded-full hover:bg-gray-600 transition-colors group z-10 shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
      </button>

      {/* Project dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
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
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RetroComputer;
