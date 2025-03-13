import React, { useState } from "react";
import axios from "axios";


const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setbody] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


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
    formData.append("category", category);
    formData.append("body", body);
    formData.append("cover_image", image);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/blogs/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("response:", res.data);
    } catch (error) {
      console.error("Error creating blog", error.response?.data || error.message);
      alert(JSON.stringify(error.response?.data));  // Show error response in alert
    }
  };

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-5">Create a New Blog</h1>

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

        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full my-3"
          required
        >
          <option value="" disabled>Select a category</option>
          <option value="React">React</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Deep Learning">Deep Learning</option>
        </select>
  
          {/* body Input */}
        <textarea value={body}
          onChange={(e) => setbody(e.target.value)} className="textarea" placeholder="Blog Body"></textarea>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-10">
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
