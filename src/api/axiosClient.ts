import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
