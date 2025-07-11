import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    githubLink: '',
    liveDemo: '',
    techStack: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        techStack: formData.techStack.split(',').map(s => s.trim())
      };
      await axios.post('http://localhost:5000/api/projects', payload);
      alert('Project added!');
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        githubLink: '',
        liveDemo: '',
        techStack: ''
      });
    } catch (err) {
      console.error(err);
      alert('Failed to add project');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-xl mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold">Add Project</h2>

      <input name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" className="w-full p-2 border rounded" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" />
      <input name="githubLink" value={formData.githubLink} onChange={handleChange} placeholder="GitHub Link" className="w-full p-2 border rounded" />
      <input name="liveDemo" value={formData.liveDemo} onChange={handleChange} placeholder="Live Demo Link" className="w-full p-2 border rounded" />
      <input name="techStack" value={formData.techStack} onChange={handleChange} placeholder="Tech Stack (comma separated)" className="w-full p-2 border rounded" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Project</button>
    </form>
  );
};

export default ProjectForm;
