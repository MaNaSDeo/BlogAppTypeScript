import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { BlogPost as BlogPostType } from "../types";
import { fakeBlogPosts } from "../utils/fakeData";
import { getUserLocation } from "../utils/locationUtils";

const BlogFeed: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [userLocation, setUserLocation] = useState<string>("");

  useEffect(() => {
    const location = getUserLocation();
    setUserLocation(location);
    const filteredPosts = fakeBlogPosts.filter(
      (post) => post.location === location
    );
    setPosts(filteredPosts);
  }, []);

  return (
    <div className="blog-feed">
      <h1>Blog Feed (Location: {userLocation})</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogFeed;
