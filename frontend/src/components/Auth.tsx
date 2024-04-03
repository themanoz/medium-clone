import { SignupInput } from "@themanoz/medium-common";
import { ChangeEvent, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

function Auth({type} : {type : "signup" | "signin"}) {
    const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest(){
    try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = response.data;
        localStorage.setItem("token",jwt);
        navigate("/blogs");
    } catch (error) {
        // alert the user that the request is failed
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
            <div className="px-10">
                <div className="text-3xl font-extrabold">
                    {type === "signin" ? "Login to your account" : "Create an account"}
                </div>
                <div className="text-md font-medium text-slate-400">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                    <Link className="pl-1 underline" 
                    to={type === "signin" ? "/signup" : "/signin"} >
                        {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
            </div>
            <div className="pt-4">
                {type === "signup" ? <LabelledInput
                    label="Name"
                    placeholder="Manoj Kumar"
                    onChange={(e) => {
                    setPostInputs(() => ({
                        ...postInputs,
                        name: e.target.value,
                    }));
                    }}
                /> : null}
                <LabelledInput
                    label="Username"
                    placeholder="manoj@gmail.com"
                    onChange={(e) => {
                    setPostInputs(() => ({
                        ...postInputs,
                        username: e.target.value,
                    }));
                    }}
                />
                <LabelledInput
                    label="Password"
                    placeholder="********"
                    type={"password"}
                    onChange={(e) => {
                    setPostInputs(() => ({
                        ...postInputs,
                        password: e.target.value,
                    }));
                    }}
                />
                <button onClick={sendRequest} type="button" className="text-white bg-gray-800
                hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 
                  py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                dark:focus:ring-gray-700 dark:border-gray-70 mt-3 w-full">{type === "signup" ? "Sign up" : "Sign in"}</button>
            </div>
          </div>
          {/* {JSON.stringify(postInputs)} */}
          
        </div>
      </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <>
      <div>
        <label className="block mb-2 text-md font-semibold text-black pt-2">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}
export default Auth;
