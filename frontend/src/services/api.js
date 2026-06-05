import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()

const api = axios.create({
    baseURL: `smarthealth-city-production.up.railway.app:3000`
});

export default api;