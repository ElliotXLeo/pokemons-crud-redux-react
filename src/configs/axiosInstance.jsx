import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_POKEMON_INC_MERN_API_URL
});

export default axiosInstance;