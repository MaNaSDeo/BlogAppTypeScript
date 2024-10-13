import React, { useState } from "react";
import { BlogPost } from "../types";
import { getUserLocation } from "../utils/locationUtils";

const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      content,
      author: "Current User", // In a real app, this would come from authentication
      date: new Date().toISOString().split("T")[0],
      location: getUserLocation(),
    };
    console.log("New post created:", newPost);
    // In a real app, this would be sent to the backend
    setTitle("");
    setContent("");
  };

  return (
    <div className="blog-editor">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default BlogEditor;
