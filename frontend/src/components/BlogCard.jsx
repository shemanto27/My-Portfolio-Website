import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({id, cover_image, title = "Untitled", created_at = "Unknown date", categories = [] }) {
  
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
          <div className="card-actions justify-end text-gray-600 text-bs">
            <p>{created_at}</p>
            {categories && categories.map((category, index) => (
              <div key={index} className="badge badge-outline">{category}</div>
            ))}
          </div>
        </div>
      </Link>
    </>
  )
}

export default BlogCard
