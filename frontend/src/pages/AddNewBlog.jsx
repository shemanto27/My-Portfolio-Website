import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddNewBlog = () => {

  const API_URL = "/api/blogs/";
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


  // For Editing existing blog
  useEffect(() => {
    if (id) {
      axios
        .get(`${API_URL}${id}/`)
        .then((response) => {
          setTitle(response.data.title);
          setCategory(response.data.category);
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
    formData.append("category", category);
    formData.append("body", body);

    if (image) {
      formData.append("cover_image", image);
    }

    try {
      if (id) {
        await axios.put(`${API_URL}${id}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        navigate("/admin");
      } else {
        await axios.post(API_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error creating blog", error.response?.data || error.message);
      alert(JSON.stringify(error.response?.data)); // Show error response in alert
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

        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full my-3"
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="React">React</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Deep Learning">Deep Learning</option>
        </select>

        {/* Body Input */}
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="textarea"
          placeholder="Blog Body"
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-10">
          {id ? "Save Changes" : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
