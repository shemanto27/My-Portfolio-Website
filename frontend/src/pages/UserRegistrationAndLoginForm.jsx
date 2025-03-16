import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import  axios  from 'axios';



function UserRegistrationForm() {
  const { type } = useParams();
  const navigate = useNavigate();

  const API_URL_register = "/api/users/";
  const API_URL_login = "/api/jwt/create/";

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  console.log(email, username, password, retypePassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (type === "register") {
      formData.append("email", email);
      formData.append("name", username);
      formData.append("password", password);
      formData.append("re_password", retypePassword);

      try {
        const response = await axios.post(API_URL_register, formData, {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        });
        alert("User Registered Successfully!");
        navigate("/auth/login");
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    }
    else {
      formData.append("email", email);
      formData.append("password", password);

      try {
        const response = await axios.post(API_URL_login, formData, {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        });
        // storing access token in local storage
        localStorage.clear();
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
        navigate("/admin");
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    }

  }
  
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
      <h1 className='text-3xl font-bold my-4 text-[#222222]'>{type === "register" ? "Sign-up!" : "Login!"}</h1>
      <p className='text-[#222222] flex-wrap text-center'>Registered users will get newsletter, download resources <br></br> and software to use - Everything For FREE!!</p>

      <form className="my-4 fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={handleSubmit}>
        <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        {type === "register" && (
          <>
            <input type="text" className="input" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className="input" placeholder="Re-type Password" onChange={(e) => setRetypePassword(e.target.value)} />
          </>
        )}

        {type === "login" && (
          <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        )}

        <button type='submit' className="btn btn-neutral mt-4 bg-[#E85235] border-b-4 border-0 border-[#DD391A]">
          {type === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  )
}

export default UserRegistrationForm
