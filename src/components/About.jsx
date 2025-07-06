import Section from "./Section";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  }),
};

export default function About() {
  return (
    <Section id="about" title="About Me">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {/* Bio Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Passionate Full-Stack Developer
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4 text-center md:text-left">
            I'm Mritunjay, a full-stack web developer specializing in building fast,
            responsive and user-friendly websites using modern technologies like React,
            Tailwind CSS, Node.js, and MongoDB.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center md:text-left">
            I love clean code, solving problems creatively, and building real-world apps
            that make an impact.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mt-6">
            <a
              href="https://github.com/mritunjay226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transform transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mritunjay-mishra-2275b3373"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transform transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            
            <a
              href="https://instagram.com/mritunjay._mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 dark:hover:text-pink-400 transform transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Highlight Stats */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { value: "3+", label: "Years Experience", color: "text-blue-600 dark:text-blue-400" },
            { value: "5+", label: "Projects Completed", color: "text-green-600 dark:text-green-400" },
            { value: "7+", label: "Technologies Mastered", color: "text-purple-600 dark:text-purple-400" },
            { value: "95%", label: "Client Satisfaction", color: "text-red-500 dark:text-red-400" },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow text-center hover:shadow-lg transition-all duration-300"
            >
              <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{card.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
