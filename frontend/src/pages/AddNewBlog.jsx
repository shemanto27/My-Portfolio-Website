import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from '../interceptor/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MDEditor from '@uiw/react-md-editor';


const AddNewBlog = () => {

  const API_URL = "/api/blogs/";
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // console.log('category:', category);
  // const categoriesArray = category.split(',').map(cat => cat.trim());
  // console.log('categoriesArray:', categoriesArray);

  // For Editing existing blog
  useEffect(() => {
    if (id) {
      API.get(`${API_URL}${id}/`)
        .then((response) => {
          setTitle(response.data.title);
          setCategory(response.data.categories.join(', '));
          setBody(response.data.body);
          setImagePreview(response.data.cover_image);
        });
    }
  }, [id]);

  // Handle image upload & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);

    if (image) {
      formData.append("cover_image", image);
    }

    const categoriesArray = category.split(',').map(cat => cat.trim());
    categoriesArray.forEach(cat => formData.append("categories", cat));
    console.log(categoriesArray);

    try {
      if (id) {
        await API.put(`${API_URL}${id}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog updated successfully!", { autoClose: 5000 });
        navigate("/admin");
      } else {
        await API.post(API_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog created successfully!", { autoClose: 5000 });
        navigate("/admin");
      }
    } catch (error) {
      toast.error(error.response?.data ? JSON.stringify(error.response.data) : "An error occurred while creating the blog.", { autoClose: 5000 });
    }
  };

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-5">{id ? "Edit Blog" : "Add New Blog"}</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
        {/* Image Upload */}
        <input type="file" className="file-input my-3" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover my-3 rounded" />}

        {/* Title Input */}
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full my-3"
          required
        />

        {/* Category Input */}
        <input
          type="text"
          placeholder="Categories (comma separated)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input input-bordered w-full my-3"
          required
        />

        {/* Body Input */}
        <MDEditor value={body} onChange={setBody} />
      

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-10">
          {id ? "Save Changes" : "Publish Blog"}
        </button>
      </form>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default AddNewBlog;
