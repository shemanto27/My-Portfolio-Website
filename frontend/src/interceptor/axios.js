import axios from "axios";

// Base API instance
const API = axios.create({
  baseURL: "http://localhost:8000", // Change to your Django backend URL
  withCredentials: true,
});

// ---------------- Request Interceptor: Add Authorization Header ----------------
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ---------------- Response Interceptor: Handle Token Expiration ----------------
API.interceptors.response.use(
  (response) => response, // Return response if no error
  async (error) => {
    const originalRequest = error.config;

    // If response is 401 (Unauthorized) & the request was not already retried
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) throw new Error("No refresh token available");

        // Request new access token
        const { data } = await axios.post("http://localhost:8000/api/jwt/refresh/", {
          refresh: refreshToken,
        });

        // Store new token
        localStorage.setItem("access_token", data.access);
        API.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;

        // Retry the original request with the new token
        originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
        return API(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        localStorage.clear(); // Clear tokens on failure
        window.location.href = "/auth/login"; // Redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default API;
