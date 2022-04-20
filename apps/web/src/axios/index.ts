import axios from 'axios';

const baseURL =
  (import.meta.env.VITE_APP_BASE_URL as string) || 'http://localhost:8911/api';

const instance = axios.create({
  baseURL,
});

export default instance;
