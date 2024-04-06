import { BlogCardSkeleton } from "@/components/BlogCardSkeleton";
import { useBlogs } from "../hooks";
import BlogCard from "@/components/BlogCard";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="pt-2">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
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
