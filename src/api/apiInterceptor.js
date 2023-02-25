import axios from 'axios';

export const instance = axios.create({baseURL: 'http://192.168.1.35:8080'});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(`error ${error}`);
    return Promise.reject(error);
  },
);
