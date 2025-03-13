import React, {useEffect, useState} from 'react'
import BlogCard from './BlogCard'
import axios from 'axios'


function BlogsCardsSection() {

    const [blogs, setBlogs] = useState([]);
    const API_URL = '/api/blogs/';


    useEffect(() => {
        axios
        .get(API_URL)
        .then(response => {
            setBlogs(response.data);
        })
        .catch(error => {
            console.error(error);})
    }, [])



  return (
    <>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5'>
    {blogs.length > 0 ? (
  blogs.map((blog, index) => {
    return <BlogCard key={blog.id || index} id={blog.id} cover_image={blog.cover_image} title={blog.title} body={blog.body} created_at={blog.created_at} />;
  })
) : (
  <div className='text-center'>No blogs found</div>
)}

    </div>
      
    </>
  )
}

export default BlogsCardsSection
