import React from 'react'
import { Link } from 'react-router-dom'
import { MdDateRange } from "react-icons/md";
import { FaTags } from "react-icons/fa";

function BlogCard({id, categories, cover_image, title = "Untitled", created_at = "Unknown date"}) {
  
  return (
    <>
      <Link to={`/blog/${id}`} className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img 
            src={cover_image}
            alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#619ccd] text-2xl font-bold">
            {title}
          </h2>
          <div className="card-actions justify-end text-gray-600 text-bs flex flex-row items-center">
          <MdDateRange className="text-[#E85235]"/>
            <p>{new Date(created_at).toDateString()}</p>
            <FaTags className="text-[#E85235]"/>
            {categories.map((category, index) => (
              <div key={index} className="flex items-center">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  )
}

export default BlogCard
