import { Circle } from "./BlogCard";

export const BlogSkeletion = () => {
  return (
    <>
      <div role="status" className="animate-pulse mt-1 py-2.5">
        <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
          <div className="flex">
            <div className="h-5 w-5 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className="flex justify-center flex-col pl-2">
              <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="text-md font-thin pt-2">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
          <div className="text-slate-400 text-sm font-normal pt-2">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
