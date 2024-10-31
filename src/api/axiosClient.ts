import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Set up Axios interceptor to automatically attach the token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
