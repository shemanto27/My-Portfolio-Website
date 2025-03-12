import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const API_URL = `/api/blogs/${id}/`;

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setBlog(response.data)})
      .catch((error) => console.error(error));
  }, [id]);

  if (!blog) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <small className="text-gray-500">Published on: {new Date(blog.created_at).toDateString()}</small>
      <p className="mt-4">{blog.body}</p>
    </div>
  );
}

export default BlogPage;
