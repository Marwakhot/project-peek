import { motion } from "framer-motion";
import HangingIDCard from "@/components/HangingIDCard";
import RetroComputer from "@/components/RetroComputer";

const projects = [
  { 
    title: "Automated Bug Triage System", 
    description: "Solves slow bug assignment by using NLP and ML to automatically predict the responsible team and priority for each bug report, handling bulk predictions via a Streamlit dashboard.", 
    techStack: "Python • NLP (TF-IDF) • LightGBM • Flask API • Streamlit • Docker",
    color: "bg-funky-pink", 
    github: "#" 
  },
  { 
    title: "AI Safety Audit: Credit Fairness", 
    description: "Fixed the 'black box' problem in a loan-approval AI by finding hidden biases and creating a safety roadmap to prevent legal and ethical risks.", 
    techStack: "Python • Fairlearn • Scikit-learn • NIST AI RMF",
    color: "bg-funky-teal", 
    github: "#" 
  },
  { 
    title: "Portfolio Capital Optimization", 
    description: "Prevents extreme portfolio losses by calculating risk-adjusted capital requirements for a $1,000,000 portfolio, recommending a $21,578 daily capital reserve using 3 VaR models.", 
    techStack: "Python • Pandas • NumPy • SciPy • Monte Carlo Simulation",
    color: "bg-funky-yellow", 
    github: "#" 
  },
  { 
    title: "PEAR Internships Platform", 
    description: "A full-stack web application that connects students and companies by streamlining internship postings, applications, and application tracking through role-based dashboards.", 
    techStack: "HTML • JavaScript • CSS • Node.js • MySQL • REST APIs",
    color: "bg-funky-orange", 
    github: "#" 
  },
  { 
    title: "Robot Navigation Using AI", 
    description: "Solves autonomous navigation challenges in a 10m × 10m simulated arena by implementing Fuzzy Logic, Behavior Trees, and Q-Learning for obstacle avoidance.", 
    techStack: "Python • Fuzzy Logic • Behavior Trees • Reinforcement Learning (Q-Learning)",
    color: "bg-funky-purple", 
    github: "#" 
  },
  { 
    title: "Brain Brew", 
    description: "An AI-powered platform that tackles passive PDF learning by using AI to ask thought-provoking questions, making students think critically with 4 adaptive difficulty levels.", 
    techStack: "React • TypeScript • Supabase • PostgreSQL • Three.js • Tailwind CSS",
    color: "bg-funky-green", 
    github: "#" 
  },
  { 
    title: "Stratify", 
    description: "Helps automotive companies manage the transition to EVs by providing real-time KPI tracking, sustainability monitoring, and operational insights to optimize resource use.", 
    techStack: "System Design • UML Modeling",
    color: "bg-funky-pink", 
    github: "#" 
  },
  { 
    title: "Quantopian Failure Analysis", 
    description: "Explains the failure of a $48M fintech startup by identifying weaknesses in scope control, risk monitoring, and stakeholder communication using PMBOK principles.", 
    techStack: "PMBOK Framework • Case Study Research",
    color: "bg-funky-teal", 
    github: "#" 
  },
];

const currentActivities = [
  { 
    title: "Data Science Intern @ Alamar", 
    description: "Building ML models for predictive analytics, creating data visualization dashboards, and developing automated reporting systems using Python and modern data stack.",
    accent: "bg-funky-orange/10 border-funky-orange/30",
    textColor: "text-funky-orange"
  },
  { 
    title: "CS Student @ UOW Dubai", 
    description: "Pursuing B.Sc. in Computer Science with a major in AI & Big Data. Coursework includes machine learning, data mining, distributed systems, and statistical analysis.",
    accent: "bg-funky-teal/10 border-funky-teal/30",
    textColor: "text-funky-teal"
  },
];

const pastActivities = [
  { 
    title: "GITEX Representative @ dreamloop.ai",
    description: "Demonstrated AI products at GITEX Global 2025, engaged with potential clients and partners, and presented technical capabilities to industry stakeholders.",
    accent: "bg-funky-purple/10 border-funky-purple/30",
    textColor: "text-funky-purple"
  },
  { 
    title: "School Headgirl @ NIMS",
    description: "Led student body initiatives, coordinated school-wide events, served as liaison between students and administration, and managed prefect council operations.",
    accent: "bg-funky-pink/10 border-funky-pink/30",
    textColor: "text-funky-pink"
  },
  { 
    title: "Director General @ NIMSMUN",
    description: "Directed Model United Nations conference operations, oversaw committee formations, managed delegate training programs, and coordinated logistics for 200+ participants.",
    accent: "bg-funky-yellow/10 border-funky-yellow/30",
    textColor: "text-funky-yellow"
  },
  { 
    title: "High School Graduate @ NIMS Dubai",
    description: "Completed high school with distinction in 2024, specializing in science and mathematics streams with participation in academic competitions.",
    accent: "bg-funky-green/10 border-funky-green/30",
    textColor: "text-funky-green"
  },
];

const Index = () => {

  return (
    <div className="bg-background">
      {/* About Me Section */}
      <section className="min-h-screen flex items-center px-6 overflow-hidden">
        <div className="container mx-auto flex items-center justify-between">
          {/* Text content - left aligned */}
          <div className="max-w-2xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-outfit font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi I'm <span className="text-funky-pink">Marwa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl md:text-2xl text-muted-foreground font-space leading-relaxed"
            >
              I could write a long "About Me," but honestly the projects below say it better. Go take a look.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-funky-teal text-background font-outfit font-semibold rounded-lg hover:bg-funky-teal/90 transition-colors"
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 border border-funky-pink text-funky-pink font-outfit font-semibold rounded-lg hover:bg-funky-pink/10 transition-colors"
              >
                Experience
              </a>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-8 text-3xl text-funky-teal"
            >
              ↓
            </motion.div>
          </div>

          {/* Hanging ID Card - moved more to center */}
          <div className="hidden md:block pt-32 -ml-64">
            <HangingIDCard />
          </div>
        </div>
      </section>

      {/* Projects Section - Retro Computer */}
      <section id="projects" className="py-24 mt-72">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Title */}
            <motion.div 
              className="lg:w-1/3 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-outfit font-bold text-foreground leading-tight">
                look into my{" "}
                <span className="text-funky-teal">projects</span>
              </h2>
              <div className="mt-4 h-1 w-24 bg-funky-yellow rounded-full mx-auto lg:mx-0" />
              <p className="mt-6 text-muted-foreground font-space">
                Use the arrows to browse through my work
              </p>
            </motion.div>

            {/* Right side - Retro Computer */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <RetroComputer projects={projects} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section - Light Boxes */}
      <section id="experience" className="py-24 mt-64">
        <div className="container mx-auto px-6">
          {/* Currently */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground mb-8">
              Right now, I'm...
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentActivities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl border ${item.accent} backdrop-blur-sm transition-all duration-300`}
                >
                  <h4 className={`text-lg font-outfit font-semibold ${item.textColor} mb-2`}>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground font-space text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground mb-8">
              Things I've done...
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pastActivities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-xl border ${item.accent} backdrop-blur-sm transition-all duration-300`}
                >
                  <h4 className={`text-base font-outfit font-semibold ${item.textColor} mb-2`}>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground font-space text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-32" />
    </div>
  );
};

export default Index;
