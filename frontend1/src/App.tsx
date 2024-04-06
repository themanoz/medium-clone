import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AppBar } from "./components/AppBar";
import Signin from "./pages/Signin";
import { Blogs } from "./pages/Blogs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
