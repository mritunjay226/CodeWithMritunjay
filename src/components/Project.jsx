import { useState, useEffect, lazy, Suspense } from "react";
import Section from "./Section";

// Lazy load the modal
const ProjectModal = lazy(() => import("./ProjectModal"));

// Assets
import ecommerceVideo from "../assets/Projects/EcomerceVid.mp4";
import ecommerceMobileVideo from "../assets/Projects/EcomerceMobileVid.mp4";
import blogVideo from "../assets/Projects/Project2.webp";
import AuthSysImage from "../assets/Projects/Project2.webp";
import portfolioImg2 from "../assets/Projects/Project3.webp";
import EccomImg from "../assets/Projects/Project4.webp";
import EccomImg2 from "../assets/Projects/Project4Thumb.webp";
import portfolioImg3 from "../assets/Projects/Project5.webp";
import ProductManagementImg from "../assets/Projects/Project6.webp";
import ProductManagementImg2 from "../assets/Projects/Project6b.webp";
import BroTalk from "../assets/Projects/BroTalk.mp4";
import BroTalkImg from "../assets/Projects/Bot.jpg";
import Project7 from "../assets/Projects/Project7.webp";

const allProjects = [
  {
    title: "E-Commerce Store",
    description: "Full-stack shopping site with login, product pages, cart, and admin dashboard.",
    previews: [
      { src: ecommerceVideo, poster: EccomImg },
      { src: ecommerceMobileVideo, poster: EccomImg2 }
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://your-ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce-app"
  },
  {
    title: "Full Stack Authentication System",
    description: "Dynamic blog platform with rich text editor, categories, and admin panel.",
    previews: [
      { src: blogVideo, poster: AuthSysImage }
    ],
    tech: ["Next.js", "MongoDB", "Tailwind"],
    liveLink: "https://your-blog.com",
    githubLink: "https://github.com/yourusername/blog-cms"
  },
  {
    title: "Inventory Management System",
    description: "Inventory dashboard with product management and analytics.",
    previews: [
      { src: "", poster: ProductManagementImg },
      { src: "", poster: ProductManagementImg2 },
    ],
    tech: ["React", "Tailwind", "Vite"],
    liveLink: "#",
    githubLink: "https://github.com/yourusername/inventory-app"
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio with smooth animations and dark mode.",
    previews: [
      { src: "", poster: portfolioImg2 },
    ],
    tech: ["React", "Tailwind", "Vite"],
    liveLink: "#",
    githubLink: "https://github.com/yourusername/portfolio"
  },
  {
    title: "BroTalk - ChatBot",
    description: "ChatBot powered by OpenAI with smooth UI and animations.",
    previews: [
      { src: "", poster: BroTalkImg },
      { src: BroTalk, poster: portfolioImg2 },
      { src: "", poster: Project7 },
    ],
    tech: ["React", "Tailwind", "Vite", "OpenAI", "Node.js", "Firebase"],
    liveLink: "#",
    githubLink: "https://github.com/yourusername/brotalk"
  },
  {
    title: "Second Portfolio",
    description: "Another creative portfolio concept.",
    previews: [
      { src: "", poster: portfolioImg3 },
    ],
    tech: ["React", "Tailwind", "Vite"],
    liveLink: "#",
    githubLink: "https://github.com/yourusername/portfolio2"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 640);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedProjects = isMobile && !showAll
    ? allProjects.slice(0, 2)
    : allProjects;

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer border border-gray-300 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white dark:bg-gray-900"
          >
            <img
              src={project.previews?.[0]?.poster || project.previews?.[0]?.src}
              alt={project.title}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-800 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button (Mobile Only) */}
      {isMobile && !showAll && allProjects.length > 2 && (
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      <Suspense
        fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-white opacity-80">Loading preview...</p>
            </div>
          </div>
        }
      >
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Suspense>
    </Section>
  );
}
