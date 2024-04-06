import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <>
      <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 p-4">
          <div className="flex items-center gap-2">
            <div>
              <Avatar>
                <AvatarImage src="data:image/jpeg;base64,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"></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="font-thin">{authorName}</div>
            <div className="w-1 h-1 rounded-full bg-slate-400"></div>
            <div className="text-slate-400 font-thin">{publishedDate}</div>
          </div>
          <div className="pt-3">
            <div className="text-2xl font-semibold">{title}</div>
            <div className="w-full pt-2 font-thin">{content.slice(0, 100) + "..."}</div>
            <div className="text-slate-400 text-sm font-medium pt-2 px-1">{`${Math.ceil(content.length / 100)} min read`}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogCard;
