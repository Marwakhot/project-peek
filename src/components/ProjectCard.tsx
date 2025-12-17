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
      className={`${color} rounded-2xl p-6 h-64 flex flex-col justify-between shadow-card hover:shadow-hover transition-shadow duration-300`}
    >
      <div>
        <span className="text-sm font-space text-foreground/60">0{index + 1}</span>
        <h3 className="text-2xl font-bold font-outfit text-foreground mt-2">{title}</h3>
      </div>
      <p className="text-foreground/70 font-space">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
