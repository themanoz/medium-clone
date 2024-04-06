import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog{
    content: string;
    title: string;
    id: number;
    author: {
        name: string;
    }
}

export const useBlogs = () => {
const [loading, setLoading] = useState(true);
const [blogs, setBlogs] = useState<Blog[]>([]);
const navigate = useNavigate();

useEffect(() => {
    const token = localStorage.getItem("token");
    // if(!token) {
    //     navigate("/signup");
    //     return;
    // }

    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((response) => {
    setBlogs(response.data.blogs);
    setLoading(false);
    });
}, [navigate]);

return {
    loading,
    blogs,
};
};

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/signup");
            return;
        }
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}