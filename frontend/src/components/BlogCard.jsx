import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({id, cover_image, title = "Untitled", body = "No content", created_at = "Unknown date" }) {
  console.log("BlogCard:", id, cover_image, title, body, created_at);
  return (
    <>
      <Link to={`/blog/${id}`} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img 
      src={cover_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      {/* <div className="badge badge-secondary">{created_at}</div> */}
    </h2>
    <p>{body}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</Link>
    </>
  )
}

export default BlogCard
