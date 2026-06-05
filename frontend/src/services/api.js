import axios from "axios";

const api = axios.create({
    baseURL: `https://smarthealth-city-production.up.railway.app:3000`
});

export default api;
