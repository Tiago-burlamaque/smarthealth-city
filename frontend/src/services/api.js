import axios from "axios";

const api = axios.create({
    baseURL: `smarthealth-city-production.up.railway.app:3000`
});

export default api;