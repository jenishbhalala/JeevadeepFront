import axios from 'axios';

const axiosInstance =  axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: false,
  crossDomain: true,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  // },
});

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  // const token = localStorage.getItem('access_token');
  // config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

axiosInstance.interceptors.response.use(response => {
  return response;
}, (error) => {
  if (!error.response) {
    // toast.error('Failed to connect with server !! Try again later ..');
  }
  // else if (error.response.status === 401) {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  // }
  // else if (error.response.status === 404) {
  //   // toast.error('Page not found');
  // }
  return Promise.reject(error);
});

export default axiosInstance;