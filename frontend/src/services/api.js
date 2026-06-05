import axios from "axios";

const api = axios.create({
    baseURL: "https://smarthealth-city-backend.vercel.app"
});

export default api;
