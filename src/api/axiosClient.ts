import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api", // Point to your API Gateway
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
