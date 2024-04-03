import axios from "axios";
import AppBar from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-4">
        <div className="max-w-screen-lg w-full ">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="text-black block w-full p-5 text-2xl outline-none border rounded-lg"
            placeholder="Title"
          />
          <TextEditor onChange={(e) => {
            setContent(e.target.value)
          }} />
          <button
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content,
              },{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
              });
              navigate(`/blog/${response.data.id}`)
            }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5  text-sm font-medium text-center
        text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange} : {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <>
      <form>
        <div className="w-full mb-4 rounded-lg pt-5 mt-5 border ">
          <div className="px-4 py-2 bg-white rounded-b-lg">
            <label className="sr-only">Publish post</label>
            <textarea
            onChange={onChange}
              id="editor"
              rows={8}
              className="block w-full px-0 text-black bg-white outline-none text-2xl"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </form>
    </>
  );
}
