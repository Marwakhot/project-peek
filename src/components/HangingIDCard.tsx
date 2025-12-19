import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
const HangingIDCard = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {/* String/Lanyard from top - extends off screen */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[500px] flex flex-col items-center">
        {/* Long string that goes off screen */}
        <motion.div
          className="w-1.5 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/60 rounded-full"
          style={{ height: "500px" }}
          animate={{
            scaleX: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ID Card clip */}
      <motion.div
        className="relative"
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top center" }}
      >
        {/* Metal clip */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-sm shadow-md z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-sm" />
        </div>

        {/* ID Card Body */}
        <motion.div
          className="w-60 h-80 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-hover overflow-visible border border-gray-200 relative"
          animate={{
            rotateY: [-1, 1, -1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Header stripe */}
          <div className="h-20 bg-gradient-to-r from-funky-pink via-funky-orange to-funky-teal relative overflow-hidden rounded-t-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: [-200, 200] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </div>

          {/* Photo placeholder - positioned above header */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-funky-teal to-funky-pink border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-4xl font-outfit font-bold text-white">M</span>
            </div>
          </div>

          {/* Name */}
          <div className="text-center mt-16 px-4">
            <h3 className="font-outfit font-bold text-foreground text-xl">Marwa</h3>
            <p className="font-space text-sm text-muted-foreground mt-2">CS Student</p>
            <p className="font-space text-sm text-funky-pink mt-1">AI & Big Data</p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3 mt-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-funky-teal/20 to-funky-pink/20 flex items-center justify-center hover:from-funky-teal/40 hover:to-funky-pink/40 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-funky-teal transition-colors" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-funky-teal/20 to-funky-pink/20 flex items-center justify-center hover:from-funky-teal/40 hover:to-funky-pink/40 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-foreground/70 group-hover:text-funky-pink transition-colors" />
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex gap-1 justify-center">
              <div className="w-2 h-2 rounded-full bg-funky-pink/40" />
              <div className="w-2 h-2 rounded-full bg-funky-orange/40" />
              <div className="w-2 h-2 rounded-full bg-funky-teal/40" />
            </div>
            {/* Barcode effect */}
            <div className="mt-2 flex justify-center gap-px">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="bg-foreground/20"
                  style={{
                    width: Math.random() > 0.5 ? "2px" : "1px",
                    height: "12px",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HangingIDCard;