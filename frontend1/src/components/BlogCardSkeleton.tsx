import { Skeleton } from "@/components/ui/skeleton";

export const BlogCardSkeleton = () => {
  return (
    <>
      <div className="p-4 px-10 pt-3 w-screen max-w-screen-md cursor-pointer">
        <div className="flex items-center gap-2">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-[180px]" />
        </div>
        <div className="pt-4">
          <div className="space-y-4">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[700px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </div>
    </>
  );
};
