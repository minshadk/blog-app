import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch(" http://localhost:8000/blogs");

  const handleClickAgain = (name) => {
    console.log("hellow" + name);
  };

  // const handleDelete = (id) => {
  //   // function checkDelete(blog) {
  //   //   return blog.id !== id;
  //   // }
  //   // setBlogs(blogs.filter(checkDelete));

  //   const newBlogs = blogs.filter((blog) => blog.id !== id);

  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isLoading && <div>Loading ...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
