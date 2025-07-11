import Section from "./Section";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaComment,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <Section id="contact" title="Contact Me">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={contactVariants}
        className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10"
      >
        {/* Contact Form */}
        <div className="flex-1 backdrop-blur-lg bg-white/40 dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-black dark:text-white">
            Let’s work together!
          </h3>

          <form onSubmit={handleSubmit} className="grid gap-5">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="pl-10 w-full py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="pl-10 w-full py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaComment className="absolute left-3 top-3.5 text-gray-500" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="pl-10 w-full py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg">
            Connect with me
          </p>
          <div className="flex gap-6 text-3xl text-gray-700 dark:text-gray-300">
            <a
              href="mailto:mritunjay@example.com"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/mritunjay226"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mritunjay-mishra-2275b3373"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/mritunjay._mishra"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
