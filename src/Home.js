import React, { useState } from "react";

import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Welcome to REACT",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "React is simple",
      body: "lorem ipsum...",
      author: "mario",
      id: 2,
    },
    { title: "Power full", body: "lorem ipsum...", author: "mario", id: 3 },
    { title: "Pene Safe", body: "lorem ipsum...", author: "mario", id: 4 },
  ]);

  const handleClickAgain = (name) => {
    console.log("hellow" + name);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
