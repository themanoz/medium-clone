import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";

export const Home = () => {
  return (
    <>
      <div>
        <AppBar />
        <div className="h-screen flex justify-center flex-col">
          <div className="flex justify-center">
            <div>
              <div className="text-4xl font-semibold">
                Human stories and ideas
              </div>
              <div className="text-2xl font-normal mt-3 text-slate-400">
                Discover perspectives that deepen understanding. Share insights
                on a simple, beautiful, collaborative writing platform.
              </div>
              <div className="mt-3">
                <Link to={"/signup"}>
                  <button
                    className="focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 
                    font-medium rounded-full text-md px-5 py-2.5 me-2 mb-2"
                  >
                    Start Writing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
