import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://soar-api',
});

export default apiClient;
