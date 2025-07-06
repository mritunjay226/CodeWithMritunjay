import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef();
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef();

  const currentPreview = project?.previews?.[videoIndex];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target === overlayRef.current) onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (project) setVideoIndex(0);
  }, [project]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.load();
      video.play().catch(() => {});
    }
  }, [videoIndex]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-2xl font-bold z-10 text-gray-600 hover:text-red-500 transition"
            >
              &times;
            </button>

            {/* Video */}
            {currentPreview && (
              <video
                key={videoIndex}
                ref={videoRef}
                muted
                autoPlay
                playsInline
                className="w-full h-56 sm:h-64 md:h-80 object-cover"
                poster={currentPreview.poster}
              >
                <source src={currentPreview.src} type="video/mp4" />
              </video>
            )}

            <div className="p-5 sm:p-6">
              {/* Thumbnails only if multiple previews */}
              {project.previews.length > 1 && (
                <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-thin">
                  {project.previews.map((preview, i) => (
                    <img
                      key={i}
                      src={preview.poster || preview.src}
                      onClick={() => setVideoIndex(i)}
                      className={`h-16 w-24 object-cover rounded cursor-pointer border-2 transition shrink-0 ${
                        i === videoIndex
                          ? "border-blue-500"
                          : "border-transparent hover:border-gray-400"
                      }`}
                      alt={`Preview ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Title & Description */}
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4 text-sm">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-800 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
