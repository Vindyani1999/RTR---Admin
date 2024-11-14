import axios from "axios";

// Primary Axios client (API Gateway at 5001)
const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api", // Point to your API Gateway
});

// Secondary Axios client (another API endpoint at 5002)
const axiosClientBookings = axios.create({
  baseURL: "http://localhost:5002/api", // Secondary API Gateway
});

// Set up interceptor for primary client to attach token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(new Error(error))
);

// Set up interceptor for secondary client to attach token
axiosClientBookings.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(new Error(error))
);

export default axiosClient;
export { axiosClientBookings };
