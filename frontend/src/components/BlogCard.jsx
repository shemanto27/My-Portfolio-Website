import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({id, title = "Untitled", body = "No content", created_at = "Unknown date" }) {
  return (
    <>
      <Link to={`/blog/${id}`} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{created_at}</div>
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
