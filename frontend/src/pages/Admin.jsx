import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Admin() {
    const [blogs, setBlogs] = useState([]);
    const API_URL = '/api/blogs/';

    useEffect(() => {
        axios
        .get(API_URL)
        .then(response =>{
            setBlogs(response.data);
            console.log(blogs);
        })
        .catch(error =>{
            console.error(error);
        })  }, [])

    function deleteBlog(id){
        axios
        .delete(`${API_URL}${id}/`)
        .then(response =>{
            console.log(response.data);
        })
        .catch(error =>{
            console.error(error);
        })
        setBlogs(blogs.filter(blog => blog.id !== id));
    }


  return (
    <>
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    { /* Page content here */}

    {
        blogs.length > 0 ? (
            blogs.map((blog, index) =>{
                return <div key={blog.id || index} className="card bg-base-100 card-xs shadow-sm my-5 px-5 py-5 gap-3 flex flex-row items-center justify-center">
                    <p className="mr-3">{blog.title}</p>
                    <p className="mr-3">{blog.created_at}</p>
                    <button className='btn btn-error mr-3' onClick={() => deleteBlog(blog.id)}>Delete</button>
                    <button className='btn btn-accent'>Update</button>
                </div>
            })
        ) : (

            <div className='text-center'>No blogs found</div>
        )
    }

    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
      <li><a>Blogs</a></li>
      <li><a>Analytics</a></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Admin
