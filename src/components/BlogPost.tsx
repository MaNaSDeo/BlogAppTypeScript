import React from "react";
import { BlogPost as BlogPostType } from "../types";

interface Props {
  post: BlogPostType;
}

const BlogPost: React.FC<Props> = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>
        By {post.author} on {post.date}
      </p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
