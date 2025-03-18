import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdDateRange } from "react-icons/md";
import { FaTags } from "react-icons/fa";

import MDEditor from '@uiw/react-md-editor';

function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const API_URL = `/api/blogs/${id}/`;

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setBlog(response.data)})
      .catch((error) => console.error(error));
  }, [id, API_URL]);
  // console.log(blog);

  if (!blog) return <progress className="progress progress-secondary w-56"></progress>

  return (
    <div className="container mx-auto max-w-2xl py-10" data-color-mode="light">
      <img src={blog.cover_image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-5xl font-bold text-[#222222] my-5">{blog.title}</h1>
      <h2 className="text-gray-500 flex flex-row items-center gap-3">by Shemanto Sharkar <span className="flex flex-row items-center gap-2"><MdDateRange className="text-[#E85235]"/> Published on: {new Date(blog.created_at).toDateString()}</span></h2>
      <div className="flex space-x-2 mt-2 justify-start items-center flex-row">
        <FaTags className="text-[#E85235]"/>
        {blog.category_objects.map((category, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
            {category.name}
          </span>
        ))}
      </div>
      <MDEditor.Markdown source={blog.body} style={{ whiteSpace: 'pre-wrap' }} className="my-5"/>
    </div>
  );
}

export default BlogPage;
