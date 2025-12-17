import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  color: string;
  index: number;
}

const ProjectCard = ({ title, description, color, index }: ProjectCardProps) => {
  return (
    <motion.div
      className={`${color} rounded-3xl p-6 h-56 flex flex-col justify-between shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer border-2 border-foreground/10 backdrop-blur-none relative overflow-hidden group`}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-foreground/5 rounded-full" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-foreground/5 rounded-full" />
      
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <span className="text-xs font-space font-bold text-foreground/50 tracking-widest">PROJECT</span>
        <span className="text-sm font-space font-bold text-foreground/80 ml-2">0{index + 1}</span>
        <h3 className="text-2xl font-bold font-outfit text-foreground mt-2 group-hover:text-funky-purple transition-colors">
          {title}
        </h3>
      </div>
      
      <div className="relative z-10">
        <p className="text-foreground/70 font-space text-sm mb-3">{description}</p>
        <div className="flex items-center gap-2">
          <span className="text-xs font-space text-foreground/50 group-hover:text-funky-teal transition-colors">
            View Project →
          </span>
        </div>
      </div>
      
      {/* Tech dots decoration */}
      <div className="absolute bottom-4 right-4 flex gap-1">
        <div className="w-2 h-2 rounded-full bg-funky-pink/60" />
        <div className="w-2 h-2 rounded-full bg-funky-teal/60" />
        <div className="w-2 h-2 rounded-full bg-funky-yellow/80" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
