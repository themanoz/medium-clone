import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { BlogSkeletion } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <AppBar />
      <div className="flex justify-center">
        <div>
          <BlogSkeletion />
          <BlogSkeletion />
          <BlogSkeletion />
          <BlogSkeletion />
        </div>
      </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"Dec 12, 2020"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
