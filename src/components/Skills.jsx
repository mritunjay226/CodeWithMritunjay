import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiMongodb , SiPython , SiFigma , SiGit
} from "react-icons/si";
import { motion } from "framer-motion";
import Section from "./Section";

const skills = [
  { icon: <SiHtml5 className="text-4xl text-orange-500" />, label: "HTML" },
  { icon: <SiCss3 className="text-4xl text-blue-500" />, label: "CSS" },
  { icon: <SiJavascript className="text-4xl text-yellow-400" />, label: "JavaScript" },
  { icon: <SiReact className="text-4xl text-cyan-400" />, label: "React" },
  { icon: <SiNodedotjs className="text-4xl text-green-600" />, label: "Node.js" },
  { icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />, label: "Next.js" },
  { icon: <SiTailwindcss className="text-4xl text-sky-400" />, label: "Tailwind CSS" },
  { icon: <SiBootstrap className="text-4xl text-purple-600" />, label: "Bootstrap" },
  { icon: <SiMongodb className="text-4xl text-green-500" />, label: "MongoDB" },
  { icon: <SiPython className="text-4xl text-yellow-700" />, label: "Python" },
  { icon: <SiFigma className="text-4xl text-red-500" />, label: "Figma" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            {skill.icon}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
