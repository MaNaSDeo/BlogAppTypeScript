import React from "react";
import BlogFeed from "./components/BlogFeed";
import BlogEditor from "./components/BlogEditor";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>My Blog App</h1>
      <BlogFeed />
      <BlogEditor />
    </div>
  );
};

export default App;
