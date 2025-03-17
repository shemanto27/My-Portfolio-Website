import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../interceptor/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth() {
  const { type } = useParams();
  const navigate = useNavigate();

  const API_URL_REGISTER = "/api/users/";
  const API_URL_LOGIN = "/api/jwt/create/";

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (type === "register" && (!username || !retypePassword))) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (type === "register" && password !== retypePassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const requestData =
      type === "register"
        ? { email, name: username, password, re_password: retypePassword }
        : { email, password };

    try {
      const response = await API.post(type === "register" ? API_URL_REGISTER : API_URL_LOGIN, JSON.stringify(requestData), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (type === "register") {
        toast.success("User Registered Successfully!");
        navigate("/auth/login");
      } else {
        // Login: Store Tokens
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        API.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
        toast.success("Login Successful!");
        navigate("/admin");
      }
    } catch (error) {
      toast.error(error.response?.data ? JSON.stringify(error.response.data) : "An error occurred.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-3xl font-bold my-4 text-[#222222]">
        {type === "register" ? "Sign-up!" : "Login!"}
      </h1>
      <p className="text-[#222222] flex-wrap text-center">
        Registered users will get newsletters, download resources, <br />
        and software for free!
      </p>

      <form className="my-4 fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={handleSubmit}>
        <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        {type === "register" && (
          <>
            <input type="text" className="input" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
            <input type="password" className="input" placeholder="Re-type Password" onChange={(e) => setRetypePassword(e.target.value)} />
          </>
        )}

        {type === "login" && <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />}
        <button type="submit" className="btn btn-neutral mt-4 bg-[#E85235] border-b-4 border-0 border-[#DD391A]">
          {type === "register" ? "Create Account" : "Login"}
        </button>
      </form>

      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default Auth;
