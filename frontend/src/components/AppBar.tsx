import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const token = localStorage.getItem("token");

  return (
    <div className="border-b flex justify-between px-10 py-4 ">
      <div className="font-semibold text-2xl flex flex-col justify-center">
        <Link to={"/blogs"}>Medium</Link>
      </div>
      <div>
        {token ? (
          <>
            <Link to={"/publish"}>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 
              font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                New
              </button>
            </Link>
            <Avatar name="Manoj Kumar" />
            <button
              onClick={handleLogout}
              className="focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 
                font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to={"/signup"}>
            <button
              className="focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 
              font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
            >
              Get Started
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default AppBar;
