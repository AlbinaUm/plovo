import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://albina-server-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;