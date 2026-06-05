import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()

const api = axios.create({
    baseURL: `smarthealth-city-production.up.railway.app:${process.env.PORT}`
});

export default api;