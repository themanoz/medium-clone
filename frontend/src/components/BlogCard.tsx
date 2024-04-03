import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex mt-2">
          <div className="flex justify-center flex-col">
            {" "}
            <Avatar name={authorName} />{" "}
          </div>
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin pt-2">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm font-normal pt-2">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>
      </div>
    </Link>
  );
}

export function Circle() {
  return (
    <>
      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
    </>
  );
}

export function Avatar({ name }: { name: string }) {
  return (
    <>
      <div
        className="relative inline-flex items-center justify-center w-6 h-6
       overflow-hidden bg-gray-100 rounded-full border border-slate-200"
      >
        <span className="text-xs font-medium text-black-600 ">{name[0]}</span>
      </div>
      
    </>
  );
}

export default BlogCard;
