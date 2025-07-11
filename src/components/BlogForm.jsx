import React, { useState } from 'react';
import axios from 'axios';
import RichTextEditor from './RichTextEditor';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    coverImage: '',
    author: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', formData);
      alert('Blog added!');
      setFormData({
        title: '',
        coverImage: '',
        author: '',
        content: ''
      });
    } catch (err) {
      console.error(err);
      alert('Failed to add blog');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-2xl mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold">Add Blog</h2>

      <input name="title" value={formData.title} onChange={handleChange} placeholder="Blog Title" className="w-full p-2 border rounded" required />
      <input name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="Cover Image URL" className="w-full p-2 border rounded" />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border rounded" />

      <RichTextEditor value={formData.content} onChange={handleContentChange} />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Blog</button>
    </form>
  );
};

export default BlogForm;
