import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../services/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogPosts();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <div>
      <h1>Community Blogs</h1>
      {blogs.map(blog => (
        <div key={blog._id} style={{ marginBottom: '20px' }}>
          <h2>{blog.title}</h2>
          {blog.feature_image && (
            <img 
              src={blog.feature_image} 
              alt={blog.title} 
              style={{ width: '100%', height: 'auto' }} 
            />
          )}
          <p>{blog.content}</p>
          <small>By: {blog.author}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
