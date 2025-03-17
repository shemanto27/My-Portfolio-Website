import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../interceptor/axios";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    delete API.defaults.headers.common["Authorization"];
    navigate("/auth/login");
    window.location.reload(); // Ensure a fresh state
  };

  return (
    <div>
      <button className="btn bg-[#E85235] border-[#DD391A] text-white shadow-none" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
