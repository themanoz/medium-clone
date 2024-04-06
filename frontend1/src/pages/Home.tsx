import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/type-writer";
import { Link } from "react-router-dom";

function Home() {
  const words = [
    {
      text: "Enhance",
    },
    {
      text: "your",
    },
    {
      text: "blogging",
    },
    {
      text: "journey",
    },
    {
      text: "with"
    },
    {
      text: "WebOpsify.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[35rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base">
        Discover perspectives that deepen understanding. Share insights on a
        simple, beautiful, collaborative writing platform.
      </p>
      <TypewriterEffect words={words} className="mt-2"/>
      <Button className="w-32 h-10 mt-4">
        <Link to={"/signup"}>Get started</Link>
      </Button>
    </div>
  );
}

export default Home;
