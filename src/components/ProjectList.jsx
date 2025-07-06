export default function ProjectList({ projects, onProjectClick }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => onProjectClick(project)}
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded mb-3"
          />
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}
