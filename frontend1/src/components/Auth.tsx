import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "@/config";
import axios from "axios";

export default function Auth({ type }: { type: string }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [postInputs,setPostInputs] = useState({
    name: "",
    username: "",
    password: ""
  })
  const navigate = useNavigate();

  function showPassword(){
    setPasswordVisible((previousState: any) => !previousState )
  }

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      // alert the user that the request is failed
    }
  }

  return (
    <div className="flex justify-center  items-center pt-4 mt-16">
      <div>
        <Card className="w-[350px]">
          <CardHeader>
            <div className="flex justify-center">
              <div>
                <CardTitle>
                  {type == "signin"
                    ? "Login to your account"
                    : "Create your account"}
                </CardTitle>
                <CardDescription className="pt-2 flex justify-center gap-1">
                  {type == "signin"
                    ? "Don't have an account? "
                    : "Already have an account?"}
                  <Link to={type == "signin" ? "/signup" : "/signin"}>
                    {type == "signin" ? "Signup" : "Signin"}
                  </Link>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {type == "signup" ? (
              <div className="pt-2">
                <Label>Name</Label>
                <Input type="text" placeholder="John Doe" className="mt-2" onChange={(e) => {
                  setPostInputs(() => ({
                    ...postInputs,
                    name: e.target.value,
                  }));
                }}/>
              </div>
            ) : null}
            <div className="pt-2">
              <Label>Username</Label>
              <Input
                type="email"
                placeholder="johndoe@gmail.com"
                className="mt-2"
                onChange={(e) => {
                  setPostInputs(() => ({
                    ...postInputs,
                    username: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex flex-col pt-3">
              <Label>Password</Label>
              <div className="flex border rounded-lg mt-3">
                <Input type={isPasswordVisible ? "text" : "password"} placeholder="123456" className="border-0" onChange={(e) => {
                  setPostInputs(() => ({
                    ...postInputs,
                    password: e.target.value,
                  }));
                }} />
                <button onClick={showPassword} className="inset-y-0 right-0 flex items-center px-4 text-gray-600">
                {isPasswordVisible ? (
                    <EyeOff />
                ) : (
                  <Eye />
                ) }
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={sendRequest}>
              {type == "signin" ? "Sign In" : "Sign up"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
